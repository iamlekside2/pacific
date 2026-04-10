import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Dark Hero Area — centered text, no side image */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-32">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}} className="w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10 text-center">
          {/* Main Headline — centered */}
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

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-6 border-t border-white/10">
            {[
              { value: '24-48h', label: 'Quick Start' },
              { value: '24/7', label: 'Available' },
              { value: '5+', label: 'Services' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center group cursor-default">
                <p className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:scale-110 transition-transform duration-300 inline-block">{value}</p>
                <p className="text-white/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Image — peeks above the fold */}
      <div className="relative -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=600&fit=crop&q=90"
            alt="Professional Healthcare Caregiver"
            className="w-full h-[450px] object-cover"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
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
