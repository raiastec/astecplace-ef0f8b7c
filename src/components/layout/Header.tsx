import { Button } from "@/components/ui/button";
import { Search, User, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">ASTECPLACE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Imóveis Urbanos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Imóveis Rurais
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Veículos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Maquinários
            </a>
            <a href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
              Notícias
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Quem Somos
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover">
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