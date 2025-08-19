-- Criar enum para categorias de anúncios
CREATE TYPE public.categoria_anuncio AS ENUM (
  'imoveis_rurais',
  'veiculos',
  'energia_solar',
  'astec_assessoria',
  'maquinas_agricolas',
  'outros'
);

-- Adicionar coluna de categoria na tabela anuncios
ALTER TABLE public.anuncios 
ADD COLUMN categoria categoria_anuncio DEFAULT 'outros';

-- Criar índice para melhorar performance nas consultas por categoria  
CREATE INDEX idx_anuncios_categoria ON public.anuncios(categoria);

-- Atualizar função de atualização de timestamp para funcionar com a nova coluna
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;