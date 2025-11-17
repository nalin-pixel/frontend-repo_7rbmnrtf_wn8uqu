import { Menu, BookOpen, Mic, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-white/50 dark:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-white/90 dark:bg-zinc-900/90 grid place-items-center">
                <Mic className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Teachers Assistant AI</p>
              <p className="text-[10px] text-zinc-500">Built for Australian educators</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#benefits" className="hover:text-zinc-900">Benefits</a>
            <a href="#how" className="hover:text-zinc-900">How it works</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50">
              <Sparkles className="h-4 w-4" /> Try the demo
            </a>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
