import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import SolarCalculator from '@/components/sections/SolarCalculator';
import BanksFinancingSection from '@/components/sections/BanksFinancingSection';

const EnergiaSolar = () => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
    "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Serviço Solar Especializado */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920" 
              alt="Painéis Solares" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Serviço Solar<br />
              <span className="text-green-400">Especializado</span>
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Acreditamos em práticas de energia sustentável que ajudam a melhorar os serviços de instalação de painéis solares.
            </p>
          </div>
        </section>

        {/* Sobre a Empresa Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/d2fbd689-55ef-483a-a521-936906840abc.png" 
                  alt="EcoPower Franchising" 
                  className="max-w-[300px] w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                  SOBRE A EMPRESA
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Acreditamos em práticas sustentáveis de energia
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Estamos encontrando maneiras de levar energia a mais pessoas, todos os dias. 
                  Nosso objetivo é fornecer mais energia limpa e sustentável para todo o país.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Custos de energia mais baixos',
                    'Ecologicamente correto',
                    'Aumento no valor da sua casa',
                    'Independência energética'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Calculator Section */}
        <SolarCalculator />

        {/* Banks Financing Section */}
        <BanksFinancingSection />

        {/* Portfolio Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                PORTFÓLIO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Projetos
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Somos capazes de concluir projetos de qualquer escala, da preferência do cliente. 
                Nossos serviços incluem, entre outros, design, construção e instalação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {portfolioImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Projeto ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnergiaSolar;