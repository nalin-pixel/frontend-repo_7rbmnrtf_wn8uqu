import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90" />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs text-indigo-700 shadow-sm">
                Built for Australian educators
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500">
                Teachers Assistant AI
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed">
                A voice-enabled assistant that plans lessons, generates assessments, aligns to the Australian Curriculum, and saves you hours every week.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-500">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-zinc-900 font-medium hover:bg-zinc-50">
                  See features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-zinc-600">
                <span>Privacy-first • Data hosted in Australia</span>
                <span>•</span>
                <span>Teacher-ready in minutes</span>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
