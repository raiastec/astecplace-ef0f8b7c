import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Sun, Zap, Leaf, TrendingUp } from 'lucide-react';

const EnergiaSolar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Sun className="h-16 w-16 text-yellow-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Energia Solar
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transforme sua propriedade com energia limpa e renovável. 
                Economize na conta de luz e contribua para um futuro mais sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button variant="outline" size="lg">
                  Ver Projetos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que escolher Energia Solar?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Vantagens que fazem toda a diferença para seu bolso e para o meio ambiente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Economia Garantida</h3>
                  <p className="text-muted-foreground">
                    Reduza sua conta de luz em até 95% e tenha retorno do investimento em poucos anos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Energia 100% limpa e renovável, contribuindo para a preservação do meio ambiente.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Energia Confiável</h3>
                  <p className="text-muted-foreground">
                    Sistema robusto e de baixa manutenção, com garantia de até 25 anos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Serviços
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Solução completa em energia solar do projeto à instalação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Projeto Personalizado",
                "Instalação Profissional", 
                "Manutenção Preventiva",
                "Monitoramento Online"
              ].map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">{service}</h3>
                    <p className="text-muted-foreground text-sm">
                      Serviço completo e especializado para sua necessidade
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para economizar com energia solar?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato conosco e receba um orçamento personalizado sem compromisso
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button variant="outline" size="lg">
                  Calcular Economia
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnergiaSolar;