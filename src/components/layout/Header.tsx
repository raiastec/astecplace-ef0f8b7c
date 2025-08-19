import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Instagram, Clock, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
// Using the uploaded logo directly
const astecplaceLogo = "/lovable-uploads/d5888ab4-0964-48d3-be66-b673599f99cd.png";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAdmin } = useAuth();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={astecplaceLogo} 
              alt="ASTECPLACE" 
              className="w-auto max-w-[150px] md:max-w-[150px] max-w-[100px] h-auto max-h-12" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Catálogo
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Quem Somos
            </a>
            {isAdmin && (
              <a href="/admin/dashboard" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Painel Admin
              </a>
            )}
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex relative max-w-md mx-8 flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Buscar produtos, serviços..." 
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>

          {/* Desktop Contact Info & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
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

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Search Toggle for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-10 w-10"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Anunciar Button - Always visible */}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Anunciar</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Catálogo
                    </a>
                    <a href="#" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Quem Somos
                    </a>
                  </nav>

                  {/* Search Bar in Menu */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm text-muted-foreground">Buscar</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        placeholder="Buscar produtos, serviços..." 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm text-muted-foreground">Contato</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Horário: 07:30 - 18:00</span>
                    </div>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a href="https://instagram.com/astecplace" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-pink-600 hover:text-pink-700 transition-colors">
                      <Instagram className="h-4 w-4" />
                      <span>Instagram</span>
                    </a>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Anunciar Produto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 border-t mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar produtos, serviços..." 
                className="pl-10 w-full"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;