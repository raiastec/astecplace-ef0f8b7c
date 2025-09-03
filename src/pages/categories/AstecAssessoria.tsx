import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, DollarSign, FileText, Leaf, Stethoscope, Calculator, Home, Droplets, Shield, Building, TreePine, Wheat } from 'lucide-react';

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
                <img src="/lovable-uploads/98278bd0-3ec7-4308-a78e-de9884b89a86.png" alt="Astec Assessoria Agropecuária" className="h-40 w-auto rounded-lg" />
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

        {/* Serviços de Crédito */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SERVIÇOS DE CRÉDITO
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">INVESTIMENTO</h3>
                  <p className="text-muted-foreground text-sm">
                    Procurando oportunidades de investimento? Nós oferecemos consultoria especializada para maximizar seus retornos! Entre em contato e descubra as melhores opções para o seu capital.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Calculator className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CUSTEIO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de custeio agrícola a pecuário? Oferecemos soluções financeiras para apoiar a sua produção! Entre em contato e impulsione seu negócio com nossos recursos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CONSÓRCIO</h3>
                  <p className="text-muted-foreground text-sm">
                    Pensando em consórcio? Nós oferecemos as melhores opções para você! Entre em contato e descubra como realizar seus planos com nossos consórcios vantajosos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Building className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CONSIGNADO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de crédito consignado? Nós oferecemos condições especiais para você! Entre em contato e obtenha o crédito que precisa com facilidade e segurança.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <DollarSign className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CRÉDITO COMERCIAL</h3>
                  <p className="text-muted-foreground text-sm">
                    Procurando crédito comercial? Oferecemos soluções financeiras flexíveis para impulsionar seu negócio! Entre em contato e descubra como podemos apoiar seu crescimento.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">SEGURO PATRIMONIAL</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisa de seguro patrimonial ou veicular? Nós oferecemos proteção completa para seu patrimônio e veículos! Entre em contato e garanta a segurança que você merece.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Wheat className="h-12 w-12 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">SEGURO AGRÍCOLA</h3>
                  <p className="text-muted-foreground text-sm">
                    Proteja sua produção com nosso seguro agrícola! Oferecemos coberturas completas para garantir a segurança do seu cultivo. Entre em contato e assegure seu negócio com tranquilidade.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Home className="h-12 w-12 text-green-700 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CRÉDITO FUNDIÁRIO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de crédito fundiário? Oferecemos soluções financeiras para aquisição e melhoria de terras! Entre em contato e realize seus projetos com nosso apoio especializado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regularização Fundiária */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                REGULARIZAÇÃO FUNDIÁRIA
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CCIR</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisa do Certificado de Cadastro de Imóvel Rural (CCIR)? Nós facilitamos o processo para você! Entre em contato e regularize seu imóvel rural com segurança e eficiência.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Calculator className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">NIRF ITR</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando regularizar seu ITR? Estamos prontos para ajudar você a cumprir suas obrigações fiscais com a receita federal nossa empresa oferece serviço especializado para a declaração do ITR.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">DECLARAÇÃO DE ITR</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando declarar seu ITR? Nossa empresa oferece serviço especializado para a declaração do ITR.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Building className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">MEMORIAL DESCRITIVO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de memorial descritivo? Nós elaboramos documentos detalhados e precisos para seu projeto! Entre em contato e garanta a qualidade e a conformidade do seu empreendimento.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CRO NA PGT E GOV</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando da Certidão de Regularização da Obra (CRO) na PGT e GOV? Nós cuidamos de todo o processo para você! Entre em contato e regularize sua obra com eficiência e segurança.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Calculator className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">TOPOGRAFIA</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisa de serviços de topografia? Oferecemos medições precisas e detalhadas para seu projeto! Entre em contato e conte com nossa expertise para obter resultados confiáveis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">ESCRITURA</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de escritura? Nós cuidamos de todo o processo para você! Entre em contato e regularize seu imóvel com segurança e tranquilidade.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Home className="h-12 w-12 text-green-700 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">TÍTULO NA PGT</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisa de título na PGT? Nós facilitamos todo o processo para você! Entre em contato e regularize seu imóvel com segurança e eficiência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regularização Ambiental */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                REGULARIZAÇÃO AMBIENTAL
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Leaf className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CAR</h3>
                  <p className="text-muted-foreground text-sm">
                    Oferecemos o serviço completo de cadastro ambiental rural (CAR), essencial para garantir a conformidade ambiental da sua propriedade e assegurar diversos benefícios legais e econômicos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">OUTORGA D'ÁGUA</h3>
                  <p className="text-muted-foreground text-sm">
                    precisando de outorga de água? nós cuidamos de todo o processo para você! entre em contato e garanta a regularização e segurança no uso dos recursos hídricos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Droplets className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">DISPENSA DA OUTORGA D'ÁGUA</h3>
                  <p className="text-muted-foreground text-sm">
                    precisa de dispensa de outorga de água? nós facilitamos o processo para você! entre em contato e regularize sua situação de forma rápida e segura.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Shield className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">LICENÇA DE OPERAÇÃO LP, LI E LO</h3>
                  <p className="text-muted-foreground text-sm">
                    precisa de licença prévia (lp), licença de instalação (li) ou licença de operação (lo)? nós cuidamos de todo o processo para você! entre em contato e garanta a regularização ambiental do seu empreendimento.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <TreePine className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">PRAD</h3>
                  <p className="text-muted-foreground text-sm">
                    precisando de plano de recuperação de áreas degradadas (prad)? nós elaboramos e executamos projetos completos para você! entre em contato e garanta a sustentabilidade e recuperação ambiental.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Wheat className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">LICENÇA DE LIMPEZA DE PASTAGEM</h3>
                  <p className="text-muted-foreground text-sm">
                    precisa de licença para limpeza de pastagem? nós cuidamos de todo o processo para você! entre em contato e regularize sua atividade com segurança e agilidade.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <FileText className="h-12 w-12 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">LAUDO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de laudo técnico? Nós oferecemos serviços completos e precisos para atender suas necessidades! Entre em contato e garanta a qualidade e confiabilidade do seu projeto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços Agronômicos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SERVIÇOS AGRONÔMICOS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Stethoscope className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">EXAME ANDROLÓGICO</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de exame andrológico? Nós oferecemos diagnósticos completos e precisos para garantir a saúde reprodutiva dos seus animais! Entre em contato e agende uma avaliação.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">EXAME DE BRUCELOSE E TUBERCULOSE</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de exames de brucelose e tuberculose? Oferecemos diagnósticos precisos para garantir a saúde do seu rebanho! Entre em contato e agende seus exames.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Shield className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">ATESTADO DE SANIDADE ANIMAL</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisa de atestado de sanidade animal? Nós oferecemos laudos confiáveis para garantir a saúde do seu rebanho! Entre em contato e obtenha a certificação necessária.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Calculator className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CONSULTORIA PECUÁRIA</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de consultoria pecuária? Nós oferecemos soluções especializadas para melhorar a eficiência e a produtividade do seu rebanho! Entre em contato e transforme sua produção.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <Wheat className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CONSULTORIA AGRÍCOLA</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de consultoria agrícola? Nós oferecemos soluções especializadas para melhorar a eficiência e a produtividade da sua lavoura! Entre em contato e transforme sua produção.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <DollarSign className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">CORRETAGEM DE AGROPRODUTOS</h3>
                  <p className="text-muted-foreground text-sm">
                    Precisando de corretagem de agroprodutos? Nós conectamos você aos melhores negócios do setor! Entre em contato e maximize seus resultados com nossa expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principais Parceiros */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                CONHEÇA NOSSOS PRINCIPAIS PARCEIROS
              </h2>
            </div>
            
            {/* Carrossel de logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">CRESOL</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">SICOOB</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">IBAMA</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">INCRA</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-sm">COFFEEBRAND</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">SEDAM</span>
                </div>
                {/* Duplicar para efeito contínuo */}
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">CRESOL</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">SICOOB</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">IBAMA</span>
                </div>
                <div className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">INCRA</span>
                </div>
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