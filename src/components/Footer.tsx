import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Candles & Blessings</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Handcrafted candles made with love, bringing warmth and serenity to your home. Each piece is unique, just like the moments they illuminate.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:candlesandblessings@gmail.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  candlesandblessings@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5" />
                <span className="text-primary-foreground/80">WhatsApp available</span>
              </div>
            </div>
          </div>
          
          {/* Our Promise */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Every candle is crafted with premium natural ingredients and infused with positive intentions. We're committed to bringing light and blessing into your life.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Candles & Blessings. Made with ♥ for your home
          </p>
        </div>
      </div>
    </footer>
  );
};