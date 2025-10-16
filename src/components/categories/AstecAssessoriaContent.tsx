import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  FileText, 
  TrendingUp, 
  Home,
  Leaf,
  Users,
  Building2,
  DollarSign,
  ScrollText,
  Sprout,
  Wheat,
  Scale
} from "lucide-react";
import astecLogo from "@/assets/astecplace-logo.png";

interface AstecAssessoriaContentProps {
  onContactClick: () => void;
}

const AstecAssessoriaContent = ({ onContactClick }: AstecAssessoriaContentProps) => {
  const services = {
    credito: [
      {
        icon: DollarSign,
        title: "Investimento",
        description: "Financiamento para aquisição de máquinas, equipamentos e construções rurais."
      },
      {
        icon: Sprout,
        title: "Custeio",
        description: "Capital de giro para insumos, sementes e despesas operacionais da safra."
      },
      {
        icon: Wheat,
        title: "Comercialização",
        description: "Crédito para estocagem e comercialização da produção agrícola."
      }
    ],
    fundiaria: [
      {
        icon: FileText,
        title: "Regularização de Terras",
        description: "Documentação e legalização de propriedades rurais."
      },
      {
        icon: Scale,
        title: "Consultoria Jurídica",
        description: "Assessoria especializada em direito agrário e ambiental."
      },
      {
        icon: Home,
        title: "Georreferenciamento",
        description: "Mapeamento e certificação de áreas rurais."
      }
    ],
    ambiental: [
      {
        icon: Leaf,
        title: "CAR - Cadastro Ambiental Rural",
        description: "Registro obrigatório de imóveis rurais."
      },
      {
        icon: Building2,
        title: "Licenciamento Ambiental",
        description: "Obtenção de licenças para atividades rurais."
      },
      {
        icon: Sprout,
        title: "Recuperação de Áreas",
        description: "Projetos de recuperação e conservação ambiental."
      }
    ],
    agronomicos: [
      {
        icon: Briefcase,
        title: "Consultoria Técnica",
        description: "Orientação especializada para gestão da propriedade rural."
      },
      {
        icon: TrendingUp,
        title: "Planejamento Agrícola",
        description: "Projetos de viabilidade e gestão de produção."
      },
      {
        icon: ScrollText,
        title: "Laudos e Pareceres",
        description: "Elaboração de documentos técnicos especializados."
      }
    ]
  };

  const partners = [
    { name: "Banco do Brasil", logo: "/src/assets/banks/banco-do-brasil.png" },
    { name: "Caixa Econômica", logo: "/src/assets/banks/caixa.png" },
    { name: "Sicoob", logo: "/src/assets/banks/sicoob.png" },
    { name: "Sicredi", logo: "/src/assets/banks/sicredi.png" },
    { name: "Cresol", logo: "/src/assets/banks/cresol.png" },
    { name: "Banco da Amazônia", logo: "/src/assets/banks/banco-amazonia.jpg" }
  ];

  const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <Icon className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" onClick={onContactClick}>
          Entrar em Contato
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <img src={astecLogo} alt="Astec Assessoria" className="h-24 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Astec Assessoria Agropecuária
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Soluções completas em crédito rural, regularização fundiária e ambiental, 
          e consultoria agronômica para o sucesso do seu negócio.
        </p>
      </div>

      {/* Serviços de Crédito */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SERVIÇOS DE CRÉDITO</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.credito.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Regularização Fundiária */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">REGULARIZAÇÃO FUNDIÁRIA</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.fundiaria.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Regularização Ambiental */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">REGULARIZAÇÃO AMBIENTAL</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.ambiental.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Serviços Agronômicos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SERVIÇOS AGRONÔMICOS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.agronomicos.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Parceiros */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Principais Parceiros</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Pronto para Crescer?</h2>
          <p className="text-lg mb-6 opacity-90">
            Entre em contato conosco e descubra como podemos ajudar seu negócio rural a prosperar.
          </p>
          <Button size="lg" variant="secondary" onClick={onContactClick}>
            Falar com Consultor
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default AstecAssessoriaContent;