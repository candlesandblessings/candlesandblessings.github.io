import { Heart, Leaf, Sparkles } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center mb-6 text-foreground">
          Why Choose Our Candles
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          At Candles & Blessings, we believe in the power of handcrafted beauty. Each candle tells a story and brings warmth, comfort, and joy to your home.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Handcrafted with Love
            </h3>
            <p className="text-muted-foreground">
              Every candle is made with care and attention to detail, ensuring each piece is unique and special.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Natural Ingredients
            </h3>
            <p className="text-muted-foreground">
              We use only premium natural wax and carefully sourced fragrances for a clean, long-lasting burn.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Unique Fragrances
            </h3>
            <p className="text-muted-foreground">
              Our signature scent blends are crafted to create memorable experiences and transform any space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};