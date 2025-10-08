import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import GeneralContactForm from "@/components/forms/GeneralContactForm";
import conexaoImage from "@/assets/conexao-section.png";
import { 
  DollarSign, 
  Calculator, 
  FileText, 
  Building, 
  Shield, 
  Wheat, 
  Home, 
  Leaf,
  Droplets,
  TreePine,
  Stethoscope
} from "lucide-react";

const AstecAssessoriaSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const services = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Investimento",
      description: "Consultoria especializada para maximizar seus retornos em investimentos agrícolas.",
      color: "text-green-600"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Custeio",
      description: "Soluções financeiras para apoiar sua produção agrícola e pecuária.",
      color: "text-blue-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Consórcio",
      description: "Melhores opções de consórcio para realizar seus planos.",
      color: "text-purple-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Crédito Consignado",
      description: "Condições especiais de crédito com facilidade e segurança.",
      color: "text-orange-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguro Patrimonial",
      description: "Proteção completa para seu patrimônio e veículos.",
      color: "text-indigo-600"
    },
    {
      icon: <Wheat className="h-8 w-8" />,
      title: "Seguro Agrícola",
      description: "Coberturas completas para garantir a segurança do seu cultivo.",
      color: "text-yellow-600"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Crédito Fundiário",
      description: "Soluções para aquisição e melhoria de terras.",
      color: "text-green-700"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "CAR - Regularização Ambiental",
      description: "Cadastro Ambiental Rural completo para sua propriedade.",
      color: "text-green-600"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Outorga d'Água",
      description: "Regularização no uso de recursos hídricos.",
      color: "text-blue-600"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "PRAD",
      description: "Plano de Recuperação de Áreas Degradadas.",
      color: "text-red-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "ITR e CCIR",
      description: "Regularização fundiária e declarações fiscais.",
      color: "text-blue-600"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Serviços Agronômicos",
      description: "Consultoria técnica especializada para produção.",
      color: "text-green-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-width Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${conexaoImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Astec Assessoria Agropecuária
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Consultoria completa para o agronegócio - Do crédito à regularização ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`${service.color} mx-auto w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm inline-block">
            <CardContent className="p-6">
              <p className="text-lg font-semibold mb-4">
                Precisa de consultoria especializada?
              </p>
              <Button 
                size="lg"
                onClick={() => setIsContactFormOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Fale com um Especialista
              </Button>
            </CardContent>
          </Card>
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

export default AstecAssessoriaSection;
