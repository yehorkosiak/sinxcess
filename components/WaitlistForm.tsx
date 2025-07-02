"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  placeholder?: string;
  buttonText?: string;
  loadingText?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  showStatusMessages?: boolean;
}

export default function WaitlistForm({
  placeholder = "ENTER YOUR FREQUENCY...",
  buttonText = "JOIN COLLECTIVE",
  loadingText = "TRANSMITTING...",
  className = "",
  inputClassName = "",
  showStatusMessages = true,
}: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setIsLoading(true);

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
        setIsSuccess(true);
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
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      {/* Status Messages */}
      {showStatusMessages && submitStatus === "success" && (
        <div className="bg-white-900/20 border border-white-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
          <p className="text-white-400 font-mono text-sm">{statusMessage}</p>
        </div>
      )}
      {showStatusMessages && submitStatus === "error" && (
        <div className="bg-red-900/20 border border-red-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
          <p className="text-red-400 font-mono text-sm">{statusMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
        <div className="md:flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={cn(
              "flex-1 bg-[#2a1515] border-[#3a2020] text-white placeholder:text-zinc-500 font-mono tracking-wider",
              inputClassName
            )}
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-[#ff3366] hover:bg-[#ff6b6b] text-white font-mono tracking-wider uppercase w-full md:w-auto"
          >
            {isLoading ? loadingText : buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
