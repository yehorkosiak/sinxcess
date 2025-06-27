"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WaitlistPage() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-mono font-bold tracking-wider">
                Sinxsess
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                FEED
              </Link>
              <Link
                href="/venues"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                VENUES
              </Link>
              <Link
                href="/artists"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                ARTISTS
              </Link>
              <Link
                href="/community"
                className="text-sm font-mono hover:text-green-500 transition-colors"
              >
                COLLECTIVE
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Badge className="bg-green-600 text-white font-mono text-sm px-4 py-2">
              EXCLUSIVE ACCESS
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-black tracking-tighter mb-6">
            JOIN THE
            <br />
            <span className="text-purple-500">WAITLIST</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-mono leading-relaxed">
            Get priority access to the most exclusive sinxcess events, private
            sessions, and artist collaborations. Limited frequency slots
            available.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 font-mono">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-500" />
              <span>1,247 IN QUEUE</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-green-500" />
              <span>~2 WEEK ACTIVATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-xl">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-mono font-bold text-white">
                FREQUENCY REGISTRATION
              </CardTitle>
              <p className="text-zinc-400 font-mono text-sm mt-2">
                Enter your frequency to join the collective
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-900/20 border border-green-600 rounded-md p-4 text-center">
                  <p className="text-green-400 font-mono text-sm">
                    {statusMessage}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-900/20 border border-red-600 rounded-md p-4 text-center">
                  <p className="text-red-400 font-mono text-sm">
                    {statusMessage}
                  </p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label className="block text-sm font-mono text-zinc-400 mb-2">
                    EMAIL FREQUENCY*
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your.frequency@domain.com"
                    className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 font-mono text-lg py-3"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold py-3 text-lg tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "TRANSMIT TO WAITLIST"}
                  </Button>
                </div>

                <p className="text-xs text-zinc-500 text-center font-mono">
                  By transmitting, you agree to receive exclusive sinxcess
                  communications.
                  <br />
                  Your frequency data is encrypted and secure.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-mono font-bold text-center mb-12">
            WAITLIST PRIVILEGES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-2">
                PRIORITY ACCESS
              </h3>
              <p className="text-zinc-400 font-mono text-sm">
                First notification for exclusive events and private sessions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-2">
                INSIDER INTEL
              </h3>
              <p className="text-zinc-400 font-mono text-sm">
                Behind-the-scenes access to artist collaborations and venue
                intel
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-2">
                MEMBER BENEFITS
              </h3>
              <p className="text-zinc-400 font-mono text-sm">
                Exclusive discounts and VIP treatment at collective events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-purple-500" />
              <span className="font-mono font-bold">SINXCESS</span>
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
          <div className="text-center mt-6 text-xs text-zinc-500 font-mono">
            © 2024 SINXCESS COLLECTIVE. ALL FREQUENCIES RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
