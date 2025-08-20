import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, FileText, Users, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const AstecAssessoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Astec Assessoria
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Consultoria especializada em agronegócio. Oferecemos soluções completas 
                para aumentar a produtividade e rentabilidade da sua propriedade rural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Solicitar Consultoria
                </Button>
                <Button variant="outline" size="lg">
                  Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Serviços
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções completas para o desenvolvimento do seu agronegócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Planejamento Estratégico</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento de planos de negócio e estratégias para maximizar resultados.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Análise de Produtividade</h3>
                  <p className="text-muted-foreground">
                    Avaliação técnica e econômica para otimização da produção agrícola.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Gestão de Pessoas</h3>
                  <p className="text-muted-foreground">
                    Treinamento e capacitação de equipes para melhor desempenho.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Compliance Rural</h3>
                  <p className="text-muted-foreground">
                    Adequação às normas ambientais e trabalhistas do setor rural.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Documentação Rural</h3>
                  <p className="text-muted-foreground">
                    Organização e regularização de documentos e licenças necessárias.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Viabilidade Econômica</h3>
                  <p className="text-muted-foreground">
                    Estudos de viabilidade para novos projetos e investimentos rurais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Por que escolher a Astec Assessoria?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Nossa experiência e conhecimento a serviço do seu sucesso
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Mais de 10 anos de experiência no agronegócio",
                  "Equipe multidisciplinar especializada",
                  "Acompanhamento personalizado dos projetos",
                  "Metodologia comprovada e resultados mensuráveis",
                  "Parcerias estratégicas com instituições do setor",
                  "Atendimento em todo o estado de Mato Grosso do Sul"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para levar sua propriedade ao próximo nível?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato conosco e descubra como podemos ajudar a potencializar seus resultados
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button variant="outline" size="lg">
                  Agendar Reunião
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

export default AstecAssessoria;