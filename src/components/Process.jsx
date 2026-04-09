import { Phone, CheckCircle, Zap } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Call or Request Support',
    desc: 'Provide information to help us understand your situation and immediate needs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a775?w=500&h=500&fit=crop'
  },
  {
    num: '2',
    title: 'Care Assessment',
    desc: 'We determine the appropriate level of care needed based on real conditions.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop'
  },
  {
    num: '3',
    title: 'Care Begins',
    desc: 'Services are implemented quickly and swiftly, typically within 24–48 hours.',
    image: 'https://images.unsplash.com/photo-1631217314997-dc67240b8232?w=500&h=500&fit=crop'
  },
]

export default function Process() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            SIMPLE, CLEAR, AND FAST TO START
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Get clarity without delay. Care typically begins within 24–48 hours.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-64 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500/20" />
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map(({ num, title, desc, image }, idx) => (
              <div
                key={num}
                className="group animate-fade-in-up"
                style={{animationDelay: `${0.1 + idx * 0.1}s`}}
              >
                {/* Image Container */}
                <div className="relative mb-8 h-56 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-3xl text-white shadow-lg shadow-blue-500/40 group-hover:scale-110 group-hover:shadow-blue-500/60 transition-all duration-300 border-4 border-white">
                    {num}
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-slate-600 max-w-xs mx-auto leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-700 text-lg mb-8 font-medium">Start the process today and get clarity without delay.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14434608684"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-blue-500 text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all"
            >
              Get Help Understanding Your Care Options
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
