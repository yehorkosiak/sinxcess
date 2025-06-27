"use client";

import WaitlistForm from "@/components/WaitlistForm";

export default function CommunityCTA() {
  return (
    <section className="py-16 px-4 bg-zinc-900/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-mono font-bold mb-6">
          JOIN THE FREQUENCY
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto font-mono">
          Get exclusive access to sinxcess events, artist interviews, and venue
          intel. Become part of the collective that moves in the shadows.
        </p>

        <WaitlistForm
          placeholder="YOUR EMAIL FREQUENCY..."
          buttonText="TRANSMIT"
          loadingText="TRANSMITTING..."
          inputClassName="bg-black"
          buttonClassName="whitespace-nowrap"
          className="max-w-md mx-auto mb-4"
        />

        <p className="text-xs text-zinc-500 mt-4 font-mono">
          NO SPAM. ONLY PURE SINXCESS TRANSMISSIONS.
        </p>
      </div>
    </section>
  );
}
