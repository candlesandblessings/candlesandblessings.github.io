import { Header } from "@/components/Header";
import { CandleCard } from "@/components/CandleCard";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const candles = [
  { id: 1, name: "Floral Fantasy", image: "/lovable-uploads/368577a8-37e9-4f58-9db7-1e04d8814ca5.png" },
  { id: 2, name: "Golden Bloom", image: "/lovable-uploads/195435f6-558a-4afb-8101-7168b6546d28.png" },
  { id: 3, name: "Sapphire Serenity", image: "/lovable-uploads/6a398a06-fa3f-4636-bfe7-c0123a1c58f0.png" },
  { id: 4, name: "Royal Bloom", image: "/lovable-uploads/ee7f91ca-02b1-42b1-8af8-53927debda2e.png" },
  { id: 5, name: "Love's Embrace", image: "/lovable-uploads/c87c1cb6-9b8a-4d06-a0c2-ccebd94eb136.png" },
  { id: 6, name: "Aqua Delight", image: "/lovable-uploads/f40d157d-1312-4e7a-a1ec-3dccef5bcd70.png" },
  { id: 7, name: "Lavender Dreams", image: "/lovable-uploads/18397005-1616-45a7-acbb-41f0d7c0821d.png" },
  { id: 8, name: "Vanilla Box", image: "/lovable-uploads/753af6d7-58fe-4449-9e30-4c4d310a4324.png" },
  { id: 9, name: "Birthday Bloom", image: "/lovable-uploads/823b6e9c-a0f8-48a6-9f65-84ac81cbc2fe.png" },
  { id: 10, name: "Rose Garden", image: "/lovable-uploads/640068b6-a889-44c1-b593-ac7b8569b317.png" },
  { id: 11, name: "Ocean Dreams", image: "/lovable-uploads/f3a8b7c8-ed76-4100-89c3-ff9242544810.png" },
  { id: 12, name: "Sunshine Meadow", image: "/lovable-uploads/6ef405e6-5819-4e0b-b64c-4d996725eb78.png" },
  { id: 13, name: "Golden Gift", image: "/lovable-uploads/3ac2f5fa-276b-426b-9906-caffc1b380e8.png" },
  { id: 14, name: "Purple Elegance", image: "/lovable-uploads/cc0a53a2-9f11-4e40-8dcd-6b3f7142c77a.png" },
  { id: 15, name: "Romantic Dreams", image: "/lovable-uploads/2a20aafc-6e4a-4546-988b-427c6157fb2b.png" },
  { id: 16, name: "Violet Romance", image: "/lovable-uploads/481ffdd3-7abc-40e1-8552-973186b58ea9.png" },
  { id: 17, name: "Love Letters", image: "/lovable-uploads/b9488bd0-7bcf-4bc6-a7b2-51a4a28c81dc.png" },
  { id: 18, name: "Garden Romance", image: "/lovable-uploads/b09ee704-5d5d-49b9-b879-fec13fcced52.png" },
  { id: 19, name: "Purple Grace", image: "/lovable-uploads/9495646e-73d4-43dd-8035-e088c86e0251.png" },
  { id: 20, name: "Evening Bouquet", image: "/lovable-uploads/1cf38c61-824e-4ec1-869d-dd1d2f899770.png" }
];

const Collection = () => {
  const [selectedCandle, setSelectedCandle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWantThis = (candleName: string) => {
    setSelectedCandle(candleName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandle(null);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6 text-foreground">
            Our Candle Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Explore our complete range of handcrafted candles, each with its own unique character and fragrance profile.
          </p>
        </div>
      </section>

      {/* Candle Gallery */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {candles.map((candle) => (
              <CandleCard
                key={candle.id}
                name={candle.name}
                image={candle.image}
                onWantThis={() => handleWantThis(candle.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        candleName={selectedCandle || ""}
      />
    </div>
  );
};

export default Collection;