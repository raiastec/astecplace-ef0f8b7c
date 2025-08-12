import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, DollarSign } from "lucide-react";

const SearchCard = () => {
  return (
    <div className="bg-card/95 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-border">
      <Tabs defaultValue="comprar" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="comprar">Comprar</TabsTrigger>
          <TabsTrigger value="alugar">Alugar</TabsTrigger>
        </TabsList>

        <div className="space-y-4">
          {/* Category Selection */}
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Propriedade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="imovel-urbano">Imóvel Urbano</SelectItem>
              <SelectItem value="imovel-rural">Imóvel Rural</SelectItem>
              <SelectItem value="veiculo">Veículo</SelectItem>
              <SelectItem value="maquinario">Maquinário Agrícola</SelectItem>
            </SelectContent>
          </Select>

          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Localização" className="pl-10" />
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Preço mín." className="pl-10" />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Preço máx." className="pl-10" />
            </div>
          </div>

          {/* Search Button */}
          <Button className="w-full bg-primary hover:bg-primary-hover">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default SearchCard;