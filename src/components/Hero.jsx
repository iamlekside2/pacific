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
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/20"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Now: +1 (443) 460-8684</span>
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/40 text-white rounded-2xl font-bold text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get Help Understanding Your Care Options</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
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
          <div className="relative hidden lg:flex lg:items-center lg:justify-center h-[650px] animate-fade-in-down">
            {/* Outer Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse" style={{animationDelay: '0.2s'}} />

            {/* Main Image Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden group">
              {/* Animated Gradient Border - Multiple Layers */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000" style={{animationDelay: '0.3s'}} />

              {/* Main Content Container */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-800/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl border border-white/30 flex flex-col items-center justify-center overflow-hidden group-hover:border-white/60 transition-all duration-500">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59,130,246,.1) 25%, rgba(59,130,246,.1) 26%, transparent 27%, transparent 74%, rgba(59,130,246,.1) 75%, rgba(59,130,246,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59,130,246,.1) 25%, rgba(59,130,246,.1) 26%, transparent 27%, transparent 74%, rgba(59,130,246,.1) 75%, rgba(59,130,246,.1) 76%, transparent 77%, transparent)', backgroundSize: '60px 60px'}} className="w-full h-full" />
                </div>

                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-cyan-400/5 group-hover:from-blue-500/20 group-hover:via-blue-400/10 transition-all duration-700" />

                {/* Image Placeholder Area */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-6 px-8">
                  {/* Large Image Area - Ready for Real Photos */}
                  <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/20 border-2 border-blue-300/60 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/50">
                    {/* Image placeholder with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-blue-700/40 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-40 h-40 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-white/70 text-sm font-medium">Healthcare Professional</p>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white">Professional In-Home Care</h3>
                    <p className="text-blue-100/80 text-base">Expert caregivers available 24/7</p>
                  </div>
                </div>

                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 -skew-x-12 animate-pulse" />
              </div>
            </div>

            {/* Floating Info Cards - Enhanced */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 backdrop-blur-lg px-6 py-5 rounded-2xl border border-white/30 shadow-2xl shadow-blue-500/30 max-w-xs animate-bounce group hover:shadow-blue-500/50 transition-all" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-white">Quick Response</p>
              </div>
              <p className="text-white/70 text-sm ml-13">Care within 24-48 hours of assessment</p>
            </div>

            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500/20 to-blue-400/10 backdrop-blur-lg px-6 py-5 rounded-2xl border border-white/30 shadow-2xl shadow-cyan-500/30 max-w-xs animate-bounce group hover:shadow-cyan-500/50 transition-all" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-white">24/7 Support</p>
              </div>
              <p className="text-white/70 text-sm ml-13">Always available when you need us</p>
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
