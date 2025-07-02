export default function Header() {
  return (
    <header className="border-b border-[#3a2020] bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-mono font-bold tracking-[0.3em] text-zinc-400 uppercase">
              SINXCESS
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
