import { Phone } from 'lucide-react'

export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '5s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">You Don't Have to Figure This Out Alone</h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Most families delay care—not by choice, but because the next step isn't clear. A short consultation helps you understand what level of care is needed, how quickly support can begin, and what the process looks like from start to care delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="#form" onClick={e => scrollTo(e, '#form')} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary transition-all">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
