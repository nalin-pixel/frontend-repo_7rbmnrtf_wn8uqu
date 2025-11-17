import { ArrowRight, Headphones } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-orange-50 p-8">
            <h3 className="text-2xl font-bold text-zinc-900">Speak. Plan. Teach.</h3>
            <p className="mt-2 text-zinc-700">Start a voice session and watch your plan come together in minutes—aligned to curriculum and differentiated by level.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-500">
                Start free trial <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-zinc-900 font-medium hover:bg-zinc-50">
                Book a demo <Headphones className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h4 className="text-sm font-semibold text-zinc-900">What teachers say</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <blockquote key={i} className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-sm text-zinc-700">“It shaved an hour off my planning every week.”</p>
                  <footer className="mt-2 text-xs text-zinc-500">Year 6 Teacher, NSW</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
