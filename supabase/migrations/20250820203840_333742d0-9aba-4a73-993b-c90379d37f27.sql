-- Add additional fields to anuncios table for enhanced search functionality
ALTER TABLE public.anuncios 
ADD COLUMN localizacao TEXT,
ADD COLUMN tipo_negocio TEXT DEFAULT 'venda' CHECK (tipo_negocio IN ('venda', 'arrendamento', 'aluguel')),
ADD COLUMN tags TEXT[];

-- Create index for better search performance
CREATE INDEX idx_anuncios_titulo_search ON public.anuncios USING gin(to_tsvector('portuguese', titulo));
CREATE INDEX idx_anuncios_descricao_search ON public.anuncios USING gin(to_tsvector('portuguese', descricao));
CREATE INDEX idx_anuncios_tags ON public.anuncios USING gin(tags);
CREATE INDEX idx_anuncios_localizacao ON public.anuncios(localizacao);
CREATE INDEX idx_anuncios_tipo_negocio ON public.anuncios(tipo_negocio);
CREATE INDEX idx_anuncios_categoria ON public.anuncios(categoria);
CREATE INDEX idx_anuncios_preco ON public.anuncios(preco);