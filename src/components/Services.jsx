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
    <section id="services" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.3s'}} />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.2s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            IN-HOME CARE SUPPORT DESIGNED FOR DAILY REALITY
          </h2>
          <p className="text-xl text-blue-200/80">
            Comprehensive services tailored to maintain dignity, safety, and independence at home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(({ icon: Icon, title, desc, best }, i) => (
            <div
              key={title}
              className="bg-slate-800/50 rounded-2xl p-8 border-2 border-white/10 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/60 transition-all group animate-fade-in-up hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              style={{animationDelay: `${0.1 + i * 0.06}s`}}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500/50 group-hover:to-cyan-400/40 transition-all">
                <Icon className="w-7 h-7 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h3>
              <p className="text-white/80 mb-4 leading-relaxed">{desc}</p>
              <p className="text-sm text-blue-200/70 pb-4 border-b border-white/10 mb-4">{best}</p>

              <div className="pt-4">
                <a
                  href="tel:+14434608684"
                  className="inline-flex items-center gap-2 px-4 py-2 text-cyan-400 font-semibold hover:bg-cyan-400/20 rounded-lg transition-colors text-sm group-hover:text-cyan-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 text-white flex flex-col justify-between shadow-2xl shadow-blue-500/40 group animate-fade-in-up border border-white/20" style={{animationDelay: `${0.1 + services.length * 0.06}s`}}>
            <div className="group-hover:scale-110 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">Speak with a care coordinator</h3>
              <p className="text-white/90 mb-8">Determine the right level of support for your unique situation.</p>
            </div>
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-100 hover:scale-105 hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/40"
            >
              Call Now +1 (443) 460-8684
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-blue-500/20 rounded-2xl border-2 border-blue-400/40 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-white/80 mb-6 text-lg">
            Speak with a care coordinator to determine the right level of support.{' '}
            <a href="tel:+14434608684" className="text-cyan-300 font-bold hover:text-cyan-200">
              Call Now +1 (443) 460-8684
            </a>
            {' '}|{' '}
            <a href="#form" className="text-cyan-300 font-bold hover:text-cyan-200">
              Send a Support Request
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
