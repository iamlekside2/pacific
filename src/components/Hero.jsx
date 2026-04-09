import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 bg-white flex items-center overflow-hidden">
      {/* Left decorative shape */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      {/* Right decorative shape */}
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-10">
            {/* Headline */}
            <div className="space-y-4">
              <p className="text-accent font-bold text-sm uppercase tracking-widest">Professional Home Healthcare</p>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Trusted Care,
                <br />
                <span className="text-primary">Right at Home</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl text-slate-600 max-w-md leading-relaxed">
              Professional in-home healthcare for medication support, mobility assistance, personal care, and companionship. Available 24/7 in Towson, MD and surrounding areas.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-slate-200">
              <div>
                <p className="text-3xl font-bold text-primary">24-48h</p>
                <p className="text-sm text-slate-600">Quick Start</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-slate-600">Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-slate-600">Services</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+14434608684"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
              >
                <span>Request Help</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 pt-4">
              <div className="px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-slate-600 uppercase">Licensed & Insured</p>
              </div>
              <div className="px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-slate-600 uppercase">Professional Staff</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Large Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary/10">
                    <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 font-semibold">Healthcare Professional Image</p>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200 max-w-xs">
                <p className="font-bold text-slate-900 mb-1">Expert Care Team</p>
                <p className="text-sm text-slate-600">Experienced professionals dedicated to your wellbeing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
