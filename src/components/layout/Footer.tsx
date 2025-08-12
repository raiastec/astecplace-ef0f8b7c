import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AgroVendas</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              O maior portal de vendas rurais e urbanas do Brasil. Conectamos compradores 
              e vendedores de forma direta e segura.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@agrovendas.com.br</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Imóveis Urbanos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Imóveis Rurais</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Veículos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Maquinários</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Ajuda</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />
        
        <div className="text-center text-primary-foreground/80">
          <p>&copy; 2024 AgroVendas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;