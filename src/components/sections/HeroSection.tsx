import SearchCard from "@/components/search/SearchCard";
import heroBackground from "@/assets/hero-background.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Seu Negócio</span> é no <span className="text-[#008000]">ASTECPLACE</span>!
          </h1>
          <p className="text-lg opacity-80">
            O maior portal de anúncios do Brasil - Aqui comprador fala direto com vendedor!
          </p>
        </motion.div>
        
        {/* Search Card */}
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <SearchCard />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;