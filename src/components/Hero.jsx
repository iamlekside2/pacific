import { Phone, ArrowRight, Heart, Clock, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary">
                <Heart className="w-4 h-4" /> Professional Care Services
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
              When Daily Care Becomes Uncertain,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 mt-2">
                We're Here
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Reliable in-home healthcare tailored to your needs. Medication support, mobility assistance, personal care, and companionship—delivered with professional oversight.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Medication Support', 'Mobility Help', 'Personal Care', 'Companionship', 'Cognitive Support'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+14434608684"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
              >
                <span>Get Help</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {[
                { icon: Clock, label: '24-48 Hours', desc: 'Quick Start' },
                { icon: Heart, label: '24/7', desc: 'Available' },
                { icon: MapPin, label: 'Towson, MD', desc: 'Service Area' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center sm:text-left">
                  <Icon className="w-5 h-5 text-primary mx-auto sm:mx-0 mb-2" />
                  <p className="font-bold text-slate-900">{label}</p>
                  <p className="text-xs text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200 h-[500px] flex items-center justify-center overflow-hidden">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-16 h-16 text-primary/40" />
                  </div>
                  <p className="text-slate-500 font-semibold">Hero Image Area</p>
                  <p className="text-sm text-slate-400 mt-2">Add your professional image here</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Care Start Time</p>
                <p className="text-2xl font-bold text-primary">24-48h</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Service</p>
                <p className="text-2xl font-bold text-primary">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
