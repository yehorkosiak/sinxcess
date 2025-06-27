import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            placeholder="YOUR EMAIL FREQUENCY..."
            className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 font-mono"
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold px-8 whitespace-nowrap">
            TRANSMIT
          </Button>
        </div>
        <p className="text-xs text-zinc-500 mt-4 font-mono">
          NO SPAM. ONLY PURE SINXCESS TRANSMISSIONS.
        </p>
      </div>
    </section>
  );
}
