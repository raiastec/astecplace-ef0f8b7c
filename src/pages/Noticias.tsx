import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const news = [
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
    title: "Crédito rural: novidades para 2025",
    excerpt: "Principais linhas e taxas para financiar sua produção.",
    category: "Finanças",
    date: "2025-07-10",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=500&fit=crop",
  },
];

const Noticias = () => {
  useEffect(() => {
    document.title = "Notícias - ASTECPLACE";
  }, []);

  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Notícias do Agro e Assessoria</h1>
            <p className="text-muted-foreground mt-2">Atualizações, guias e novidades para produtores e parceiros</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map(item => (
              <article key={item.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-44 object-cover" loading="lazy" />
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Noticias;
