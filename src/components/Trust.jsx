import { CheckCircle, Clock, Users, Shield } from 'lucide-react'
import img70 from '../assets/images/70.jpg'

const items = [
  { icon: CheckCircle, title: 'Consistent Care Delivery', desc: 'Structured, dependable support with no gaps or inconsistency' },
  { icon: Clock, title: 'Responsive Communication', desc: 'Reachable when it matters, not limited to fixed hours' },
  { icon: Users, title: 'Personalized Care Approach', desc: 'Support plans built around actual needs, not assumptions' },
  { icon: Shield, title: 'Professional Oversight', desc: 'Services delivered with clinical awareness and accountability' },
]

export default function Trust() {
  return (
    <section className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={img70} alt="" className="w-full h-full object-cover opacity-[0.08]" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
          Care You Can Rely On Without Uncertainty
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA to Services */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-700 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:+14434608684"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/50 text-white rounded-2xl font-bold text-base hover:bg-white/10 hover:border-white/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
          >
            Call Now: +1 (443) 460-8684
          </a>
        </div>
      </div>
    </section>
  )
}
