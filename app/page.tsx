import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const posts = [
    {
      id: 1,
      title: "BASEMENT SESSIONS: TECHNO RITUAL",
      venue: "VOID CLUB",
      dj: "DARK MATTER",
      date: "2024.01.15",
      image: "/placeholder.svg?height=300&width=400",
      excerpt:
        "Descend into the depths of industrial techno. Raw. Unfiltered. Transcendent.",
      tags: ["TECHNO", "INDUSTRIAL", "UNDERGROUND"],
    },
    {
      id: 2,
      title: "FREQUENCY SHIFT: MINIMAL HYPNOSIS",
      venue: "THE BUNKER",
      dj: "CIPHER",
      date: "2024.01.12",
      image: "/placeholder.svg?height=300&width=400",
      excerpt:
        "Minimal beats that penetrate consciousness. Enter the trance state.",
      tags: ["MINIMAL", "HYPNOTIC", "EXPERIMENTAL"],
    },
    {
      id: 3,
      title: "ACID COMMUNION: WAREHOUSE RITUAL",
      venue: "SECTOR 7",
      dj: "NEON CULT",
      date: "2024.01.08",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "303 sequences that rewire neural pathways. Join the communion.",
      tags: ["ACID", "WAREHOUSE", "RITUAL"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-mono font-bold tracking-wider">
                Sinxcess
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                FEED
              </Link>
              <Link
                href="/venues"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                VENUES
              </Link>
              <Link
                href="/artists"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                ARTISTS
              </Link>
              <Link
                href="/community"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                COLLECTIVE
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-mono font-black tracking-tighter mb-6">
            <span className="text-green-500">Resonance Room</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-mono">
            Rave Rituals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input
              placeholder="ENTER YOUR FREQUENCY..."
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 font-mono max-w-xs"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold px-8">
              JOIN COLLECTIVE
            </Button>
          </div>
          <div className="flex items-center justify-center mt-6 text-sm text-zinc-500 font-mono">
            <Users className="h-4 w-4 mr-2" />
            <span>2,847 FREQUENCIES CONNECTED</span>
          </div>
        </div>
      </section>

      {/* Posts Feed */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-mono font-bold">TRANSMISSION FEED</h2>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-white font-mono"
              >
                LATEST
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-white font-mono"
              >
                TRENDING
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white font-mono text-xs">
                      {post.date}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-zinc-700 text-zinc-400 font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-2 group-hover:text-green-500 transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-zinc-400 mb-2 font-mono">
                    <span className="text-purple-500">{post.dj}</span> @{" "}
                    {post.venue}
                  </div>
                  <p className="text-zinc-300 text-sm mb-4 font-mono leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-1 text-zinc-400 hover:text-green-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs font-mono">23</span>
                      </button>
                      <button className="flex items-center space-x-1 text-zinc-400 hover:text-green-500 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-xs font-mono">7</span>
                      </button>
                      <button className="flex items-center space-x-1 text-zinc-400 hover:text-green-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <Link href={`/post/${post.id}`}>
                      <Button
                        size="sm"
                        className="bg-zinc-800 hover:bg-purple-600 text-white font-mono text-xs"
                      >
                        ENTER
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-mono font-bold mb-6">
            JOIN THE FREQUENCY
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto font-mono">
            Get exclusive access to underground events, artist interviews, and
            venue intel. Become part of the collective that moves in the
            shadows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              placeholder="YOUR EMAIL FREQUENCY..."
              className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 font-mono"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white font-mono font-bold px-8 whitespace-nowrap">
              TRANSMIT
            </Button>
          </div>
          <p className="text-xs text-zinc-500 mt-4 font-mono">
            NO SPAM. ONLY PURE UNDERGROUND TRANSMISSIONS.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-purple-500" />
              <span className="font-mono font-bold">UNDERGROUND</span>
            </div>
            <div className="flex space-x-6 text-sm font-mono text-zinc-400">
              <Link
                href="/about"
                className="hover:text-green-500 transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-500 transition-colors"
              >
                CONTACT
              </Link>
              <Link
                href="/privacy"
                className="hover:text-green-500 transition-colors"
              >
                PRIVACY
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-zinc-500 font-mono">
            © 2024 UNDERGROUND COLLECTIVE. ALL FREQUENCIES RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
