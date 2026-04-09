import { AlertCircle, Check } from 'lucide-react'

const situations = [
  {
    title: 'After Hospital Discharge',
    problem: 'Instructions unclear, follow-ups difficult, unsure about care level needed',
    solution: 'Structured in-home support managing medications and monitoring recovery',
  },
  {
    title: 'Increasing Falls or Mobility Issues',
    problem: 'Simple movements becoming unpredictable, near-falls increasing injury risk',
    solution: 'Safe movement assistance reducing fall risk while maintaining independence',
  },
  {
    title: 'Medication Mismanagement',
    problem: 'Medications missed or taken incorrectly, managing schedules is difficult',
    solution: 'Correct administration on time, reducing health risks and improving consistency',
  },
  {
    title: 'Cognitive Changes Affecting Safety',
    problem: 'Forgetfulness, confusion affecting safety—missed meds, wandering, routine issues',
    solution: 'Structured support and supervision maintaining safety and routines at home',
  },
  {
    title: 'Declining Daily Function',
    problem: 'Routine tasks like bathing and dressing now require assistance',
    solution: 'Respectful daily care assistance maintaining comfort, hygiene, and stability',
  },
  {
    title: 'Caregiver Burnout',
    problem: 'Balancing care, work, and personal life becoming unsustainable',
    solution: 'Dependable support easing the load so care continues without interruption',
  },
]

export default function Situations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
            When To Seek Help
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Situations We Handle
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Early intervention prevents complications and reduces family stress
          </p>
        </div>

        {/* Situations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map(({ title, problem, solution }, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Title with Number */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 pt-1">{title}</h3>
              </div>

              {/* Problem */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">The Situation</p>
                <p className="text-slate-700">{problem}</p>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">How We Help</p>
                  <p className="text-slate-700">{solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-3xl border border-primary/20 text-center">
          <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-slate-900 mb-3">Early Support Makes a Difference</h3>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-8">
            When these situations begin to appear, consistent support prevents complications and improves quality of life for the whole family.
          </p>
          <a
            href="#form"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
          >
            Start a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
