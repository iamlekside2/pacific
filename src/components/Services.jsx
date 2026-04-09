import { Pill, Users, Bath, Brain, Heart, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    desc: 'Accurate, timely medication support',
    details: 'Prevent missed doses and complications',
    best: 'Complex prescriptions • Post-hospital care',
  },
  {
    icon: Users,
    title: 'Mobility & Transfer Assistance',
    desc: 'Safe movement & fall prevention',
    details: 'Reduce risk while maintaining independence',
    best: 'Weakness • Recent injury • Instability',
  },
  {
    icon: Bath,
    title: 'Personal Care',
    desc: 'Bathing, dressing, daily routines',
    details: 'Dignified assistance with essential tasks',
    best: 'Hygiene • Daily comfort • Incontinence support',
  },
  {
    icon: Brain,
    title: 'Cognitive Stimulation',
    desc: 'Mental engagement & support',
    details: 'Support clarity and emotional stability',
    best: 'Memory decline • Reduced activity',
  },
  {
    icon: Heart,
    title: 'Companionship Support',
    desc: 'Consistent presence & social support',
    details: 'Reduce isolation and improve well-being',
    best: 'Social connection • Long periods alone',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            In-Home Care Support
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive services designed for daily reality and dignity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, title, desc, details, best }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-slate-600 mb-3">{desc}</p>
              <p className="text-sm text-slate-500 mb-4 pb-4 border-b border-slate-200">{details}</p>

              {/* Best For */}
              <p className="text-xs font-semibold text-primary uppercase tracking-wide">Best For:</p>
              <p className="text-sm text-slate-700 mt-1">{best}</p>
            </div>
          ))}

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-primary to-teal-700 rounded-2xl p-8 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Guidance?</h3>
              <p className="text-white/90 text-sm mb-8">
                Speak with a care coordinator to find the right service level
              </p>
            </div>
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              <span>Call Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
