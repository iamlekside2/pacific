import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          You Don't Have to Figure This Out Alone
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Most families delay care because the next step isn't clear. A short consultation helps you understand what care level is needed, how quickly support can begin, and what the process looks like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <span>Request Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
