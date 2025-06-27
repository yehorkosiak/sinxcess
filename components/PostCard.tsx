import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/data";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
      <div className="relative">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-purple-600 text-white font-mono text-xs">
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
        <h3 className="text-lg font-mono font-bold mb-2 group-hover:text-purple-500 transition-colors">
          {post.title}
        </h3>
        <div className="text-sm text-zinc-400 mb-2 font-mono">
          <span className="text-purple-500">{post.dj}</span> @ {post.venue}
        </div>
        <p className="text-zinc-300 text-sm mb-4 font-mono leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-zinc-400 hover:text-purple-500 transition-colors">
              <Heart className="h-4 w-4" />
              <span className="text-xs font-mono">23</span>
            </button>
            <button className="flex items-center space-x-1 text-zinc-400 hover:text-purple-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-mono">7</span>
            </button>
            <button className="flex items-center space-x-1 text-zinc-400 hover:text-purple-500 transition-colors">
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
  );
}
