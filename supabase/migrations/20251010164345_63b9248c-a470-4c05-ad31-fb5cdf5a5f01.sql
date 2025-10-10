-- Remove the overly permissive policy that allows all authenticated users to see all listings
DROP POLICY IF EXISTS "Authenticated users can view all anuncios" ON public.anuncios;

-- Add a policy that allows users to see their own inactive listings
CREATE POLICY "Users can view their own inactive anuncios"
ON public.anuncios
FOR SELECT
USING (auth.uid() = usuario_id);

-- The existing "Anyone can view active anuncios" policy already covers active listings for everyone
-- The existing "Admins can update any anuncio" policy already covers admin access