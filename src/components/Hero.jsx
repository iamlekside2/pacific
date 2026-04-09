import { Phone, ArrowRight, CheckCircle2, Heart, Zap } from 'lucide-react'

const indicators = [
  'When cognitive changes begin to affect safety or daily routines',
  'When mobility becomes unsafe or unstable',
  'When medication routines are no longer reliable',
  'When recovery requires supervision at home',
  'When daily personal care cannot be done independently',
  'When family support is no longer enough',
]

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
              <Heart className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-blue-300 font-semibold text-sm">Professional Home Healthcare</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                When Daily Care Becomes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Uncertain,</span>
                <br />
                We Bring{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Trusted Support</span>
              </h1>
              <p className="text-lg text-blue-100/80 leading-relaxed max-w-lg">
                Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2">
              {['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
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

          {/* Right: Full-Height Image */}
          <div className="relative hidden lg:block animate-fade-in-down">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-blue-500/30 rounded-3xl blur-2xl animate-pulse" style={{animationDelay: '0.2s'}} />

            {/* Main Image — fills the column */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/40 border-2 border-white/20 group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=1100&fit=crop&q=90"
                alt="Professional Healthcare Caregiver"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />

              {/* Label on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white font-semibold text-sm">Professional In-Home Care · 24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Floating Card — bottom left */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg px-5 py-4 rounded-2xl border border-white/30 shadow-2xl shadow-blue-500/30 animate-bounce" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <p className="font-bold text-white text-sm">Quick Response</p>
              </div>
              <p className="text-white/70 text-xs pl-12">Care within 24-48 hours of assessment</p>
            </div>

            {/* Floating Card — top right */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg px-5 py-4 rounded-2xl border border-white/30 shadow-2xl shadow-cyan-500/30 animate-bounce" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <p className="font-bold text-white text-sm">24/7 Support</p>
              </div>
              <p className="text-white/70 text-xs pl-12">Always available when you need us</p>
            </div>
          </div>
        </div>

        {/* How to Know Section */}
        <div className="mt-20 pt-16 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-white mb-8">How to Know When Home Healthcare is Needed</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {indicators.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-6 italic">
            Early support helps prevent complications and reduces long-term risk.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.65s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.65s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
