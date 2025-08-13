import CategoryCard from "@/components/categories/CategoryCard";
import { Home, Mountain, Car, Tractor, Sun, ClipboardList } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Energia Solar",
      description: "Soluções fotovoltaicas sustentáveis para campo e cidade",
      imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&h=400&fit=crop",
      icon: <Sun className="w-8 h-8 text-white" />,
      itemCount: 128,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Astec Assessoria",
      description: "Consultoria especializada para o agronegócio",
      imageUrl: "https://images.unsplash.com/photo-1551292831-023188e78222?w=600&h=400&fit=crop",
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      itemCount: 76,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Imobiliária",
      description: "Imóveis urbanos e rurais para todos os perfis",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      icon: <Home className="w-8 h-8 text-white" />,
      itemCount: 2101,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Veículos",
      description: "Carros, motos e veículos comerciais",
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      icon: <Car className="w-8 h-8 text-white" />,
      itemCount: 2341,
      gradient: "from-red-500 to-pink-500"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              icon={category.icon}
              itemCount={category.itemCount}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;