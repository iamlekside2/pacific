import { Activity, MessageCircle, Target, Stethoscope } from 'lucide-react'

const items = [
  { icon: Activity, title: 'Consistent Care', desc: 'Structured, dependable support with zero gaps' },
  { icon: MessageCircle, title: 'Always Responsive', desc: '24/7 communication when you need it' },
  { icon: Target, title: 'Personalized Plans', desc: 'Built around YOUR needs, not templates' },
  { icon: Stethoscope, title: 'Professional Care', desc: 'Clinical expertise and full accountability' },
]

export default function Trust() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Families Choose Us</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-blue-200 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group glass-effect-dark rounded-2xl p-8 text-white hover:bg-white/10 transition-all duration-300 border-white/10 hover:border-white/20 animate-slide-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">{title}</h3>
              <p className="text-white/80 text-sm text-center leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
