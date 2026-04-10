import { CheckCircle2 } from 'lucide-react'

const indicators = [
  'When cognitive changes begin to affect safety or daily routines',
  'When mobility becomes unsafe or unstable',
  'When medication routines are no longer reliable',
  'When recovery requires supervision at home',
  'When daily personal care cannot be done independently',
  'When family support is no longer enough',
]

export default function HowToKnow() {
  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&h=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
          HOW TO KNOW WHEN HOME HEALTHCARE IS NEEDED
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-blue-300/70 text-sm mt-8 italic">
          Early support helps prevent complications and reduces long-term risk.
        </p>
      </div>
    </section>
  )
}
