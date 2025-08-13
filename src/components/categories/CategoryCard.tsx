import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  itemCount: number;
  gradient?: string;
}

const CategoryCard = ({ title, description, imageUrl, icon, itemCount, gradient }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden border-0 shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${gradient || 'from-primary to-primary-foreground'} p-3 rounded-xl shadow-lg`}>
          {icon}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold">{itemCount} anúncios</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 bg-gradient-to-br from-background to-background/80">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 text-base leading-relaxed">{description}</p>
        
        <Button className={`w-full bg-gradient-to-r ${gradient || 'from-primary to-primary-foreground'} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold py-3`}>
          Explorar Categoria
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;