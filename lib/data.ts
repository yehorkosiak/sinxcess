export interface Post {
  id: number;
  title: string;
  venue: string;
  dj: string;
  date: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "BASEMENT SESSIONS: TECHNO RITUAL",
    venue: "VOID CLUB",
    dj: "DARK MATTER",
    date: "2024.01.15",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    excerpt:
      "Descend into the depths of industrial techno. Raw. Unfiltered. Transcendent.",
    tags: ["TECHNO", "INDUSTRIAL", "SINXCESS"],
  },
  {
    id: 2,
    title: "FREQUENCY SHIFT: MINIMAL HYPNOSIS",
    venue: "THE BUNKER",
    dj: "CIPHER",
    date: "2024.01.12",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    excerpt: "303 sequences that rewire neural pathways. Join the communion.",
    tags: ["ACID", "WAREHOUSE", "RITUAL"],
  },
];
