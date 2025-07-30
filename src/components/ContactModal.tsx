import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  candleName: string;
}

export const ContactModal = ({ isOpen, onClose, candleName }: ContactModalProps) => {
  const whatsappMessage = `Hello! I'm interested in the ${candleName} candle.`;
  const emailSubject = `Candle Order: ${candleName}`;
  const emailBody = `Hello! I'm interested in the ${candleName} candle.`;
  
  const whatsappUrl = `https://wa.me/447951918248?text=${encodeURIComponent(whatsappMessage)}`;
  const emailUrl = `mailto:candlesandblessings@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Debug URLs
  console.log('WhatsApp URL:', whatsappUrl);
  console.log('Email URL:', emailUrl);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto">
        <div className="text-center py-6">
          <h3 className="text-lg font-medium mb-2 text-foreground">
            Contact us about
          </h3>
          <p className="text-muted-foreground mb-6">{candleName}</p>
          
          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20BC5A] text-white"
              size="lg"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full"
              size="lg"
            >
              <a
                href={emailUrl}
                className="flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Email
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};