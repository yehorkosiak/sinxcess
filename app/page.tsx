import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <div className="relative z-10 bg-black">
        <CommunityCTA />
        <Footer />
      </div>
    </div>
  );
}
