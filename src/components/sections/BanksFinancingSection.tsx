import { Button } from "@/components/ui/button";
import { useState } from "react";
import GeneralContactForm from "@/components/forms/GeneralContactForm";
import BanksCarousel from "@/components/sections/BanksCarousel";

const BanksFinancingSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bancos Financiadores
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Principais instituições financeiras que oferecem linhas de crédito para energia solar
            </p>
          </div>

          <BanksCarousel />

          <div className="mt-12 bg-muted/30 rounded-xl p-6 text-center">
            <p className="text-muted-foreground mb-4">
              Entre em contato conosco para descobrir as melhores condições de financiamento para seu projeto de energia solar
            </p>
            <Button onClick={() => setIsContactFormOpen(true)}>
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>

      <GeneralContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formType="consultor"
      />
    </section>
  );
};

export default BanksFinancingSection;
