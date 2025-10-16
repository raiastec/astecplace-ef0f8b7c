import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GeneralContactForm from "@/components/forms/GeneralContactForm";
import bancoDoBrasilLogo from "@/assets/banks/banco-do-brasil.png";
import caixaLogo from "@/assets/banks/caixa.png";
import santanderLogo from "@/assets/banks/santander.png";
import bradescoLogo from "@/assets/banks/bradesco.png";
import itauLogo from "@/assets/banks/itau.png";
import sicoobLogo from "@/assets/banks/sicoob.png";
import sicrediLogo from "@/assets/banks/sicredi.png";
import bvLogo from "@/assets/banks/bv.png";

const BanksFinancingSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const banks = [
    { name: "Banco do Brasil", logo: bancoDoBrasilLogo },
    { name: "Caixa Econômica", logo: caixaLogo },
    { name: "Santander", logo: santanderLogo },
    { name: "Bradesco", logo: bradescoLogo },
    { name: "Itaú", logo: itauLogo },
    { name: "Sicoob", logo: sicoobLogo },
    { name: "Sicredi", logo: sicrediLogo },
    { name: "BV Financeira", logo: bvLogo },
  ];

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-full h-24 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src={bank.logo} 
                      alt={`Logo ${bank.name}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{bank.name}</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => setIsContactFormOpen(true)}
                  >
                    Solicitar Contato
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-6 text-center">
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
