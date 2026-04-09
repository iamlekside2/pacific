import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
          YOU DON'T HAVE TO FIGURE THIS OUT ALONE
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
          Most families delay care.Not by choice, but because the next step isn't clear. A short consultation helps you understand:
        </p>

        <ul className="text-lg text-slate-700 max-w-2xl mx-auto mb-10 space-y-3 text-left ml-8">
          <li>• What level of care is actually needed</li>
          <li>• How quickly support can begin</li>
          <li>• What the process looks like from start to care delivery</li>
        </ul>

        <p className="text-slate-600 text-lg mb-10">Speak with a care coordinator today.</p>

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
            <span>Book a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
