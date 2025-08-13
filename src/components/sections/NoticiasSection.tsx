import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Notícias</h2>
            <p className="text-muted-foreground">Atualizações e conteúdos para o produtor rural</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/noticias">Ver todas</Link>
          </Button>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button variant="link" asChild className="p-0">
                      <Link to="/noticias">Ler mais</Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default NoticiasSection;
