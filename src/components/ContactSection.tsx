import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-semibold mb-4 text-foreground">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Have questions about our handmade candles? We'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#20BC5A] text-white"
            size="lg"
          >
            <a
              href="https://wa.me/447951918248"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <a
              href="mailto:candlesandblessings@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail size={20} />
              Email Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};