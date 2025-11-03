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
  Scale,
  Droplets,
  TreePine,
  Stethoscope
} from "lucide-react";
import astecLogo from "@/assets/astecplace-logo.png";
import logoAstecHero from "@/assets/logo-astec-hero.jpg";

interface AstecAssessoriaContentProps {
  onContactClick: () => void;
}

const AstecAssessoriaContent = ({ onContactClick }: AstecAssessoriaContentProps) => {
  const services = {
    credito: [
      {
        icon: DollarSign,
        title: "Investimento",
        description: "Procurando oportunidades de investimento? Nós oferecemos consultoria especializada para maximizar seus retornos! Entre em contato e descubra as melhores opções para o seu capital.",
        color: "text-green-600"
      },
      {
        icon: Scale,
        title: "Custeio",
        description: "Precisando de custeio agrícola a pecuário? Oferecemos soluções financeiras para apoiar a sua produção! Entre em contato e impulsione seu negócio com nossos recursos.",
        color: "text-blue-600"
      },
      {
        icon: FileText,
        title: "Consórcio",
        description: "Pensando em consórcio? Nós oferecemos as melhores opções para você! Entre em contato e descubra como realizar seus planos com nossos consórcios vantajosos.",
        color: "text-purple-600"
      },
      {
        icon: Building2,
        title: "Consignado",
        description: "Precisando de crédito consignado? Nós oferecemos condições especiais para você! Entre em contato e obtenha o crédito que precisa com facilidade e segurança.",
        color: "text-orange-600"
      },
      {
        icon: DollarSign,
        title: "Crédito Comercial",
        description: "Procurando crédito comercial? Oferecemos soluções financeiras flexíveis para impulsionar seu negócio! Entre em contato e descubra como podemos apoiar seu crescimento.",
        color: "text-red-600"
      },
      {
        icon: Scale,
        title: "Seguro Patrimonial",
        description: "Precisa de seguro patrimonial ou veicular? Nós oferecemos proteção completa para seu patrimônio e veículos! Entre em contato e garanta a segurança que você merece.",
        color: "text-blue-600"
      },
      {
        icon: Wheat,
        title: "Seguro Agrícola",
        description: "Proteja sua produção com nosso seguro agrícola! Oferecemos coberturas completas para garantir a segurança do seu cultivo. Entre em contato e assegure seu negócio com tranquilidade.",
        color: "text-yellow-600"
      },
      {
        icon: Home,
        title: "Crédito Fundiário",
        description: "Precisando de crédito fundiário? Oferecemos soluções financeiras para aquisição e melhoria de terras! Entre em contato e realize seus projetos com nosso apoio especializado.",
        color: "text-green-700"
      }
    ],
    fundiaria: [
      {
        icon: FileText,
        title: "CCIR",
        description: "Precisa do Certificado de Cadastro de Imóvel Rural (CCIR)? Nós facilitamos o processo para você! Entre em contato e regularize seu imóvel rural com segurança e eficiência.",
        color: "text-green-600"
      },
      {
        icon: Scale,
        title: "NIRF ITR",
        description: "Precisando regularizar seu ITR? Estamos prontos para ajudar você a cumprir suas obrigações fiscais com a receita federal! nossa empresa oferece serviço especializado para a declaração do ITR.",
        color: "text-blue-600"
      },
      {
        icon: FileText,
        title: "Declaração de ITR",
        description: "Precisando declarar seu ITR? Nossa empresa oferece serviço especializado para a declaração do ITR.",
        color: "text-purple-600"
      },
      {
        icon: Building2,
        title: "Memorial Descritivo",
        description: "Precisando de memorial descritivo? Nós elaboramos documentos detalhados e precisos para seu projeto! Entre em contato e garanta a qualidade e a conformidade do seu empreendimento.",
        color: "text-orange-600"
      },
      {
        icon: Scale,
        title: "CRO na PGT e GOV",
        description: "Precisando da Certidão de Regularização da Obra (CRO) na PGT e GOV? Nós cuidamos de todo o processo para você! Entre em contato e regularize sua obra com eficiência e segurança.",
        color: "text-red-600"
      },
      {
        icon: Scale,
        title: "Topografia",
        description: "Precisa de serviços de topografia? Oferecemos medições precisas e detalhadas para seu projeto! Entre em contato e conte com nossa expertise para obter resultados confiáveis.",
        color: "text-blue-600"
      },
      {
        icon: FileText,
        title: "Escritura",
        description: "Precisando de escritura? Nós cuidamos de todo o processo para você! Entre em contato e regularize seu imóvel com segurança e tranquilidade.",
        color: "text-yellow-600"
      },
      {
        icon: Home,
        title: "Título na PGT",
        description: "Precisa de título na PGT? Nós facilitamos todo o processo para você! Entre em contato e regularize seu imóvel com segurança e eficiência.",
        color: "text-green-600"
      }
    ],
    ambiental: [
      {
        icon: Leaf,
        title: "CAR",
        description: "Oferecemos o serviço completo de cadastro ambiental rural (CAR), essencial para garantir a conformidade ambiental da sua propriedade e assegurar diversos benefícios legais e econômicos.",
        color: "text-green-600"
      },
      {
        icon: Droplets,
        title: "Outorga d'Água",
        description: "precisando de outorga de água? nós cuidamos de todo o processo para você! entre em contato e garanta a regularização e segurança no uso dos recursos hídricos.",
        color: "text-blue-600"
      },
      {
        icon: Droplets,
        title: "Dispensa da Outorga d'Água",
        description: "precisa de dispensa de outorga de água? nós facilitamos o processo para você! entre em contato e regularize sua situação de forma rápida e segura.",
        color: "text-purple-600"
      },
      {
        icon: Scale,
        title: "Licença de Operação LP, LI e LO",
        description: "precisa de licença prévia (lp), licença de instalação (li) ou licença de operação (lo)? nós cuidamos de todo o processo para você! entre em contato e garanta a regularização ambiental do seu empreendimento.",
        color: "text-orange-600"
      },
      {
        icon: TreePine,
        title: "PRAD",
        description: "precisando de plano de recuperação de áreas degradadas (prad)? nós elaboramos e executamos projetos especializados para recuperar seu ambiente! entre em contato e restaure a saúde do seu ecossistema com segurança.",
        color: "text-red-600"
      },
      {
        icon: Leaf,
        title: "Licença de Limpeza de Pastagem",
        description: "precisa de licença para limpeza de pastagem? nós cuidamos de todo o processo para você! entre em contato e regularize sua atividade com agilidade e conformidade ambiental.",
        color: "text-green-700"
      },
      {
        icon: FileText,
        title: "Laudo",
        description: "Precisando de laudo técnico? Nós oferecemos serviços completos e precisos para atender suas necessidades! Entre em contato e obtenha a documentação que você precisa com qualidade.",
        color: "text-blue-600"
      }
    ],
    agronomicos: [
      {
        icon: Stethoscope,
        title: "Exame Andrológico",
        description: "Precisando de exame andrológico? Nós oferecemos diagnósticos completos e precisos para garantir a saúde reprodutiva dos seus animais! Entre em contato e agende uma avaliação.",
        color: "text-green-600"
      },
      {
        icon: Stethoscope,
        title: "Exame de Brucelose e Tuberculose",
        description: "Precisando de exames de brucelose e tuberculose? Oferecemos diagnósticos precisos para garantir a saúde do seu rebanho! Entre em contato e agende seus exames.",
        color: "text-blue-600"
      },
      {
        icon: Scale,
        title: "Atestado de Sanidade Animal",
        description: "Precisa de atestado de sanidade animal? Nós oferecemos laudos confiáveis para garantir a saúde do seu rebanho! Entre em contato e obtenha a certificação necessária.",
        color: "text-purple-600"
      },
      {
        icon: Scale,
        title: "Consultoria Pecuária",
        description: "Precisando de consultoria pecuária? Nós oferecemos soluções especializadas para melhorar a eficiência e a produtividade do seu rebanho! Entre em contato e transforme sua produção.",
        color: "text-orange-600"
      },
      {
        icon: Wheat,
        title: "Consultoria Agrícola",
        description: "Precisando de consultoria agrícola? Nós oferecemos soluções especializadas para melhorar a eficiência e a produtividade da sua lavoura! Entre em contato e transforme sua produção.",
        color: "text-red-600"
      },
      {
        icon: DollarSign,
        title: "Corretagem de Agroprodutos",
        description: "Precisando de corretagem de agroprodutos? Nós conectamos você aos melhores negócios do setor! Entre em contato e maximize seus resultados com nossa expertise.",
        color: "text-blue-600"
      }
    ]
  };

  const partners = [
    { name: "Banco do Brasil", logo: "/src/assets/banks/banco_brasil_rural.png" },
    { name: "Caixa Econômica", logo: "/src/assets/banks/caixa_rural.png" },
    { name: "Sicoob", logo: "/src/assets/banks/sicoob_rural.png" },
    { name: "Sicredi", logo: "/src/assets/banks/credisis_rural.png" },
    { name: "Cresol", logo: "/src/assets/banks/cresol.png" },
    { name: "Banco da Amazônia", logo: "/src/assets/banks/Banco_da_Amazônia.jpg" }
  ];

  const ServiceCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color?: string }) => (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Icon className={`h-12 w-12 mb-4 ${color || 'text-primary'}`} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Button variant="outline" onClick={onContactClick} className="w-full">
          Entrar em Contato
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="py-[60px] bg-gradient-to-b from-[#0a4d1a] to-[#0d6827] -mx-4 md:-mx-6 lg:-mx-8 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo Image */}
            <div className="mb-8">
              <img 
                src={logoAstecHero} 
                alt="Astec Assessoria e Projetos Agropecuários" 
                className="w-full max-w-[550px] mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ASTEC Assessoria e Projetos Agropecuários
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Soluções completas em crédito rural, regularização fundiária e ambiental, e consultoria agronômica para o sucesso do seu negócio.
            </p>
            
            {/* CTA Button */}
            <Button 
              onClick={onContactClick}
              className="bg-[#008000] hover:bg-[#006600] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços de Crédito */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SERVIÇOS DE CRÉDITO</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.credito.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Regularização Fundiária */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">REGULARIZAÇÃO FUNDIÁRIA</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.fundiaria.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Regularização Ambiental */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">REGULARIZAÇÃO AMBIENTAL</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.ambiental.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Serviços Agronômicos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SERVIÇOS AGRONÔMICOS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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