-- Remover políticas antigas que podem estar causando timeout
DROP POLICY IF EXISTS "Users can upload their own images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view anuncios images" ON storage.objects;
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own avatar" ON storage.objects;

-- Políticas otimizadas para o bucket anuncios (mais simples e rápidas)
CREATE POLICY "Public access to anuncios bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'anuncios');

CREATE POLICY "Authenticated users can upload to anuncios"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'anuncios' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can update anuncios files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'anuncios'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can delete anuncios files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'anuncios'
  AND auth.role() = 'authenticated'
);

-- Políticas otimizadas para o bucket noticias
CREATE POLICY "Public access to noticias bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'noticias');

CREATE POLICY "Authenticated users can upload to noticias"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'noticias'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can update noticias files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'noticias'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can delete noticias files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'noticias'
  AND auth.role() = 'authenticated'
);