const situations = [
  { num: '01', title: 'After Hospital Discharge', problem: "Instructions are unclear, follow-ups are hard to coordinate, and you're unsure what level of care is actually required.", solution: 'Structured in-home support helping manage medications, monitor recovery, and maintain stability.' },
  { num: '02', title: 'Increasing Falls or Mobility Issues', problem: 'Simple movements are becoming unpredictable. Near-falls or hesitations are increasing injury risk.', solution: 'Safe movement, transfers, and ambulation assistance\u2014reducing fall risk while maintaining independence.' },
  { num: '03', title: 'Medication Mismanagement', problem: 'Medications are being missed, taken incorrectly, or causing confusion. Managing schedules is becoming difficult.', solution: 'Ensuring medications are administered correctly and on time, reducing health risks and bringing consistency.' },
  { num: '04', title: 'Cognitive Changes Affecting Safety', problem: 'Forgetfulness, confusion, or behavioral changes affecting safety: missed medications, wandering, or routine difficulties.', solution: 'Structured support and consistent supervision to maintain safety and reinforce routines in a familiar environment.' },
  { num: '05', title: 'Declining Daily Function', problem: 'Routine tasks like bathing, dressing, toileting now require assistance. Maintaining dignity is becoming difficult.', solution: 'Respectful, structured assistance with essential daily care\u2014maintaining comfort, hygiene, and stability.' },
  { num: '06', title: 'Caregiver Burnout', problem: 'Balancing care, work, and personal responsibilities is becoming physically and emotionally unsustainable.', solution: 'Dependable, ongoing support that eases the load so care continues without interruption.' },
]

export default function Situations() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Situations We Step In Quickly</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Recognizing when professional support becomes essential.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map(({ num, title, problem, solution }) => (
            <div key={num} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-sm">{num}</div>
                <h3 className="text-lg font-bold text-primary">{title}</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 pb-4 border-b border-slate-100">{problem}</p>
              <div className="bg-blue-50 rounded-xl p-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">How we step in</span>
                <p className="text-slate-600 text-sm mt-2">{solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
