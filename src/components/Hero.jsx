import { Phone, Clock, Shield, MapPin, CheckCircle2 } from 'lucide-react'

const indicators = [
  'When cognitive changes begin to affect safety or daily routines',
  'When mobility becomes unsafe or unstable',
  'When medication routines are no longer reliable',
  'When recovery requires supervision at home',
  'When daily personal care cannot be done independently',
  'When family support is no longer enough',
]

const tags = ['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support']

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              When Daily Care Becomes Uncertain, <span className="text-accent">We Bring Trusted Support</span> Right to Your Home.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">{tag}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="#form" onClick={e => scrollTo(e, '#form')} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
                Get Help Understanding Your Care Options
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 pt-4">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Care within 24–48 hours</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent" /> 24/7 service coverage</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Towson, MD & surrounding areas</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative z-10 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-20 h-20 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-500 font-medium">Hero Image</p>
                <p className="text-sm text-slate-400 mt-2">Replace with your image</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 animate-float">
              <span className="text-sm font-semibold text-primary flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Available</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 animate-float-delay">
              <span className="text-sm font-semibold text-primary flex items-center gap-2"><Shield className="w-4 h-4" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
