const steps = [
  { num: '01', title: 'Call or Request Support', desc: 'Tell us about your situation and immediate needs' },
  { num: '02', title: 'Assessment', desc: 'We evaluate and determine the appropriate care level' },
  { num: '03', title: 'Care Starts', desc: 'Services begin within 24–48 hours. Typically faster.' },
]

export default function Process() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Getting Started</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Simple. Clear. Fast.
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="relative">
                {/* Connecting line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[110%] h-1 bg-gradient-to-r from-primary to-primary/20" />
                )}

                {/* Card */}
                <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 relative z-10">
                  <p className="text-6xl font-bold text-primary/10 leading-none mb-4">{num}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 -mt-2">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 text-lg mb-6">Get clarity without delay. Start today.</p>
          <a href="#form" className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-dark transition-all">
            Request Support Today
          </a>
        </div>
      </div>
    </section>
  )
}
