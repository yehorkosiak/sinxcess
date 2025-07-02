"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommunityCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-[#1a0f0f] relative">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-mono font-black text-white mb-4 tracking-tight uppercase">
          JOIN THE COLLECTIVE
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto font-mono text-sm tracking-wider">
          CONNECT WITH UNDERGROUND FREQUENCIES. SHARE YOUR SIGNAL.
        </p>
        <a
          href="https://www.instagram.com/sinxcess/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#ff3366] hover:bg-[#ff6b6b] text-white font-mono tracking-wider border-none">
            <Instagram className="mr-2 h-4 w-4" />
            FOLLOW @SINXCESS
          </Button>
        </a>
      </div>
    </section>
  );
}
