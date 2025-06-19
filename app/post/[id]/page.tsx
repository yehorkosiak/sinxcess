import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PostPage() {
  const post = {
    id: 1,
    title: "BASEMENT SESSIONS: TECHNO RITUAL",
    venue: "VOID CLUB",
    dj: "DARK MATTER",
    date: "2024.01.15",
    time: "23:00 - 06:00",
    image: "/placeholder.svg?height=400&width=800",
    content: `The basement pulses with raw energy. Concrete walls absorb the frequencies while bodies move in synchronized chaos. This is not entertainment—this is ritual.

DARK MATTER brings a selection of industrial techno that cuts through consciousness like a blade. Each track carefully chosen to guide the collective through states of transcendence.

The VOID CLUB basement becomes a temple. Strobes pierce the darkness in calculated intervals. The 303 sequences rewire neural pathways. This is underground culture in its purest form.

Entry requires commitment. Leave your surface world identity at the door. Descend into the frequency.`,
    tags: ["TECHNO", "INDUSTRIAL", "UNDERGROUND"],
    likes: 47,
    comments: 12,
    shares: 8,
  };

  const comments = [
    {
      id: 1,
      user: "FREQUENCY_HUNTER",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2h ago",
      content:
        "This set rewired my consciousness. Pure industrial transcendence.",
    },
    {
      id: 2,
      user: "VOID_WALKER",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "4h ago",
      content:
        "The 303 sequences at 03:00 were otherworldly. DARK MATTER understands the ritual.",
    },
    {
      id: 3,
      user: "BASS_CULT",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "6h ago",
      content:
        "Basement sessions hit different. This is what underground means.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-mono text-sm">BACK TO FEED</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-mono font-bold tracking-wider">
                UNDERGROUND
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-green-600 text-white font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-black mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-400 font-mono">
              <div>
                <span className="text-purple-500 font-bold">{post.dj}</span> @{" "}
                {post.venue}
              </div>
              <div className="flex gap-4">
                <span>{post.date}</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none mb-8">
            <div className="text-zinc-300 font-mono leading-relaxed space-y-4">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Engagement Bar */}
          <div className="flex items-center justify-between py-6 border-y border-zinc-800 mb-8">
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 text-zinc-400 hover:text-green-500 transition-colors">
                <Heart className="h-5 w-5" />
                <span className="font-mono">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-400 hover:text-green-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="font-mono">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-400 hover:text-green-500 transition-colors">
                <Share2 className="h-5 w-5" />
                <span className="font-mono">{post.shares}</span>
              </button>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 font-mono">
              JOIN FREQUENCY
            </Button>
          </div>

          {/* Comments Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-mono font-bold">
              TRANSMISSIONS ({comments.length})
            </h3>

            {/* Add Comment */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-zinc-800 text-white font-mono">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <Input
                      placeholder="TRANSMIT YOUR FREQUENCY..."
                      className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 font-mono"
                    />
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 font-mono"
                    >
                      TRANSMIT
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={comment.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-zinc-800 text-white font-mono">
                          {comment.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-mono font-bold text-purple-500">
                            {comment.user}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                          {comment.content}
                        </p>
                        <div className="flex space-x-4 mt-3">
                          <button className="text-xs text-zinc-500 hover:text-green-500 transition-colors font-mono">
                            AMPLIFY
                          </button>
                          <button className="text-xs text-zinc-500 hover:text-green-500 transition-colors font-mono">
                            RESPOND
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4 mt-16">
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
        </div>
      </footer>
    </div>
  );
}
