import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
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
              className="hover:text-purple-500 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="hover:text-purple-500 transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="/privacy"
              className="hover:text-purple-500 transition-colors"
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
  );
}
