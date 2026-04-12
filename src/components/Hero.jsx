import { Phone, ArrowRight } from 'lucide-react'
import heroImg from '../assets/images/hero.png'
import underHeroImg from '../assets/images/under-hero.png'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Hero Area with background image */}
      <div className="relative pb-56">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 relative z-10 text-center">
          {/* Main Headline — 2 lines */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            When Daily Care Becomes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Uncertain,</span>
            <br />
            We Bring{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Trusted Support</span>
          </h1>

          {/* Sub-title */}
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+14434608684"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl font-bold text-base shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now: +1 (443) 460-8684</span>
            </a>
            <a
              href="#form"
              onClick={e => scrollTo(e, '#form')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/40 text-white rounded-2xl font-bold text-base backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Help Understanding Your Care Options</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Large Image — overlaps hero */}
      <div className="relative -mt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-white/10">
          <img
            src={underHeroImg}
            alt="Professional Healthcare Caregiver"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-8 pt-6 border-t border-slate-200">
          {[
            { value: '24-48h', label: 'Quick Start' },
            { value: '24/7', label: 'Available' },
            { value: '5+', label: 'Services' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group cursor-default">
              <p className="text-2xl lg:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">{value}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.65s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
