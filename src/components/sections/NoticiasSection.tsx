import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Declaração de ITR: prazos e orientações",
    excerpt: "Entenda quem precisa declarar, prazos e como evitar multas no ITR.",
    category: "Tributário",
    date: "2025-08-01",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Safra de soja: expectativas e mercado",
    excerpt: "Veja as principais projeções para a safra e os impactos nas cotações.",
    category: "Agro",
    date: "2025-07-25",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Energia solar no campo: quando vale a pena?",
    excerpt: "Comparamos retorno do investimento em diferentes cenários no agro.",
    category: "Energia",
    date: "2025-07-18",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Crédito rural: novas linhas de financiamento",
    excerpt: "Conheça as principais modalidades de crédito disponíveis para 2025.",
    category: "Finanças",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Tecnologia no agro: drones e agricultura de precisão",
    excerpt: "Como a tecnologia está revolucionando a produção agrícola moderna.",
    category: "Tecnologia",
    date: "2025-07-10",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop",
  }
];

const NoticiasSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              {posts.map((post) => (
                <CarouselItem key={post.id} className="basis-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="text-sm">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(post.date).toLocaleDateString("pt-BR")}
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {post.title}
                        </CardTitle>
                        
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <Button variant="default" className="w-fit">
                          Ler matéria completa
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
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
            {posts.map((_, index) => (
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
