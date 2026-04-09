import { Phone, Clock, Shield, MapPin, ArrowRight, Sparkles } from 'lucide-react'

const indicators = [
  'Cognitive safety concerns',
  'Mobility & fall risk',
  'Medication management',
  'Recovery supervision',
  'Daily living assistance',
  'Family support needed',
]

const tags = ['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support']

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse-slow" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full animate-slide-in-down">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Professional In-Home Care</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-up">
              <span className="block text-slate-900">When Daily Care</span>
              <span className="block">Becomes Uncertain,</span>
              <span className="gradient-text">We're Here to Help</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              Reliable in-home healthcare tailored to your needs. Medication management, mobility support, personal care, and compassionate companionship—delivered with professional oversight.
            </p>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-3 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="tel:+14434608684" className="btn-premium inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Call Now</span>
              </a>
              <a href="#form" onClick={e => scrollTo(e, '#form')} className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 group">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-slate-900">24-48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-slate-900">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-slate-900">Towson, MD</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative z-10 h-[550px] flex flex-col items-center justify-center p-8 animate-scale-in">
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-blue-300/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-24 h-24 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Professional Care</h3>
                <p className="text-slate-600 text-sm">Replace with your hero image</p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200 glass-effect animate-float group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Clock className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Available</p>
                  <p className="text-lg font-bold text-primary">24/7</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200 glass-effect animate-float-delay group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Shield className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Certified</p>
                  <p className="text-lg font-bold text-primary">Licensed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
