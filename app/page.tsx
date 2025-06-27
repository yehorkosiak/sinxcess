import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PostsFeed from "@/components/PostsFeed";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";
import { posts } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <PostsFeed posts={posts} />
      <CommunityCTA />
      <Footer />
    </div>
  );
}
