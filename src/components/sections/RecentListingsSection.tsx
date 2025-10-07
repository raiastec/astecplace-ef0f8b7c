import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import ListingCard from "@/components/listings/ListingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Anuncio {
  id: string;
  titulo: string;
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

const RecentListingsSection = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentAnuncios();
  }, []);

  const fetchRecentAnuncios = async () => {
    try {
      const { data, error } = await supabase
        .from('anuncios')
        .select('*')
        .eq('ativo', true)
        .order('data_publicacao', { ascending: false })
        .limit(6);

      if (error) throw error;
      setAnuncios(data || []);
    } catch (error) {
      console.error('Erro ao buscar anúncios recentes:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Carregando anúncios...</p>
          </div>
        </div>
      </section>
    );
  }

  if (anuncios.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anúncios Recentes
            </h2>
            <p className="text-muted-foreground">Nenhum anúncio disponível no momento.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anúncios Recentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Confira as últimas oportunidades disponíveis
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link to="/catalogo">
              Ver todos
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anuncios.map((anuncio) => (
            <ListingCard
              key={anuncio.id}
              id={anuncio.id}
              title={anuncio.titulo}
              price={anuncio.preco ? formatPrice(anuncio.preco) : 'Consulte'}
              location="MS" // Por enquanto padrão, depois pode vir do banco
              category={categoriaLabels[anuncio.categoria as keyof typeof categoriaLabels] || 'Outros'}
              imageUrl={anuncio.imagens?.[0] || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'}
              isNew={new Date(anuncio.data_publicacao) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)} // Novo se publicado nos últimos 7 dias
              publishedDate={new Date(anuncio.data_publicacao).toLocaleDateString('pt-BR', { 
                day: 'numeric', 
                month: 'short' 
              })}
            />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" asChild>
            <Link to="/catalogo">
              Ver todos os anúncios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentListingsSection;