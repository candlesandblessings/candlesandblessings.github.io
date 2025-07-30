import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6 text-foreground">
            About Candles & Blessings
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the story behind our handcrafted candles and the passion that lights every creation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-display font-light mb-6 text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Candles & Blessings was born from a simple belief: that every home deserves to be filled with warmth, beauty, and positive energy. What started as a personal passion for creating beautiful, aromatic candles has grown into a mission to bring joy and serenity to homes everywhere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each candle we create is more than just a source of light – it's a vessel for memories, a companion for quiet moments, and a blessing for your space.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕯️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Handcrafted with Love
              </h3>
              <p className="text-muted-foreground text-sm">
                Every candle is carefully hand-poured with premium natural ingredients
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Natural & Pure
              </h3>
              <p className="text-muted-foreground text-sm">
                We use only the finest natural waxes and carefully selected fragrances for a clean, long-lasting burn.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Unique Fragrances
              </h3>
              <p className="text-muted-foreground text-sm">
                Our signature scent blends are carefully crafted to create memorable experiences that transform any space.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Made with Intention
              </h3>
              <p className="text-muted-foreground text-sm">
                Every candle is infused with positive intentions and created to bring blessings into your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;