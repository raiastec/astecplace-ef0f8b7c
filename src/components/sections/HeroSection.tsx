import { useState } from "react";
import { Button } from "@/components/ui/button";
import GeneralContactForm from "@/components/forms/GeneralContactForm";
import logoAstecHero from "@/assets/logo-astec-hero.jpg";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <section className="py-[60px] bg-gradient-to-b from-[#0a4d1a] to-[#0d6827]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo Image */}
            <div className="mb-8">
              <img 
                src={logoAstecHero} 
                alt="Astec Assessoria e Projetos Agropecuários" 
                className="w-full max-w-[550px] mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ASTEC Assessoria e Projetos Agropecuários
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Soluções completas em crédito rural, regularização fundiária e ambiental, e consultoria agronômica para o sucesso do seu negócio.
            </p>
            
            {/* CTA Button */}
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-[#008000] hover:bg-[#006600] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <GeneralContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formType="consultor"
      />
    </>
  );
};

export default HeroSection;