import { CheckCircle2, ArrowRight } from 'lucide-react'
import imgHero from '../assets/images/hero.png'

const indicators = [
  'When cognitive changes begin to affect safety or daily routines',
  'When mobility becomes unsafe or unstable',
  'When medication routines are no longer reliable',
  'When recovery requires supervision at home',
  'When daily personal care cannot be done independently',
  'When family support is no longer enough',
]

export default function HowToKnow() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative mt-16 py-20 bg-navy overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={imgHero}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
          How to Know When Home Healthcare Is Needed
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-sm leading-relaxed font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA strip — gives the last line its own value */}
        <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-semibold">
            Early support helps prevent complications and reduces long-term risk.
          </p>
          <a
            href="#form"
            onClick={e => scrollTo(e, '#form')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-xl font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all whitespace-nowrap shadow-lg"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
