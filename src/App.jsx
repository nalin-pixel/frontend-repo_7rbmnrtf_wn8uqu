import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Teachers Assistant AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-700">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-700">Terms</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
