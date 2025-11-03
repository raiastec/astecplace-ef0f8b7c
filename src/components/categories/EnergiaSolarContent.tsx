import SolarCalculator from "@/components/sections/SolarCalculator";
import BanksFinancingSection from "@/components/sections/BanksFinancingSection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import astecLogo from "@/assets/ecopower.jpg";
import hospitaldoamor from "@/assets/hospital-de-amor-barretos.png";
import ze from "@/assets/zeze.png";
import barretos from "@/assets/barretos.jpg";

const EnergiaSolarContent = () => {
  return (
    <>
      {/* Hero Section */}
<section className="relative flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-800">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920"
      alt="Painéis solares"
      className="w-full h-full object-cover opacity-40"
    />
  </div>

  <div className="relative z-10 max-w-3xl text-white w-full">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-2">
      Economize com <span className="text-yellow-300">Energia Solar</span>
    </h1>
    <p className="text-base sm:text-lg mb-6 md:mb-8 text-white/90 px-2">
      Descubra quanto você pode economizar instalando um sistema solar em Rondônia.
    </p>

    {/* Calculadora simples */}
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl md:rounded-2xl shadow-xl text-left">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-white">Simule sua Economia</h2>
      <form
        id="calcSolar"
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-black"
        onSubmit={(e) => {
          e.preventDefault();
          const consumo = parseFloat((document.getElementById('consumo') as HTMLInputElement).value);
          const valor = consumo * 0.95; // valor médio kWh em Rondônia (R$ 0,95)
          const economia = valor * 0.85; // 85% de economia estimada
          alert(`Você pode economizar cerca de R$ ${economia.toFixed(2)} por mês com energia solar!`);
        }}
      >
        <div>
          <label htmlFor="consumo" className="block text-white mb-2 font-medium text-sm sm:text-base">
            Consumo mensal (kWh)
          </label>
          <input
            id="consumo"
            type="number"
            required
            placeholder="Ex: 400"
            className="w-full p-2 sm:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 sm:py-3 rounded-md transition text-sm sm:text-base"
          >
            Calcular Economia
          </button>
        </div>
      </form>
    </div>

    {/* CTA final */}
    <div className="mt-6 md:mt-10">
      <a
        href="#contato"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base"
      >
        Solicitar Orçamento Personalizado
      </a>
    </div>
  </div>
</section>


      {/* Bloco de Patrocinadores */}
<section className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-800 py-8 sm:py-10 md:py-12 mt-12 md:mt-16">
  <div className="max-w-7xl mx-auto text-center px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-10">
      Nossos Patrocinadores
    </h2>

    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
      {/* Patrocinador 1 */}
      <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-500 flex items-center justify-center">
        <img
          src= {ze}
          alt="Zezé Di Camargo & Luciano"
          className="w-24 h-16 sm:w-32 sm:h-20 object-contain"
        />
      </div>
      {/* Patrocinador 2 */}
      <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-500 flex items-center justify-center">
        <img
          src= {barretos}
          alt="Hospital de Amor"
          className="w-24 h-16 sm:w-32 sm:h-20 object-contain"
           />
      </div>
      {/* Patrocinador 3 */}
      <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-500 flex items-center justify-center">
        <img
          src= {hospitaldoamor}
          alt="Hospital de Amor"
          className="w-24 h-16 sm:w-32 sm:h-20 object-contain"
        />
      </div>
    </div>
    <p className="text-white/80 mt-6 md:mt-10 text-xs sm:text-sm px-2">
      Agradecemos o apoio de nossos parceiros na missão de promover energia limpa e sustentável 💚
    </p>
  </div>
</section>
      {/* About Section */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
              {/* Logo Side */}
              <div className="bg-muted/30 p-8 sm:p-10 md:p-12 flex items-center justify-center min-h-[250px] md:min-h-[300px]">
                <img 
                  src={astecLogo} 
                  alt="AstecPlace" 
                  className="max-w-[150px] sm:max-w-[200px] w-full h-auto"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-6 sm:p-8">
                <Badge className="mb-3 md:mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                  SOBRE A EMPRESA
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
                  Acreditamos em práticas sustentáveis de energia
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm sm:text-base">
                  Estamos encontrando maneiras de levar energia a mais pessoas, todos os dias. 
                  Nosso objetivo é fornecer mais energia limpa e sustentável para todo o país.
                </p>
                
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base">Custos de energia mais baixos</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base">Ecologicamente correto</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base">Aumento no valor da sua casa</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base">Independência energética</span>
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
        <Badge className="mb-3 md:mb-4 bg-green-100 text-green-700 hover:bg-green-100">
          PORTFÓLIO
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 px-4">Projetos</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 text-sm sm:text-base px-4">
          Somos capazes de concluir projetos de qualquer escala, da preferência do cliente. 
          Nossos serviços incluem, entre outros, design, construção e instalação.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden group">
              <div className="h-48 sm:h-56 md:h-64 bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground text-sm sm:text-base">Projeto {i}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnergiaSolarContent;