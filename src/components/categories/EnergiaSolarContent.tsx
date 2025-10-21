import SolarCalculator from "@/components/sections/SolarCalculator";
import BanksFinancingSection from "@/components/sections/BanksFinancingSection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import astecLogo from "@/assets/astecplace-logo.png";

const EnergiaSolarContent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-green-400 to-green-500 rounded-xl overflow-hidden mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Left Content */}
          <div className="relative z-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Reduza sua conta de luz com energia solar em Rondônia
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Simule agora quanto você pode economizar e descubra o tamanho ideal do seu sistema fotovoltaico
            </p>
            <button
              onClick={() => {
                const calculator = document.getElementById('solar-calculator');
                calculator?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Calcular Economia
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative z-10 hidden md:flex justify-center items-center">
            <div className="relative">
              {/* Decorative sun */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-50" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full" />
              
              {/* Solar panel illustration */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded border-2 border-white/30"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Solar Calculator */}
      <div id="solar-calculator" className="mb-12 scroll-mt-20">
        <SolarCalculator />
      </div>

      {/* About Section */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Logo Side */}
              <div className="bg-muted/30 p-12 flex items-center justify-center min-h-[300px]">
                <img 
                  src={astecLogo} 
                  alt="AstecPlace" 
                  className="max-w-[200px] w-full h-auto"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                  SOBRE A EMPRESA
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Acreditamos em práticas sustentáveis de energia
                </h2>
                <p className="text-muted-foreground mb-6">
                  Estamos encontrando maneiras de levar energia a mais pessoas, todos os dias. 
                  Nosso objetivo é fornecer mais energia limpa e sustentável para todo o país.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span>Custos de energia mais baixos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span>Ecologicamente correto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span>Aumento no valor da sua casa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <span>Independência energética</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banks Financing */}
      <div className="mb-12">
        <BanksFinancingSection />
      </div>

      {/* Portfolio Section */}
      <div className="mb-12 text-center">
        <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
          PORTFÓLIO
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Projetos</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Somos capazes de concluir projetos de qualquer escala, da preferência do cliente. 
          Nossos serviços incluem, entre outros, design, construção e instalação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden group">
              <div className="h-64 bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground">Projeto {i}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnergiaSolarContent;