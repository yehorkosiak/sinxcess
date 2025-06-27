import { Button } from "@/components/ui/button";
import PostCard from "./PostCard";
import { Post } from "@/lib/data";

interface PostsFeedProps {
  posts: Post[];
}

export default function PostsFeed({ posts }: PostsFeedProps) {
  return (
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
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
