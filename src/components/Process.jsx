import { Phone, CheckCircle, Zap } from 'lucide-react'

const steps = [
  { icon: Phone, num: '1', title: 'Call or Request Support', desc: 'Tell us your situation and immediate needs' },
  { icon: CheckCircle, num: '2', title: 'Care Assessment', desc: 'We determine the appropriate care level' },
  { icon: Zap, num: '3', title: 'Care Begins', desc: 'Services start within 24–48 hours' },
]

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Clear & Fast
          </h2>
          <p className="text-xl text-slate-600">Get clarity without delay</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary to-accent" />

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map(({ icon: Icon, num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg border-4 border-white">
                  {num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-lg mb-6">Start the process today and get clarity without delay</p>
          <a
            href="#form"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
          >
            Request Support
          </a>
        </div>
      </div>
    </section>
  )
}
