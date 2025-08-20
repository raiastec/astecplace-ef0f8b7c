import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SearchFilters {
  searchTerm?: string;
  categoria?: string;
  localizacao?: string;
  tipoNegocio?: string;
  precoMin?: number;
  precoMax?: number;
}

export interface Anuncio {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagens: string[];
  localizacao: string;
  tipo_negocio: string;
  tags: string[];
  data_publicacao: string;
  ativo: boolean;
}

export const useSearch = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchAnuncios = async (filters: SearchFilters) => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('anuncios')
        .select('*')
        .eq('ativo', true);

      // Text search (título e descrição)
      if (filters.searchTerm) {
        query = query.or(`titulo.ilike.%${filters.searchTerm}%,descricao.ilike.%${filters.searchTerm}%`);
      }

      // Category filter
      if (filters.categoria) {
        query = query.eq('categoria', filters.categoria);
      }

      // Location filter
      if (filters.localizacao) {
        query = query.ilike('localizacao', `%${filters.localizacao}%`);
      }

      // Business type filter
      if (filters.tipoNegocio) {
        query = query.eq('tipo_negocio', filters.tipoNegocio);
      }

      // Price range filters
      if (filters.precoMin) {
        query = query.gte('preco', filters.precoMin);
      }
      if (filters.precoMax) {
        query = query.lte('preco', filters.precoMax);
      }

      // Order by publication date (most recent first)
      query = query.order('data_publicacao', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      setAnuncios(data || []);
    } catch (err) {
      console.error('Erro ao buscar anúncios:', err);
      setError('Erro ao buscar anúncios. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    anuncios,
    loading,
    error,
    searchAnuncios
  };
};