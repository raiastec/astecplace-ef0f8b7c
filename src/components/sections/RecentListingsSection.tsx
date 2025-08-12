import ListingCard from "@/components/listings/ListingCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RecentListingsSection = () => {
  const recentListings = [
    {
      title: "Fazenda de 500 hectares em Goiás",
      price: "R$ 2.500.000",
      location: "Goiânia - GO",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      category: "Imóvel Rural",
      isNew: true,
      publishedDate: "2 dias"
    },
    {
      title: "Trator John Deere 6110M",
      price: "R$ 185.000",
      location: "Ribeirão Preto - SP",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      category: "Maquinário",
      isNew: true,
      publishedDate: "1 dia"
    },
    {
      title: "Casa com 3 quartos no centro",
      price: "R$ 320.000",
      location: "Uberlândia - MG",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      category: "Imóvel Urbano",
      isNew: false,
      publishedDate: "3 dias"
    },
    {
      title: "Toyota Hilux 2020",
      price: "R$ 145.000",
      location: "Campo Grande - MS",
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      category: "Veículo",
      isNew: false,
      publishedDate: "1 semana"
    },
    {
      title: "Sítio com 20 hectares",
      price: "R$ 450.000",
      location: "Piracicaba - SP",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      category: "Imóvel Rural",
      isNew: true,
      publishedDate: "2 dias"
    },
    {
      title: "Colheitadeira Case IH",
      price: "R$ 680.000",
      location: "Sorriso - MT",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      category: "Maquinário",
      isNew: false,
      publishedDate: "5 dias"
    }
  ];

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
          
          <Button variant="outline" className="hidden md:flex">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentListings.map((listing, index) => (
            <ListingCard
              key={index}
              title={listing.title}
              price={listing.price}
              location={listing.location}
              imageUrl={listing.imageUrl}
              category={listing.category}
              isNew={listing.isNew}
              publishedDate={listing.publishedDate}
            />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            Ver todos os anúncios
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentListingsSection;