"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
  buttonClassName = "",
  showStatusMessages = true,
}: WaitlistFormProps) {
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
    <div className={className}>
      {/* Status Messages */}
      {showStatusMessages && submitStatus === "success" && (
        <div className="bg-purple-900/20 border border-purple-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
          <p className="text-purple-400 font-mono text-sm">{statusMessage}</p>
        </div>
      )}
      {showStatusMessages && submitStatus === "error" && (
        <div className="bg-red-900/20 border border-red-600 rounded-md p-4 text-center max-w-md mx-auto mb-6">
          <p className="text-red-400 font-mono text-sm">{statusMessage}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Input
          name="email"
          type="email"
          required
          placeholder={placeholder}
          className={`bg-zinc-900/80 border-zinc-700 text-white placeholder:text-zinc-500 font-mono backdrop-blur-sm ${inputClassName}`}
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold px-8 disabled:opacity-50 ${buttonClassName}`}
        >
          {isSubmitting ? loadingText : buttonText}
        </Button>
      </form>
    </div>
  );
}
