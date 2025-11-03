import { Search, MapPin, Package } from "lucide-react";

const ConexaoSection = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-muted-foreground" />,
      title: "Anuncie seu produto ou serviço",
      description: "Se você tem máquinas agrícolas, animais, veículos, insumos ou presta serviços para o agronegócio, basta criar um anúncio em poucos passos."
    },
    {
      icon: <MapPin className="w-12 h-12 text-muted-foreground" />,
      title: "Conecte-se a compradores e vendedores",
      description: "Os interessados podem entrar em contato diretamente com os anunciantes para negociar."
    },
    {
      icon: <Package className="w-12 h-12 text-muted-foreground" />,
      title: "Planos e Destaques",
      description: "Para quem deseja mais visibilidade, oferecemos anúncios pagos com destaque na plataforma."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-12 h-0.5 bg-gradient-to-r from-primary/60 to-primary/30 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/60 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
                
                {/* Step Circle */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 md:mb-6 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center shadow-lg">
                  <div className="scale-75 sm:scale-100">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 md:space-y-4 px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConexaoSection;