import { Header } from "@/components/Header";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const positiveMessages = [
  "You look gorgeous",
  "Your smile is perfect", 
  "You are enough",
  "You glow naturally",
  "You light up the room",
  "You're a masterpiece",
  "Kindness radiates from you",
  "You're a blessing",
  "You make the world brighter",
  "You're truly special",
  "Confidence suits you",
  "You're absolutely stunning",
  "You're pure sunshine",
  "You're loved",
  "You inspire others",
  "You're effortlessly elegant",
  "Your presence is powerful",
  "You make magic happen",
  "You're beauty and brains",
  "You shine from within",
  "You matter",
  "You're art in motion",
  "You're peaceful and powerful",
  "You're magnetic",
  "You're wonderfully made",
  "You're radiant today",
  "Your energy is amazing",
  "You're worthy of love",
  "You're unforgettable",
  "You're grace in motion",
  "You're doing great",
  "You're beautiful inside and out",
  "Your vibe is contagious",
  "You're blooming",
  "You're strong and soft",
  "You're full of light",
  "You're divine",
  "You're rare and real",
  "You're worthy just as you are",
  "You're a spark of joy",
  "You're golden",
  "Your soul is beautiful",
  "You're wildly loved",
  "You're glowing, always",
  "You're more than enough",
  "You uplift everyone",
  "You're precious",
  "You're calm and captivating",
  "You're loved deeply",
  "You're exactly what the world needs"
];

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleLogoClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Generate random message
    const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
    setCurrentMessage(randomMessage);
    
    // Start animation sequence
    setTimeout(() => setShowMessage(true), 500); // Show message after explosion
    
    // Hide message and reset after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => setIsAnimating(false), 500); // Allow logo to fade back in
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8 relative">
            <div className="relative w-80 h-80">
              {/* Logo */}
              <img 
                src="/lovable-uploads/c3f22d2a-3d79-466b-872f-25bf5fc7c9af.png" 
                alt="Candles and Blessings Logo" 
                className={`w-full h-full object-contain cursor-pointer transition-all duration-500 transform ${
                  isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-100 hover:scale-110'
                }`}
                onClick={handleLogoClick}
              />
              
              {/* Firework particles */}
              {isAnimating && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-ping`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Positive message */}
              {showMessage && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 text-lg font-medium rounded-full shadow-lg animate-fade-in whitespace-nowrap">
                  {currentMessage}
                </div>
              )}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6 text-foreground">
            Handcrafted with Love
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our collection of artisan candles, each one carefully made with natural ingredients and thoughtful design. Every candle tells a story of craftsmanship and care.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/collection">Discover Our Collection</a>
          </Button>
        </div>
      </section>

      <WhyChooseSection />

      <Footer />
    </div>
  );
};

export default Index;