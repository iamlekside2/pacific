import { Pill, Users, Bath, Brain, Heart } from 'lucide-react'

const services = [
  {
    icon: Pill,
    number: '01',
    title: 'Medication Management',
    desc: 'Accurate, timely administration. Prevent missed doses and complications.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Mobility & Transfers',
    desc: 'Safe assistance with movement. Reduce fall risk and injury.',
  },
  {
    icon: Bath,
    number: '03',
    title: 'Personal Care',
    desc: 'Dignified support with daily routines. Maintain comfort and hygiene.',
  },
  {
    icon: Brain,
    number: '04',
    title: 'Cognitive Support',
    desc: 'Mental engagement and clarity. Emotional stability and routine.',
  },
  {
    icon: Heart,
    number: '05',
    title: 'Companionship',
    desc: 'Consistent presence and social support. Combat isolation.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Comprehensive In-Home Care Services
          </h2>
        </div>

        {/* Services Grid - 2 column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map(({ icon: Icon, number, title, desc }) => (
            <div key={number} className="group flex gap-8 items-start">
              {/* Number and Icon */}
              <div className="flex-shrink-0">
                <p className="text-5xl font-bold text-primary/10 leading-none">{number}</p>
                <div className="w-14 h-14 bg-white rounded-xl border-2 border-primary/20 flex items-center justify-center -mt-4 relative z-10 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-20 border-t border-slate-300">
          <p className="text-lg text-slate-700 mb-6">
            Unsure which service you need? Our care coordinators will assess your situation and recommend the right support.
          </p>
          <a
            href="tel:+14434608684"
            className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
          >
            Speak with a Coordinator
          </a>
        </div>
      </div>
    </section>
  )
}
