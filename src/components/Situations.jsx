import { AlertCircle } from 'lucide-react'

const situations = [
  {
    title: 'After Hospital Discharge',
    problem: 'Unclear instructions and difficult follow-ups make it hard to know what level of care is needed.',
    solution: 'We provide structured in-home support managing medications and monitoring recovery safely.',
  },
  {
    title: 'Increasing Falls or Mobility Issues',
    problem: 'Simple movements are unpredictable. Near-falls and hesitation increase injury risk.',
    solution: 'Safe movement assistance reduces fall risk while maintaining independence and confidence.',
  },
  {
    title: 'Medication Mismanagement',
    problem: 'Medications are missed, taken incorrectly, or causing confusion in daily routines.',
    solution: 'We ensure correct administration on time, reducing health risks and improving consistency.',
  },
  {
    title: 'Cognitive Changes Affecting Safety',
    problem: 'Forgetfulness, confusion, or behavioral changes affecting safety and daily routines.',
    solution: 'Structured supervision maintains safety, reinforces routines, and supports cognitive engagement.',
  },
  {
    title: 'Declining Daily Function',
    problem: 'Tasks like bathing, dressing, and toileting now require assistance. Dignity is at risk.',
    solution: 'Respectful daily care assistance maintains comfort, hygiene, and emotional stability.',
  },
  {
    title: 'Caregiver Burnout',
    problem: 'Balancing care, work, and personal life is becoming physically and emotionally unsustainable.',
    solution: 'Dependable support eases the load so families aren\'t managing everything alone.',
  },
]

export default function Situations() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">When to Seek Help</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Situations We Address
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {situations.map(({ title, problem, solution }, i) => (
            <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all">
              {/* Number */}
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6 text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>

              {/* Problem */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Challenge</p>
                <p className="text-sm text-slate-700">{problem}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Our Solution</p>
                <p className="text-sm text-slate-700">{solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-12 bg-primary/5 border-l-4 border-primary rounded-lg">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-slate-900 mb-2">Early Intervention Matters</p>
              <p className="text-slate-700">
                When these situations begin to appear, consistent support prevents complications, stabilizes care, and significantly reduces stress on families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
