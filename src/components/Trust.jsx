import { CheckCircle, Clock, Users, Shield } from 'lucide-react'

const items = [
  { icon: CheckCircle, title: 'Consistent Care', desc: 'Structured support with zero gaps or interruptions' },
  { icon: Clock, title: '24/7 Available', desc: 'Reach us whenever you need assistance or support' },
  { icon: Users, title: 'Personalized Plans', desc: 'Care tailored to your unique situation and needs' },
  { icon: Shield, title: 'Professional Staff', desc: 'Licensed, insured, and expertly trained caregivers' },
]

export default function Trust() {
  return (
    <section className="py-32 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Families Trust Us
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional care built on consistency, compassion, and clinical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
