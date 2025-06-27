import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <svg
              width="32"
              height="32"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="195" y="40" width="10" height="320" fill="white" />
              <polyline
                points="200,80 320,110 80,140 320,170 80,200 320,230 200,260 200,320"
                fill="none"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <span className="text-xl font-mono font-bold tracking-wider">
              Sinxcess
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
