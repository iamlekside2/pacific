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
    <section className="relative py-16 md:py-20 bg-navy overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&h=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-medium text-white mb-10">
          HOW TO KNOW WHEN HOME HEALTHCARE IS NEEDED
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {indicators.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-white/80 text-base leading-[1.7]">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-blue-300/70 text-[13px] mt-8 italic">
          Early support helps prevent complications and reduces long-term risk.
        </p>
      </div>
    </section>
  )
}
