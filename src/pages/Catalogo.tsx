import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Search, Filter, Eye } from 'lucide-react';
import { useSearch, SearchFilters } from '@/hooks/useSearch';

interface Anuncio {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagens: string[];
  data_publicacao: string;
  ativo: boolean;
}

const categoriaLabels = {
  'imoveis_rurais': 'Imóveis Rurais',
  'veiculos': 'Veículos',
  'energia_solar': 'Energia Solar',
  'astec_assessoria': 'Astec Assessoria',
  'maquinas_agricolas': 'Máquinas Agrícolas',
  'outros': 'Outros'
};

const Catalogo = () => {
  const [searchParams] = useSearchParams();
  const { anuncios, loading, searchAnuncios } = useSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Initialize from URL params
    const urlSearch = searchParams.get('search');
    const urlCategory = searchParams.get('categoria');
    const urlLocation = searchParams.get('localizacao');
    const urlTipoNegocio = searchParams.get('tipo_negocio');
    const urlPrecoMin = searchParams.get('preco_min');
    const urlPrecoMax = searchParams.get('preco_max');

    if (urlSearch) setSearchTerm(urlSearch);
    if (urlCategory) setSelectedCategory(urlCategory);

    const filters: SearchFilters = {};
    if (urlSearch) filters.searchTerm = urlSearch;
    if (urlCategory && urlCategory !== 'all') filters.categoria = urlCategory;
    if (urlLocation) filters.localizacao = urlLocation;
    if (urlTipoNegocio) filters.tipoNegocio = urlTipoNegocio;
    if (urlPrecoMin) filters.precoMin = parseFloat(urlPrecoMin);
    if (urlPrecoMax) filters.precoMax = parseFloat(urlPrecoMax);

    // If no filters from URL, load all anuncios
    searchAnuncios(Object.keys(filters).length > 0 ? filters : {});
  }, [searchParams, searchAnuncios]);

  const handleFilter = () => {
    const filters: SearchFilters = {};
    
    if (searchTerm) filters.searchTerm = searchTerm;
    if (selectedCategory !== 'all') filters.categoria = selectedCategory;
    
    searchAnuncios(filters);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <p>Carregando anúncios...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Título e Descrição */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Catálogo de Anúncios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossos anúncios organizados por categoria. Encontre exatamente o que você precisa.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar anúncios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {Object.entries(categoriaLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleFilter}>
              <Search className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {loading ? 'Carregando...' : `${anuncios.length} anúncios encontrados`}
            {selectedCategory !== 'all' && ` em ${categoriaLabels[selectedCategory as keyof typeof categoriaLabels]}`}
          </p>
        </div>

        {/* Grid de Anúncios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anuncios.map((anuncio) => (
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
                  {categoriaLabels[anuncio.categoria as keyof typeof categoriaLabels] || 'Outros'}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(anuncio.data_publicacao).toLocaleDateString('pt-BR')}
                  </span>
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
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/anuncio/${anuncio.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Ver detalhes
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mensagem quando não há anúncios */}
        {!loading && anuncios.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">Nenhum anúncio encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou buscar por outros termos.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Catalogo;