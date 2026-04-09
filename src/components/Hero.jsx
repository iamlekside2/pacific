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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content with Animations */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
              <Heart className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-blue-300 font-semibold text-sm">Professional Home Healthcare</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                When Daily Care Becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Uncertain,</span><br/>We Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Trusted Support</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed max-w-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support'].map((tag, i) => (
                <span key={tag} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105" style={{animationDelay: `${0.3 + i * 0.05}s`}}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a
                href="tel:+14434608684"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" /> Call Now: +1 (443) 460-8684
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Help Understanding Your Care Options</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-center group cursor-default">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:scale-110 transition-transform duration-300">24-48h</p>
                <p className="text-white/60 text-sm mt-2">Quick Start</p>
              </div>
              <div className="text-center group cursor-default">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:scale-110 transition-transform duration-300">24/7</p>
                <p className="text-white/60 text-sm mt-2">Available</p>
              </div>
              <div className="text-center group cursor-default">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:scale-110 transition-transform duration-300">5+</p>
                <p className="text-white/60 text-sm mt-2">Services</p>
              </div>
            </div>
          </div>

          {/* Right: Beautiful Image Area with Animation */}
          <div className="relative hidden lg:block h-[600px] animate-fade-in-down">
            {/* Main Image Card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden group">
              {/* Gradient Border Animation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse" />

              {/* Image Container */}
              <div className="relative inset-0 rounded-3xl bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-slate-900/80 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-white/40 transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-blue-400/10 to-transparent group-hover:from-blue-500/10 transition-all duration-500" />

                {/* Icon + Text */}
                <div className="text-center z-10 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/20 border-2 border-blue-400/50 flex items-center justify-center animate-pulse">
                    <svg className="w-24 h-24 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xl mb-2">Healthcare Professional</p>
                  <p className="text-blue-200/60 text-sm">Expert Care Available</p>
                </div>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl max-w-xs animate-bounce" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-blue-300" />
                <p className="font-bold text-white">Quick Response</p>
              </div>
              <p className="text-white/70 text-sm">Care within 24-48 hours of assessment</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl max-w-xs animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-blue-300" />
                <p className="font-bold text-white">24/7 Support</p>
              </div>
              <p className="text-white/70 text-sm">Always available when you need us</p>
            </div>
          </div>
        </div>

        {/* How to Know Section - Below Hero */}
        <div className="mt-20 pt-20 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-white mb-8">How to Know When Home Healthcare is Needed</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {indicators.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-6 italic">
            Early support helps prevent complications and reduces long-term risk.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
