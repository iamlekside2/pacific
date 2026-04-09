import { CheckCircle, Clock, Users, Shield } from 'lucide-react'

const items = [
  { icon: CheckCircle, title: 'Consistent Care Delivery', desc: 'Structured, dependable support with no gaps or inconsistency' },
  { icon: Clock, title: 'Responsive Communication', desc: 'Reachable when it matters, not limited to fixed hours' },
  { icon: Users, title: 'Personalized Care Approach', desc: 'Support plans built around actual needs, not assumptions' },
  { icon: Shield, title: 'Professional Oversight', desc: 'Services delivered with clinical awareness and accountability' },
]

export default function Trust() {
  return (
    <section className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
          CARE YOU CAN RELY ON WITHOUT UNCERTAINTY
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
