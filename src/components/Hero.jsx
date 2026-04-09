import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react'

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
    <section id="home" className="relative min-h-screen pt-20 bg-white flex items-center overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                When Daily Care Becomes Uncertain, We Bring Trusted Support Right to Your Home.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-slate-300 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+14434608684"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now for Immediate Assistance +1 (443) 460-8684
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
              >
                <span>Get Help Understanding Your Care Options</span>
              </a>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 text-slate-700 border-t border-slate-300 pt-8">
              <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Care available within 24–48 hours</p>
              <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> 24/7 service coverage</p>
              <p className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Serving Towson, MD & surrounding areas</p>
            </div>
          </div>

          {/* Right: How to Know Box */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-primary/20 sticky top-32">
              <h3 className="text-2xl font-bold text-primary mb-8">How to Know When Home Healthcare is Needed</h3>
              <ul className="space-y-5">
                {indicators.map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-sm mt-8 pt-8 border-t border-slate-200 italic">
                Early support helps prevent complications and reduces long-term risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
