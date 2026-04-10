import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative py-20 bg-light-bg overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&h=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[32px] font-medium text-slate-900 mb-6 leading-tight">
          YOU DON'T HAVE TO FIGURE THIS OUT ALONE
        </h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7] mb-6">
          Most families delay care. Not by choice, but because the next step isn't clear. A short consultation helps you understand:
        </p>

        <ul className="text-base text-slate-700 max-w-2xl mx-auto mb-8 space-y-3 text-left ml-8">
          <li>• What level of care is actually needed</li>
          <li>• How quickly support can begin</li>
          <li>• What the process looks like from start to care delivery</li>
        </ul>

        <p className="text-slate-600 text-base mb-8">Speak with a care coordinator today.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+14434608684"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <Phone className="w-4 h-4" /> Call Now +1 (443) 460-8684
          </a>
          <a
            href="#form"
            onClick={e => scrollTo(e, '#form')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-all"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
