import { Pill, Users, Bath, Brain, Heart } from 'lucide-react'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    desc: 'Accurate, timely medication support to prevent missed doses and health complications.',
    best: 'Best for: Patients with complex prescriptions or post-hospital care needs.',
  },
  {
    icon: Users,
    title: 'Ambulatory & Transfer Assistance',
    desc: 'Safe movement support to reduce fall risk and improve mobility confidence.',
    best: 'Best for: Individuals with weakness, instability, or recent injury.',
  },
  {
    icon: Bath,
    title: 'Personal Care (Bathing, Toileting, Incontinence Support)',
    desc: 'Dignified assistance with essential daily routines.',
    best: 'Best for: Individuals who require help maintaining hygiene and daily comfort.',
  },
  {
    icon: Brain,
    title: 'Cognitive Stimulation',
    desc: 'Structured engagement to support mental clarity and emotional stability.',
    best: 'Best for: Patients experiencing memory decline or reduced cognitive activity.',
  },
  {
    icon: Heart,
    title: 'Companionship Support',
    desc: 'Consistent presence to reduce isolation and improve overall well-being.',
    best: 'Best for: Individuals who spend long periods alone or require social support.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            IN-HOME CARE SUPPORT DESIGNED FOR DAILY REALITY
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive services tailored to maintain dignity, safety, and independence at home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(({ icon: Icon, title, desc, best }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">{desc}</p>
              <p className="text-sm text-slate-600 pb-4 border-b border-slate-200 mb-4">{best}</p>

              <div className="pt-4">
                <a href="tel:+14434608684" className="inline-flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-3">Speak with a care coordinator</h3>
              <p className="text-white/90 mb-8">Determine the right level of support for your unique situation.</p>
            </div>
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-bold hover:bg-slate-100 transition-colors w-full"
            >
              Call Now +1 (443) 460-8684
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 bg-white rounded-2xl border-2 border-primary/10">
          <p className="text-slate-600 mb-6 text-lg">
            Speak with a care coordinator to determine the right level of support. <a href="tel:+14434608684" className="text-primary font-bold">Call Now +1 (443) 460-8684</a> | <a href="#form" className="text-primary font-bold">Send a Support Request</a>
          </p>
        </div>
      </div>
    </section>
  )
}
