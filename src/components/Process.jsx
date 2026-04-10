import { Phone, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Call or Request Support',
    desc: 'Provide information to help us understand your situation and immediate needs.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=85',
  },
  {
    num: '2',
    title: 'Care Assessment',
    desc: 'We determine the appropriate level of care needed based on real conditions.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=85',
  },
  {
    num: '3',
    title: 'Care Begins',
    desc: 'Services are implemented quickly and swiftly. Typically within 24–48 hours.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop&q=85',
  },
]

export default function Process() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[32px] font-medium text-slate-900 mb-4">
            SIMPLE, CLEAR, AND FAST TO START
          </h2>
          <p className="text-base text-slate-600 leading-[1.7] max-w-2xl">
            Start the process today and get clarity without delay.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ num, title, desc, image }, idx) => (
            <div key={num} className="group flex flex-col">
              {/* Number circle + connector */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-medium text-lg shadow-lg shadow-primary/20 flex-shrink-0">
                  {num}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 mx-4 h-0.5 bg-blue-200 rounded-full" />
                )}
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-md mb-6">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="text-[20px] font-medium text-slate-900 mb-2">{title}</h3>
              <p className="text-base text-slate-600 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 text-base mb-8 font-medium">
            Start the process today and get clarity without delay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now +1 (443) 460-8684
            </a>
            <a
              href="#form"
              onClick={e => scrollTo(e, '#form')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-all"
            >
              Get Help Understanding Your Care Options
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
