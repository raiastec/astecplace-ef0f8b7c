import CategoryCard from "@/components/categories/CategoryCard";
import { Home, Mountain, Car, Tractor, Sun, ClipboardList } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Imóveis Urbanos",
      description: "Casas, apartamentos e terrenos em áreas urbanas",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      icon: <Home className="w-6 h-6 text-primary-foreground" />,
      itemCount: 1245
    },
    {
      title: "Imóveis Rurais", 
      description: "Fazendas, sítios e propriedades rurais",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      icon: <Mountain className="w-6 h-6 text-primary-foreground" />,
      itemCount: 856
    },
    {
      title: "Veículos",
      description: "Carros, motos e veículos comerciais",
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      icon: <Car className="w-6 h-6 text-primary-foreground" />,
      itemCount: 2341
    },
    {
      title: "Maquinários Agrícolas",
      description: "Tratores, colheitadeiras e equipamentos rurais",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      icon: <Tractor className="w-6 h-6 text-primary-foreground" />,
      itemCount: 432
    },
    {
      title: "Energia Solar",
      description: "Soluções fotovoltaicas para o campo e cidade",
      imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop",
      icon: <Sun className="w-6 h-6 text-primary-foreground" />,
      itemCount: 128
    },
    {
      title: "Astec Assessoria",
      description: "Consultoria e serviços especializados para o agro",
      imageUrl: "https://images.unsplash.com/photo-1551292831-023188e78222?w=400&h=300&fit=crop",
      icon: <ClipboardList className="w-6 h-6 text-primary-foreground" />,
      itemCount: 76
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura nas nossas principais categorias
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              icon={category.icon}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;