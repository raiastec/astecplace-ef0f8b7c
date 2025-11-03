import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Eye, Calendar } from 'lucide-react';
import { useSearch, SearchFilters } from '@/hooks/useSearch';
import EnergiaSolarContent from '@/components/categories/EnergiaSolarContent';
import AstecAssessoriaContent from '@/components/categories/AstecAssessoriaContent';
import GeneralContactForm from '@/components/forms/GeneralContactForm';

const categoriaLabels: Record<string, string> = {
  'veiculos': 'Veículos',
  'Veiculos': 'Veículos',
  'imoveis_rurais': 'Imóveis Rurais',
  'Imovel Rural': 'Imóveis Rurais',
  'energia_solar': 'Energia Solar',
  'Energia Solar': 'Energia Solar',
  'astec_assessoria': 'Astec Assessoria',
  'Astec Assessoria': 'Astec Assessoria'
};

const CategoryListing = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [searchParams] = useSearchParams();
  const { anuncios, loading, searchAnuncios } = useSearch();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    if (categoria) {
      const filters: SearchFilters = {
        categoria: categoria
      };

      const searchParam = searchParams.get('search');
      if (searchParam) {
        filters.searchTerm = searchParam;
        setSearchTerm(searchParam);
      }

      searchAnuncios(filters);
    }
  }, [categoria, searchParams]);

  const handleSearch = () => {
    if (categoria) {
      const filters: SearchFilters = {
        categoria: categoria,
        searchTerm: searchTerm || undefined
      };
      searchAnuncios(filters);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const sortedAnuncios = [...anuncios].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return (a.preco || 0) - (b.preco || 0);
      case 'price-desc':
        return (b.preco || 0) - (a.preco || 0);
      case 'oldest':
        return new Date(a.data_publicacao).getTime() - new Date(b.data_publicacao).getTime();
      default: // 'recent'
        return new Date(b.data_publicacao).getTime() - new Date(a.data_publicacao).getTime();
    }
  });

  if (!categoria || !categoriaLabels[categoria as keyof typeof categoriaLabels]) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Categoria não encontrada</h1>
            <p className="text-muted-foreground">A categoria solicitada não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryTitle = categoriaLabels[categoria as keyof typeof categoriaLabels];
  const isEnergiaSolar = categoria === 'energia_solar';
  const isAstecAssessoria = categoria === 'astec_assessoria';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        
        {/* Institutional Content for Specific Categories */}
        {isEnergiaSolar && <EnergiaSolarContent />}
        {isAstecAssessoria && (
          <AstecAssessoriaContent onContactClick={() => setIsContactFormOpen(true)} />
        )}

        {/* Standard Category Header for other categories */}
        {!isEnergiaSolar && !isAstecAssessoria && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {categoryTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore todos os anúncios da categoria {categoryTitle.toLowerCase()}
            </p>
          </div>
        )}
      </main>
      
      <GeneralContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formType="consultor"
      />
      
      <Footer />
    </div>
  );
};

export default CategoryListing;