import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const navigate = useNavigate();
  const [tipoNegocio, setTipoNegocio] = useState('venda');
  const [categoria, setCategoria] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (tipoNegocio) params.set('tipo_negocio', tipoNegocio);
    if (categoria) params.set('categoria', categoria);
    if (localizacao) params.set('localizacao', localizacao);
    if (precoMin) params.set('preco_min', precoMin);
    if (precoMax) params.set('preco_max', precoMax);

    navigate(`/catalogo?${params.toString()}`);
  };

  return (
    <div className="bg-card/95 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-border">
      <Tabs defaultValue="venda" onValueChange={setTipoNegocio} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="venda">Comprar</TabsTrigger>
          <TabsTrigger value="arrendamento">Arrendar</TabsTrigger>
        </TabsList>

        <div className="space-y-4">
          {/* Category Selection */}
          <Select value={categoria} onValueChange={setCategoria}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Propriedade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="imoveis_rurais">Imóveis Rurais</SelectItem>
              <SelectItem value="veiculos">Veículos</SelectItem>
              <SelectItem value="maquinas_agricolas">Máquinas Agrícolas</SelectItem>
              <SelectItem value="energia_solar">Energia Solar</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>

          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Localização" 
              className="pl-10" 
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Preço mín." 
                className="pl-10" 
                type="number"
                value={precoMin}
                onChange={(e) => setPrecoMin(e.target.value)}
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Preço máx." 
                className="pl-10" 
                type="number"
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary-hover">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default SearchCard;