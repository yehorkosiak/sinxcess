"use client";

import WaitlistForm from "@/components/WaitlistForm";
import { Users, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-mono font-black tracking-tighter mb-6">
          <span className="text-purple-500">Resonance Room</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-mono">
          Rave Rituals
        </p>

        <WaitlistForm
          placeholder="ENTER YOUR FREQUENCY..."
          buttonText="JOIN COLLECTIVE"
          loadingText="TRANSMITTING..."
          inputClassName="max-w-xs"
          className="mb-6"
        />

        <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 font-mono">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-purple-500" />
            <span>2,847 FREQUENCIES CONNECTED</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-purple-500" />
            <span>~2 WEEK ACTIVATION</span>
          </div>
        </div>

        <p className="text-xs text-zinc-500 text-center font-mono mt-4 max-w-md mx-auto">
          By transmitting, you agree to receive exclusive sinxcess
          communications.
          <br />
          Your frequency data is encrypted and secure.
        </p>
      </div>
    </section>
  );
}
