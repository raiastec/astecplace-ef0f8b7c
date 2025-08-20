import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface HeaderSearchInputProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const HeaderSearchInput = ({ 
  placeholder = "Buscar produtos, serviços...", 
  className,
  autoFocus 
}: HeaderSearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input 
        placeholder={placeholder}
        className={`pl-10 pr-4 py-2 w-full ${className}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus={autoFocus}
      />
    </form>
  );
};

export default HeaderSearchInput;