import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ListingCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  publishedDate: string;
}

const ListingCard = ({ 
  id,
  title, 
  price, 
  location, 
  imageUrl, 
  category, 
  isNew = false, 
  publishedDate 
}: ListingCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/anuncio/${id}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden" onClick={handleViewDetails}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-success text-white">
            Novo
          </Badge>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {publishedDate}
          </span>
        </div>
        
        <h3 className="font-semibold mb-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            Ver detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;