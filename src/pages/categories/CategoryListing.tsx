import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Eye, Calendar } from 'lucide-react';
import { useSearch, SearchFilters } from '@/hooks/useSearch';

const categoriaLabels = {
  'veiculos': 'Veículos',
  'imoveis_rurais': 'Imóveis Rurais'
};

const CategoryListing = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [searchParams] = useSearchParams();
  const { anuncios, loading, searchAnuncios } = useSearch();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    if (categoria) {
      const filters: SearchFilters = {
        categoria: categoria
      };

      // Apply any URL search params
      const searchParam = searchParams.get('search');
      if (searchParam) {
        filters.searchTerm = searchParam;
        setSearchTerm(searchParam);
      }

      searchAnuncios(filters);
    }
  }, [categoria, searchParams, searchAnuncios]);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {categoryTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore todos os anúncios da categoria {categoryTitle.toLowerCase()}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={`Buscar em ${categoryTitle.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>
            <div className="md:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="oldest">Mais antigos</SelectItem>
                  <SelectItem value="price-asc">Preço: menor para maior</SelectItem>
                  <SelectItem value="price-desc">Preço: maior para menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {loading ? 'Carregando...' : `${sortedAnuncios.length} anúncios encontrados`}
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAnuncios.map((anuncio) => (
            <Card key={anuncio.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                {anuncio.imagens && anuncio.imagens.length > 0 ? (
                  <img 
                    src={anuncio.imagens[0]} 
                    alt={anuncio.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Sem imagem</span>
                  </div>
                )}
                <Badge className="absolute top-3 left-3 bg-background/80 text-foreground">
                  {categoryTitle}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(anuncio.data_publicacao).toLocaleDateString('pt-BR')}
                  </span>
                  {anuncio.localizacao && (
                    <span className="text-xs text-muted-foreground">
                      {anuncio.localizacao}
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold mb-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {anuncio.titulo}
                </h3>
                
                {anuncio.descricao && (
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {anuncio.descricao}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {anuncio.preco ? formatPrice(anuncio.preco) : 'Consulte'}
                  </span>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {!loading && sortedAnuncios.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">Nenhum anúncio encontrado</h3>
            <p className="text-muted-foreground">
              Não encontramos anúncios para os filtros selecionados. Tente ajustar sua busca.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryListing;