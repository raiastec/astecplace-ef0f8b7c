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
    <section id="quem-somos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Quem Somos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ASTECPLACE - Conectando Negócios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos o maior portal de vendas rurais e urbanas do Brasil, 
            conectando compradores e vendedores de forma direta e segura.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center relative">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mx-auto mb-6">
              <Target className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Anuncie seu produto ou serviço</h3>
            <p className="text-muted-foreground">
              Cadastre seus produtos e serviços de forma rápida e fácil em nossa plataforma.
            </p>
            {/* Connector arrow */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"></div>
          </div>
          
          <div className="text-center relative">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mx-auto mb-6">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Conecte-se a compradores e vendedores</h3>
            <p className="text-muted-foreground">
              Nossa plataforma conecta você diretamente com interessados em seus produtos.
            </p>
            {/* Connector arrow */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"></div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mx-auto mb-6">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Planos e Destaques</h3>
            <p className="text-muted-foreground">
              Escolha o plano ideal e destaque seus anúncios para alcançar mais clientes.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Facilitar a conexão direta entre compradores e vendedores, oferecendo uma plataforma 
              segura, eficiente e acessível para todos os tipos de negócios, desde propriedades rurais 
              até veículos e equipamentos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Transparência em todas as transações</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Suporte especializado para cada categoria</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Tecnologia de ponta para melhor experiência</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Nossos Valores</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Confiança</h4>
                <p className="text-sm text-muted-foreground">
                  Construímos relacionamentos baseados na transparência e honestidade.
                </p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Inovação</h4>
                <p className="text-sm text-muted-foreground">
                  Sempre buscamos novas formas de melhorar a experiência do usuário.
                </p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Excelência</h4>
                <p className="text-sm text-muted-foreground">
                  Nos comprometemos com a qualidade em todos os aspectos do nosso serviço.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para <span className="text-primary">Anunciar</span> seu Produto ou Serviço?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de vendedores que já descobriram o poder do ASTECPLACE. 
            Cadastre seu produto agora e alcance milhares de compradores em potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleAnunciarClick}>
              <MessageSquare className="h-5 w-5 mr-2" />
              Anunciar Agora
            </Button>
            <Button variant="outline" size="lg" onClick={handleConsultorClick}>
              <Calendar className="h-5 w-5 mr-2" />
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