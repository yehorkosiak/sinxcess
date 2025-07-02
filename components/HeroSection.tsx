"use client";

import WaitlistForm from "@/components/WaitlistForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-[#3d1a1a] via-[#2a1515] to-black">
      {/* Metal texture background */}
      <div className="absolute inset-0 metal-texture opacity-10"></div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Date and location */}
          <div className="flex justify-between items-start mb-8">
            <div></div>
            <div className="text-right">
              <p className="text-2xl font-mono font-bold text-[#ff6b6b]">
                24.7.25
              </p>
              <p className="text-sm font-mono tracking-widest text-zinc-400">
                NOCE KRK
              </p>
            </div>
          </div>

          {/* Main title */}
          <h1 className="hidden md:block text-7xl md:text-9xl font-mono font-black tracking-tighter mb-4 leading-[0.9]">
            <span className="md:block text-white">RESONANCE</span>
            <span className="md:block text-white">ROOM</span>
          </h1>

          <h1 className="text-6xl md:hidden font-mono font-black tracking-tighter mb-4 leading-[0.9]">
            RESON
          </h1>

          {/* Zigzag graphic */}
          <div className="my-12 flex justify-center">
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              className="opacity-90"
            >
              <path
                d="M 100 0 L 100 100 L 50 150 L 150 150 L 100 200 L 100 300"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Artists */}
          <div className="space-y-1 mb-12">
            <p className="text-2xl font-mono text-white">YULZ</p>
            <p className="text-2xl font-mono text-zinc-300">NASTYA MURAVYOVA</p>
            <p className="text-2xl font-mono text-zinc-300">DMITRY KUZNETSOV</p>
          </div>

          {/* Waitlist form */}
          <div className="mt-16">
            <WaitlistForm
              placeholder="ENTER EMAIL FOR ACCESS..."
              buttonText="GET NOTIFIED"
              loadingText="PROCESSING..."
              inputClassName="bg-[#2a1515] border-[#3a2020] text-white placeholder:text-zinc-500"
              className="max-w-md"
            />

            <p className="text-xs text-zinc-500 font-mono mt-4 tracking-wider">
              LIMITED CAPACITY • FIRST COME FIRST SERVED
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
