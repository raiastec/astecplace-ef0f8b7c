import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-base md:text-lg">A</span>
              </div>
              <span className="text-lg md:text-xl font-bold">ASTECPLACE</span>
            </div>
            <p className="text-primary-foreground/80 mb-3 md:mb-4 max-w-md text-sm sm:text-base">
              O maior portal de vendas rurais e urbanas do Brasil. Conectamos compradores 
              e vendedores de forma direta e segura.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">São Miguel do Guaporé, RO - Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(69) 3642-2585</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">astec_assessoria@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="/categoria/imoveis_rurais" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Imóveis Rurais</a></li>
              <li><a href="/categoria/veiculos" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Veículos</a></li>
              <li><a href="/energia-solar" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Energia Solar</a></li>
              <li><a href="/astec-assessoria" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Astec Assessoria</a></li>
              <li><a href="/categoria/maquinas_agricolas" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Máquinas Agrícolas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Ajuda</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Contato</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-6 md:my-8" />
        
        <div className="text-center text-primary-foreground/80">
          <p className="text-xs sm:text-sm">&copy; 2024 ASTECPLACE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;