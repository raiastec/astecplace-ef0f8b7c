import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" loading="lazy" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" asChild>
                  <Link to="/noticias">Ler mais</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
