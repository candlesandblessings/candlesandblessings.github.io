import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We'd love to hear from you! Whether you have questions about our candles or want to place a custom order, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Card */}
            <Card className="p-8">
              <h2 className="text-2xl font-display font-light mb-6 text-foreground">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:candlesandblessings@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      candlesandblessings@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick responses available</p>
                    <Button
                      asChild
                      className="bg-[#25D366] hover:bg-[#20BC5A] text-white"
                      size="sm"
                    >
                      <a
                        href="https://wa.me/447951918248"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle size={16} />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Card */}
            <Card className="p-8">
              <h2 className="text-2xl font-display font-light mb-6 text-foreground">
                Frequently Asked
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How long do the candles burn?</h3>
                  <p className="text-muted-foreground text-sm">Our candles typically burn for 40-60 hours, depending on the size and proper care.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I request custom scents?</h3>
                  <p className="text-muted-foreground text-sm">Yes! We love creating custom fragrances. Contact us to discuss your preferences.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you offer bulk orders?</h3>
                  <p className="text-muted-foreground text-sm">We can accommodate bulk orders for events and gifts. Reach out for special pricing.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Are your candles eco-friendly?</h3>
                  <p className="text-muted-foreground text-sm">Absolutely! We use natural wax and sustainable practices in our candle making.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-display font-light mb-4 text-foreground">
              Ready to Light Up Your Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our collection or reach out to discuss custom orders and special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/collection">View Collection</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2"
              >
                <a href="mailto:candlesandblessings@gmail.com">
                  <Mail size={16} />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;