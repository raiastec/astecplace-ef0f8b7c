import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Instagram, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Catálogo
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Quem Somos
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative max-w-md mx-8 flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Buscar produtos, serviços..." 
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>

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