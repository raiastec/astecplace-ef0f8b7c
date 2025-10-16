import SolarCalculator from "@/components/sections/SolarCalculator";
import BanksFinancingSection from "@/components/sections/BanksFinancingSection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const EnergiaSolarContent = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center rounded-xl overflow-hidden mb-12"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Serviço Solar Especializado
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Energia limpa e sustentável para o futuro
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Sobre a Empresa</h2>
            <p className="text-muted-foreground mb-4">
              Acreditamos que a energia solar é a chave para um futuro mais sustentável e econômico. 
              Nossa missão é fornecer soluções de energia limpa e acessível para residências e empresas.
            </p>
            <p className="text-muted-foreground">
              Com anos de experiência no mercado, oferecemos instalações de alta qualidade, 
              manutenção especializada e consultoria personalizada para cada projeto.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Benefícios da Energia Solar</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Redução de até 95% na conta de energia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Valorização do imóvel em até 30%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Retorno do investimento em 3-5 anos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Energia limpa e sustentável</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Baixa manutenção e longa durabilidade</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Solar Calculator */}
      <div className="mb-12">
        <SolarCalculator />
      </div>

      {/* Banks Financing */}
      <div className="mb-12">
        <BanksFinancingSection />
      </div>

      {/* Portfolio Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Projeto {i}</span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Instalação Solar {i}</h3>
                <p className="text-sm text-muted-foreground">Sistema completo de energia solar</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnergiaSolarContent;