import { Phone, CheckCircle, Zap } from 'lucide-react'

const steps = [
  { num: '1', title: 'Call or Request Support', desc: 'Provide information to help us understand your situation and immediate needs.' },
  { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of care needed based on real conditions.' },
  { num: '3', title: 'Care Begins', desc: 'Services are implemented quickly and swiftly, typically within 24–48 hours.' },
]

export default function Process() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          SIMPLE, CLEAR, AND FAST TO START
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-20">
          Get clarity without delay. Care typically begins within 24–48 hours.
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary to-primary/20" />
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 font-bold text-2xl text-primary">
                  {num}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-600 text-lg mb-8">Start the process today and get clarity without delay.</p>
          <a href="#form" className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-dark transition-all">
            Call Now +1 (443) 460-8684 | Get Help Understanding Your Care Options
          </a>
        </div>
      </div>
    </section>
  )
}
