import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Instagram, Clock } from "lucide-react";
import astecplaceLogo from "@/assets/astecplace-logo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={astecplaceLogo} alt="ASTECPLACE" className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#energia-solar" className="text-muted-foreground hover:text-primary transition-colors">
              Energia Solar
            </a>
            <a href="#astec-assessoria" className="text-muted-foreground hover:text-primary transition-colors">
              Astec Assessoria
            </a>
            <a href="#imobiliaria" className="text-muted-foreground hover:text-primary transition-colors">
              Imobiliária
            </a>
            <a href="#veiculos" className="text-muted-foreground hover:text-primary transition-colors">
              Veículos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Quem Somos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Catálogo
            </a>
          </nav>

          {/* Contact Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>07:30 - 18:00</span>
              </div>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com/astecplace" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
            
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Anunciar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;