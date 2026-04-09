import { Pill, Activity, Bath, Brain, Heart, Phone, ArrowRight } from 'lucide-react'

const services = [
  { icon: Pill, title: 'Medication Administration', desc: 'Accurate, timely medication support to prevent missed doses and complications.', tag: 'Complex prescriptions' },
  { icon: Activity, title: 'Mobility & Safety', desc: 'Safe movement support to reduce fall risk and improve mobility confidence.', tag: 'Weakness or instability' },
  { icon: Bath, title: 'Personal Care', desc: 'Dignified assistance with bathing, dressing, and essential daily routines.', tag: 'Daily independence' },
  { icon: Brain, title: 'Cognitive Support', desc: 'Structured engagement to support mental clarity and emotional stability.', tag: 'Memory concerns' },
  { icon: Heart, title: 'Companionship', desc: 'Consistent presence to reduce isolation and improve overall well-being.', tag: 'Social connection' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-in-down">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Comprehensive Care <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Personalized in-home support that maintains dignity, safety, and independence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="card-hover group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon Section */}
              <div className="h-32 bg-gradient-to-br from-primary/5 via-blue-50 to-white flex items-center justify-center border-b border-slate-100">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-blue-100/20 rounded-2xl group-hover:from-primary/20 group-hover:to-blue-100/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-1 leading-relaxed">{desc}</p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-block px-3 py-1.5 bg-blue-50 text-primary text-xs font-semibold rounded-lg group-hover:bg-primary group-hover:text-white transition-all">{tag}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="card-hover bg-gradient-to-br from-primary to-blue-600 rounded-2xl overflow-hidden shadow-lg text-white flex flex-col justify-between p-8 md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Guidance?</h3>
              <p className="text-white/90 text-sm mb-6">Speak with our care coordinator</p>
            </div>
            <a href="tel:+14434608684" className="inline-flex items-center gap-2 px-4 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-all group w-full justify-center">
              <span>Call Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
