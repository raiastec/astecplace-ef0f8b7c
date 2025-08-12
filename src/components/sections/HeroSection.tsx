import SearchCard from "@/components/search/SearchCard";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Imóvel Rural</span> é no ASTECPLACE!
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            O maior portal de anúncios rurais do Brasil
          </p>
          <p className="text-lg opacity-80">
            Aqui comprador fala direto com vendedor!
          </p>
        </div>
        
        {/* Search Card */}
        <div className="max-w-md mx-auto">
          <SearchCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;