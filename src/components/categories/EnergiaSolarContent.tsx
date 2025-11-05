import SolarCalculator from "@/components/sections/SolarCalculator";
import BanksFinancingSection from "@/components/sections/BanksFinancingSection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import astecLogo from "@/assets/ecopower.jpg";
import hospitaldoamor from "@/assets/hospital-de-amor-barretos.png";
import ze from "@/assets/zeze.png";
import barretos from "@/assets/barretos.jpg";

const EnergiaSolarContent = () => {
  return (
    <>
      {/* Hero Section */}
<section className="w-full relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-yellow-50 via-green-50 to-emerald-100 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-emerald-950/30 overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920"
      alt="Painéis solares"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
      {/* Conteúdo */}
      <motion.div 
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Reduza sua conta de luz com <span className="text-green-600">energia solar</span>
        </h1>
        <p className="text-base sm:text-lg mb-6 text-muted-foreground">
          Simule agora quanto você pode economizar e descubra o tamanho ideal do seu sistema fotovoltaico em Rondônia.
        </p>
        <motion.a
          href="#calculadora"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition text-sm sm:text-base shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Calcular Economia
        </motion.a>
      </motion.div>

      {/* Imagem ilustrativa */}
      <motion.div 
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800"
          alt="Casa com painéis solares"
          className="rounded-2xl shadow-2xl max-w-full h-auto"
        />
      </motion.div>
    </div>
  </div>
</section>


      {/* Bloco de Patrocinadores */}
<section className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-800 py-8 sm:py-10 md:py-12 mt-12 md:mt-16">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
      <div className="mb-12 text-center" id="projetos">
        <Badge className="mb-3 md:mb-4 bg-green-100 text-green-700 hover:bg-green-100">
          PORTFÓLIO
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 px-4">Projetos de Energia Solar</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 text-sm sm:text-base px-4">
          Somos capazes de concluir projetos de qualquer escala, da preferência do cliente. 
          Nossos serviços incluem, entre outros, design, construção e instalação.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
            "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
            "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
            "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800"
          ].map((img, i) => (
            <Card key={i} className="overflow-hidden group cursor-pointer">
              <div className="h-48 sm:h-56 md:h-64 bg-muted overflow-hidden relative">
                <img 
                  src={img} 
                  alt={`Projeto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">Projeto {i + 1}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnergiaSolarContent;