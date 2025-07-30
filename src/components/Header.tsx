import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/c3f22d2a-3d79-466b-872f-25bf5fc7c9af.png" 
            alt="Candles & Blessings Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <h1 className="text-sm sm:text-xl font-display font-semibold text-foreground">
            Candles & Blessings
          </h1>
        </div>
        
        <nav className="flex items-center space-x-2 sm:space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-xs sm:text-base">
            Home
          </a>
          <a href="/collection" className="text-foreground hover:text-primary transition-colors font-medium text-xs sm:text-base">
            Collection
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-xs sm:text-base">
            About
          </a>
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-[#7a7f5a] hover:bg-[#6a6f4a] text-white text-xs sm:text-sm px-2 sm:px-3"
          >
            <a href="/contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};