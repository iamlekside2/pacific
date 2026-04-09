import { Phone } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Call or Request Support',
    desc: 'Provide information to help us understand your situation and immediate needs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a775?w=600&h=400&fit=crop&q=85',
  },
  {
    num: '2',
    title: 'Care Assessment',
    desc: 'We determine the appropriate level of care needed based on real conditions.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&q=85',
  },
  {
    num: '3',
    title: 'Care Begins',
    desc: 'Services are implemented quickly and swiftly, typically within 24–48 hours.',
    image: 'https://images.unsplash.com/photo-1631217314997-dc67240b8232?w=600&h=400&fit=crop&q=85',
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            SIMPLE, CLEAR, AND FAST TO START
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Get clarity without delay. Care typically begins within 24–48 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ num, title, desc, image }, idx) => (
            <div
              key={num}
              className="group flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              {/* ── Number circle + connector line ── */}
              <div className="flex items-center mb-6">
                {/* Circle */}
                <div className="relative flex-shrink-0">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-blue-500/40 border-4 border-white group-hover:scale-110 transition-transform duration-300">
                    {num}
                  </div>
                </div>

                {/* Connector line — only shown on md+ and not on last item */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 mx-4 h-0.5 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full" />
                )}
              </div>

              {/* ── Image ── */}
              <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/15 transition-all duration-300 mb-6 flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* ── Text ── */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-700 text-lg mb-8 font-medium">
            Start the process today and get clarity without delay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14434608684"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-blue-500 text-blue-600 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all"
            >
              Get Help Understanding Your Care Options
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
