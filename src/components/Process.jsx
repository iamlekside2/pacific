const steps = [
  { num: '1', title: 'Call or Request Support', desc: 'Provide information to help us understand your situation and immediate needs.' },
  { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of care needed based on real conditions.' },
  { num: '3', title: 'Care Begins', desc: 'Services are implemented quickly and swiftly, typically within 24–48 hours.' },
]

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple, Clear, and Fast to Start</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get clarity without delay. Care typically begins within 24–48 hours.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent to-primary" />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-20 h-20 bg-white border-4 border-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                  <span className="text-3xl font-bold text-primary">{num}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-slate-600 max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
