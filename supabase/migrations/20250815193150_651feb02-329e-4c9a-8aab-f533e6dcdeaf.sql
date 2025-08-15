-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('admin', 'anunciante');

-- Create profiles table for user data
CREATE TABLE public.profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'anunciante',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create anuncios table
CREATE TABLE public.anuncios (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2),
    imagens TEXT[] DEFAULT '{}',
    categoria TEXT,
    data_publicacao TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    usuario_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    ativo BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create noticias table
CREATE TABLE public.noticias (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    imagem_capa TEXT,
    data_publicacao TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    autor_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    publicado BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anuncios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;

-- Create storage buckets for images
INSERT INTO storage.buckets (id, name, public) VALUES 
    ('anuncios', 'anuncios', true),
    ('noticias', 'noticias', true);

-- Create function to check user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID)
RETURNS user_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
    SELECT role FROM public.profiles WHERE user_id = user_uuid;
$$;

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (user_id, nome, email, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data ->> 'nome', 'Usuário'),
        NEW.email,
        'anunciante'
    );
    RETURN NEW;
END;
$$;

-- Create trigger for new user
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles"
    ON public.profiles FOR SELECT
    USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Admins can update any profile"
    ON public.profiles FOR UPDATE
    USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for anuncios
CREATE POLICY "Anyone can view active anuncios"
    ON public.anuncios FOR SELECT
    USING (ativo = true);

CREATE POLICY "Authenticated users can view all anuncios"
    ON public.anuncios FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Users can create anuncios"
    ON public.anuncios FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Users can update their own anuncios"
    ON public.anuncios FOR UPDATE
    TO authenticated
    USING (auth.uid() = usuario_id);

CREATE POLICY "Admins can update any anuncio"
    ON public.anuncios FOR UPDATE
    TO authenticated
    USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Users can delete their own anuncios"
    ON public.anuncios FOR DELETE
    TO authenticated
    USING (auth.uid() = usuario_id);

CREATE POLICY "Admins can delete any anuncio"
    ON public.anuncios FOR DELETE
    TO authenticated
    USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for noticias
CREATE POLICY "Anyone can view published noticias"
    ON public.noticias FOR SELECT
    USING (publicado = true);

CREATE POLICY "Authenticated users can view all noticias"
    ON public.noticias FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admins can create noticias"
    ON public.noticias FOR INSERT
    TO authenticated
    WITH CHECK (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can update noticias"
    ON public.noticias FOR UPDATE
    TO authenticated
    USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete noticias"
    ON public.noticias FOR DELETE
    TO authenticated
    USING (public.get_user_role(auth.uid()) = 'admin');

-- Storage policies for anuncios bucket
CREATE POLICY "Authenticated users can upload anuncio images"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'anuncios');

CREATE POLICY "Anyone can view anuncio images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'anuncios');

CREATE POLICY "Users can update their own anuncio images"
    ON storage.objects FOR UPDATE
    TO authenticated
    USING (bucket_id = 'anuncios');

CREATE POLICY "Users can delete their own anuncio images"
    ON storage.objects FOR DELETE
    TO authenticated
    USING (bucket_id = 'anuncios');

-- Storage policies for noticias bucket
CREATE POLICY "Admins can upload noticia images"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'noticias' AND public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Anyone can view noticia images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'noticias');

CREATE POLICY "Admins can update noticia images"
    ON storage.objects FOR UPDATE
    TO authenticated
    USING (bucket_id = 'noticias' AND public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can delete noticia images"
    ON storage.objects FOR DELETE
    TO authenticated
    USING (bucket_id = 'noticias' AND public.get_user_role(auth.uid()) = 'admin');

-- Create functions for timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_anuncios_updated_at
    BEFORE UPDATE ON public.anuncios
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_noticias_updated_at
    BEFORE UPDATE ON public.noticias
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();