import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Noticia {
  id: string;
  titulo: string;
  conteudo: string;
  imagem_capa?: string;
  data_publicacao: string;
  publicado: boolean;
}

const NoticiasSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('publicado', true)
        .order('data_publicacao', { ascending: false })
        .limit(5);

      if (error) throw error;
      setNoticias(data || []);
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Carregando notícias...</p>
          </div>
        </div>
      </section>
    );
  }

  if (noticias.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Notícias</h2>
            <p className="text-muted-foreground">Nenhuma notícia publicada no momento.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Notícias</h2>
            <p className="text-muted-foreground">Fique por dentro das últimas novidades do agronegócio</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/noticias" className="flex items-center gap-2">
              Ver todas
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {noticias.map((noticia) => (
                <CarouselItem key={noticia.id} className="basis-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                        {noticia.imagem_capa ? (
                          <img 
                            src={noticia.imagem_capa} 
                            alt={noticia.titulo}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground">Sem imagem</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="text-sm">Notícia</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(noticia.data_publicacao).toLocaleDateString("pt-BR")}
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {noticia.titulo}
                        </CardTitle>
                        
                        <p className="text-muted-foreground text-base leading-relaxed line-clamp-4">
                          {noticia.conteudo}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background" />
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {noticias.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
