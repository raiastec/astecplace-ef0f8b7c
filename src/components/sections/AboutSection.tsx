import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GeneralContactForm from "@/components/forms/GeneralContactForm";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  MessageSquare,
  Calendar
} from "lucide-react";

const AboutSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formType, setFormType] = useState<'anunciar' | 'consultor'>('anunciar');

  const handleAnunciarClick = () => {
    setFormType('anunciar');
    setIsContactFormOpen(true);
  };

  const handleConsultorClick = () => {
    setFormType('consultor');
    setIsContactFormOpen(true);
  };
  return (
    <section id="quem-somos" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-3 md:mb-4">Quem Somos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
            ASTECPLACE - Conectando Negócios
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Somos o maior portal de vendas rurais e urbanas do Brasil, 
            conectando compradores e vendedores de forma direta e segura.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="text-center relative px-2">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg mx-auto mb-4 md:mb-6">
              <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Anuncie seu produto ou serviço</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Cadastre seus produtos e serviços de forma rápida e fácil em nossa plataforma.
            </p>
            {/* Connector arrow */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"></div>
          </div>
          
          <div className="text-center relative px-2">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg mx-auto mb-4 md:mb-6">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Conecte-se a compradores e vendedores</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Nossa plataforma conecta você diretamente com interessados em seus produtos.
            </p>
            {/* Connector arrow */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"></div>
          </div>
          
          <div className="text-center px-2">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg mx-auto mb-4 md:mb-6">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Planos e Destaques</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Escolha o plano ideal e destaque seus anúncios para alcançar mais clientes.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="px-2">
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 md:mr-3 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold">Nossa Missão</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Facilitar a conexão direta entre compradores e vendedores, oferecendo uma plataforma 
              segura, eficiente e acessível para todos os tipos de negócios, desde propriedades rurais 
              até veículos e equipamentos.
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0" />
                <span>Transparência em todas as transações</span>
              </li>
              <li className="flex items-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0" />
                <span>Suporte especializado para cada categoria</span>
              </li>
              <li className="flex items-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0" />
                <span>Tecnologia de ponta para melhor experiência</span>
              </li>
            </ul>
          </div>
          
          <div className="px-2">
            <div className="flex items-center mb-4 md:mb-6">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 md:mr-3 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold">Nossos Valores</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-1 md:mb-2 text-sm sm:text-base">Confiança</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Construímos relacionamentos baseados na transparência e honestidade.
                </p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-1 md:mb-2 text-sm sm:text-base">Inovação</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Sempre buscamos novas formas de melhorar a experiência do usuário.
                </p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-1 md:mb-2 text-sm sm:text-base">Excelência</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Nos comprometemos com a qualidade em todos os aspectos do nosso serviço.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 px-2">
            Pronto para <span className="text-primary">Anunciar</span> seu Produto ou Serviço?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-2">
            Junte-se a milhares de vendedores que já descobriram o poder do ASTECPLACE. 
            Cadastre seu produto agora e alcance milhares de compradores em potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" onClick={handleAnunciarClick}>
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Anunciar Agora
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={handleConsultorClick}>
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Falar com Consultor
            </Button>
          </div>
        </div>

        <GeneralContactForm 
          isOpen={isContactFormOpen}
          onClose={() => setIsContactFormOpen(false)}
          formType={formType}
        />
      </div>
    </section>
  );
};

export default AboutSection;