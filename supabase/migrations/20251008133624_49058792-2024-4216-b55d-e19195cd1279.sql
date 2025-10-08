-- Create new enum for roles (if user_role doesn't match what we need)
DO $$ BEGIN
    CREATE TYPE public.app_role AS ENUM ('admin', 'anunciante');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;

CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Migrate existing roles from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT user_id, role::TEXT
FROM public.profiles
WHERE role IS NOT NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- Update RLS policies on anuncios table
DROP POLICY IF EXISTS "Admins can delete any anuncio" ON public.anuncios;
DROP POLICY IF EXISTS "Admins can update any anuncio" ON public.anuncios;

CREATE POLICY "Admins can delete any anuncio"
ON public.anuncios
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update any anuncio"
ON public.anuncios
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Update RLS policies on noticias table
DROP POLICY IF EXISTS "Admins can create noticias" ON public.noticias;
DROP POLICY IF EXISTS "Admins can delete noticias" ON public.noticias;
DROP POLICY IF EXISTS "Admins can update noticias" ON public.noticias;

CREATE POLICY "Admins can create noticias"
ON public.noticias
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete noticias"
ON public.noticias
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update noticias"
ON public.noticias
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Update RLS policies on profiles table
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

CREATE POLICY "Admins can update any profile"
ON public.profiles
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Fix storage policies for anuncios bucket
DROP POLICY IF EXISTS "Admins can delete anuncios files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own anuncios files" ON storage.objects;

CREATE POLICY "Admins can delete anuncios files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'anuncios' AND
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Users can delete their own anuncios files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'anuncios' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Fix storage policies for noticias bucket
DROP POLICY IF EXISTS "Admins can delete noticias files" ON storage.objects;

CREATE POLICY "Admins can delete noticias files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'noticias' AND
  public.has_role(auth.uid(), 'admin')
);

-- Update handle_new_user function to create role entry
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Insert profile
    INSERT INTO public.profiles (user_id, nome, email)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data ->> 'nome', 'Usuário'),
        NEW.email
    );
    
    -- Insert default role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'anunciante');
    
    RETURN NEW;
END;
$$;