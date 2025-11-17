import { BookOpen, Mic, ClipboardList, ShieldCheck, Sparkles, Timer } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'AI Voice Assistant',
    desc: 'Hands-free lesson planning, resource search, and classroom Q&A.'
  },
  {
    icon: BookOpen,
    title: 'Curriculum Aligned',
    desc: 'Maps outputs to Australian Curriculum content descriptors.'
  },
  {
    icon: ClipboardList,
    title: 'Assessments & Rubrics',
    desc: 'Generate differentiated assessments, marking guides and rubrics.'
  },
  {
    icon: Timer,
    title: 'Save Hours Weekly',
    desc: 'Automate admin tasks like emails, notes, and reflections.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & Safety',
    desc: 'Compliant with Australian privacy standards. Your data stays yours.'
  },
  {
    icon: Sparkles,
    title: 'Ready-To-Use Templates',
    desc: 'Grab-and-go lesson plans, inquiry prompts, and unit overviews.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Built for the Aussie classroom</h2>
          <p className="mt-2 text-zinc-600">Tools that meet you where you teach—primary, secondary, or special education.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 p-[1px]">
                <div className="h-full w-full rounded-[7px] bg-white grid place-items-center">
                  <f.icon className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
