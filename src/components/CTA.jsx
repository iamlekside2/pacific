import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary via-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          You Don't Have to Figure This Out Alone
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Most families delay care—not by choice, but because the next step isn't clear. A short consultation helps you understand what level of care is needed, how quickly support can begin, and what the process looks like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+14434608684"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="#form"
            onClick={e => scrollTo(e, '#form')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
