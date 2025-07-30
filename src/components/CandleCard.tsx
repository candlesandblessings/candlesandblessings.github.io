import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CandleCardProps {
  name: string;
  image: string;
  onWantThis: () => void;
}

export const CandleCard = ({ name, image, onWantThis }: CandleCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-foreground mb-3 text-sm">{name}</h3>
        <Button
          onClick={onWantThis}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          size="sm"
        >
          Get in Touch
        </Button>
      </div>
    </Card>
  );
};