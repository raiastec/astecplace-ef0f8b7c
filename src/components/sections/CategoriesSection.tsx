const CategoriesSection = () => {
  const categories = [
    {
      title: "Energia Solar",
      imageUrl: "/lovable-uploads/d2fbd689-55ef-483a-a521-936906840abc.png",
      itemCount: 128
    },
    {
      title: "Astec Assessoria",
      imageUrl: "/lovable-uploads/98278bd0-3ec7-4308-a78e-de9884b89a86.png",
      itemCount: 76
    },
    {
      title: "Imobiliária",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      itemCount: 2101
    },
    {
      title: "Veículos",
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop",
      itemCount: 2341
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const getCategoryLink = (title: string) => {
              switch (title) {
                case 'Energia Solar':
                  return '/energia-solar';
                case 'Astec Assessoria':
                  return '/astec-assessoria';
                case 'Veículos':
                  return '/categoria/veiculos';
                case 'Imobiliária':
                  return '/categoria/imoveis_rurais';
                default:
                  return '/catalogo';
              }
            };

            return (
              <a 
                href={getCategoryLink(category.title)}
                key={index}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
            
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              
              {/* Content - Hidden by default, shown on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              {/* Mobile - Always show title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{category.title}</h3>
              </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;