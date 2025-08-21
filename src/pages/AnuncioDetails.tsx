import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';

interface Anuncio {
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

const categoriaLabels = {
  'imoveis_rurais': 'Imóveis Rurais',
  'veiculos': 'Veículos',
  'energia_solar': 'Energia Solar',
  'astec_assessoria': 'Astec Assessoria',
  'maquinas_agricolas': 'Máquinas Agrícolas',
  'outros': 'Outros'
};

const AnuncioDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [anuncio, setAnuncio] = useState<Anuncio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchAnuncio = async () => {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('anuncios')
          .select('*')
          .eq('id', id)
          .eq('ativo', true)
          .single();

        if (error) throw error;
        setAnuncio(data);
      } catch (err) {
        console.error('Erro ao carregar anúncio:', err);
        setError('Anúncio não encontrado.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnuncio();
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const nextImage = () => {
    if (anuncio?.imagens) {
      setCurrentImageIndex((prev) => 
        prev === anuncio.imagens.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (anuncio?.imagens) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? anuncio.imagens.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-64 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="h-96 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !anuncio) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Anúncio não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O anúncio solicitado não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/catalogo">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Catálogo
              </Link>
            </Button>
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
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/catalogo">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Catálogo
            </Link>
          </Button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-foreground">Catálogo</Link>
            <span>/</span>
            <span className="text-foreground">{anuncio.titulo}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carrossel de Imagens */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-muted">
                {anuncio.imagens && anuncio.imagens.length > 0 ? (
                  <>
                    <img
                      src={anuncio.imagens[currentImageIndex]}
                      alt={anuncio.titulo}
                      className="w-full h-full object-cover"
                    />
                    {anuncio.imagens.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {anuncio.imagens.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Sem imagens disponíveis
                  </div>
                )}
              </div>
            </Card>

            {/* Thumbnails */}
            {anuncio.imagens && anuncio.imagens.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {anuncio.imagens.map((imagem, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary' : 'border-muted'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={imagem}
                      alt={`${anuncio.titulo} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes do Anúncio */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">
                  {categoriaLabels[anuncio.categoria as keyof typeof categoriaLabels] || anuncio.categoria}
                </Badge>
                <Badge variant="outline">
                  {anuncio.tipo_negocio === 'venda' ? 'Venda' : 'Arrendamento'}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{anuncio.titulo}</h1>
              <div className="text-3xl font-bold text-primary mb-4">
                {anuncio.preco ? formatPrice(anuncio.preco) : 'Consulte o preço'}
              </div>
            </div>

            {/* Informações */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Publicado em {new Date(anuncio.data_publicacao).toLocaleDateString('pt-BR')}</span>
                </div>
                
                {anuncio.localizacao && (
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{anuncio.localizacao}</span>
                  </div>
                )}

                {anuncio.tags && anuncio.tags.length > 0 && (
                  <div className="flex items-start">
                    <Tag className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {anuncio.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Descrição */}
            {anuncio.descricao && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Descrição</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {anuncio.descricao}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Contato */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Interessado? Entre em contato</h3>
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Entrar em contato
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnuncioDetails;