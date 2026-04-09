import { Pill, Activity, Bath, Brain, Heart, Phone } from 'lucide-react'

const services = [
  { icon: Pill, title: 'Medication Administration', desc: 'Accurate, timely medication support to prevent missed doses and health complications.', tag: 'Best for: Complex prescriptions or post-hospital care' },
  { icon: Activity, title: 'Ambulatory & Transfer Assistance', desc: 'Safe movement support to reduce fall risk and improve mobility confidence.', tag: 'Best for: Weakness, instability, or recent injury' },
  { icon: Bath, title: 'Personal Care', desc: 'Dignified assistance with bathing, toileting, incontinence support, and essential daily routines.', tag: 'Best for: Maintaining hygiene and daily comfort' },
  { icon: Brain, title: 'Cognitive Stimulation', desc: 'Structured engagement to support mental clarity and emotional stability.', tag: 'Best for: Memory decline or reduced cognitive activity' },
  { icon: Heart, title: 'Companionship Support', desc: 'Consistent presence to reduce isolation and improve overall well-being.', tag: 'Best for: Individuals who spend long periods alone' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">In-Home Care Support Designed for Daily Reality</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive services tailored to maintain dignity, safety, and independence at home.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="card-hover group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border-b border-slate-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-10 h-10 text-primary/40" />
                  </div>
                  <p className="text-xs text-slate-400">Service Image</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-slate-600 mb-4">{desc}</p>
                <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">{tag}</span>
              </div>
            </div>
          ))}

          <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Speak with a Care Coordinator</h3>
            <p className="text-white/90 mb-6">Determine the right level of support for your unique situation.</p>
            <a href="tel:+14434608684" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              +1 (443) 460-8684
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
