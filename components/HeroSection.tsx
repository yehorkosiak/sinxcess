"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Clock } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(result.message);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.error || "Submission failed");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-purple-900/20 border border-purple-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
            <p className="text-purple-400 font-mono text-sm">{statusMessage}</p>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-900/20 border border-red-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
            <p className="text-red-400 font-mono text-sm">{statusMessage}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <Input
            name="email"
            type="email"
            required
            placeholder="ENTER YOUR FREQUENCY..."
            className="bg-zinc-900/80 border-zinc-700 text-white placeholder:text-zinc-500 font-mono max-w-xs backdrop-blur-sm"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold px-8 disabled:opacity-50"
          >
            {isSubmitting ? "TRANSMITTING..." : "JOIN COLLECTIVE"}
          </Button>
        </form>

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
