-- Fix security issue: Remove overly permissive policy that allows authenticated users to see unpublished news
-- This policy allows authenticated users to see ALL news, including drafts
DROP POLICY IF EXISTS "Authenticated users can view all noticias" ON noticias;

-- Keep only the policy that allows everyone to see published news
-- This ensures only published content (publicado=true) is visible

-- Verify the correct policy exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'noticias' 
    AND policyname = 'Anyone can view published noticias'
  ) THEN
    -- Create the policy if it doesn't exist
    CREATE POLICY "Anyone can view published noticias"
      ON noticias
      FOR SELECT
      USING (publicado = true);
  END IF;
END $$;