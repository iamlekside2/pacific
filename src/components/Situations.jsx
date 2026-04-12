import imgHospital from '../assets/images/hospital-discharge.png'
import imgFalls from '../assets/images/falls.png'
import imgMedMis from '../assets/images/medication-mismanagement.png'
import imgCogChanges from '../assets/images/cognitive-changes.png'
import imgDeclining from '../assets/images/declining-function.png'
import imgBurnout from '../assets/images/caregiver-burnout.png'

const situations = [
  {
    title: 'After Hospital Discharge',
    problem: "You've been told your loved one needs supervision at home, but instructions are unclear, follow-ups are hard to coordinate, and you're unsure what level of care is actually required. Small gaps in care can quickly turn into setbacks.",
    solution: 'We provide structured in-home support after discharge—helping manage medications, monitor recovery, and maintain stability so progress continues safely at home.',
    image: imgHospital,
  },
  {
    title: 'Increasing Falls or Mobility Issues',
    problem: 'Simple movements—getting out of bed, using the bathroom, walking short distances—are becoming unpredictable. You\'re noticing near-falls or hesitations, and the risk of injury is increasing.',
    solution: 'We assist with safe movement, transfers, and ambulation—reducing fall risk while helping maintain as much independence as possible.',
    image: imgFalls,
  },
  {
    title: 'Medication Mismanagement',
    problem: 'Medications are being missed, taken incorrectly, or causing confusion. You\'re concerned, but managing schedules and dosages consistently is becoming difficult.',
    solution: 'We ensure medications are administered correctly and on time, reducing health risks and bringing consistency to daily routines.',
    image: imgMedMis,
  },
  {
    title: 'When Cognitive Changes Begin to Affect Safety or Daily Routines',
    problem: "You're noticing forgetfulness, confusion, or changes in behavior that are starting to affect safety: missed medications, wandering, or difficulty following daily routines.",
    solution: 'We provide structured support and consistent supervision to help maintain safety, reinforce routines, and support cognitive engagement in a calm, familiar environment.',
    image: imgCogChanges,
  },
  {
    title: 'Declining Daily Function',
    problem: 'Tasks that were once routine, like bathing, dressing, toileting, moving around, now require assistance. Maintaining dignity and consistency is becoming more difficult without support.',
    solution: 'We assist with essential daily care in a respectful, structured way; helping maintain comfort, hygiene, and stability.',
    image: imgDeclining,
  },
  {
    title: 'Caregiver Burnout',
    problem: "You're doing everything you can: balancing care, work, and personal responsibilities; but it's becoming physically and emotionally unsustainable. There's little time to rest, and the pressure keeps building.",
    solution: 'We provide dependable, ongoing support that eases the load, so care continues without interruption, and you\'re not managing it alone.',
    image: imgBurnout,
  },
]

export default function Situations() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Situations We Step In Quickly
          </h2>
          <p className="text-xl text-slate-600">
            Recognizing when professional support becomes essential
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {situations.map(({ title, problem, solution, image }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm transition-all group animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${0.1 + i * 0.06}s`}}
            >
              <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
              {/* Number */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-6 text-sm group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>

              {/* Problem */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Situation</p>
                <p className="text-slate-700 leading-relaxed">{problem}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">How we step in</p>
                <p className="text-slate-700 leading-relaxed">{solution}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-12 bg-gradient-to-r from-blue-50 to-blue-50/50 border-l-4 border-blue-500 rounded-lg animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="text-slate-900 font-semibold mb-6 text-lg">When these situations begin to appear, consistent support makes a measurable difference in safety, recovery, and quality of life.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14434608684"
              className="group inline-flex px-8 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="group inline-flex px-8 py-5 border-2 border-blue-500 text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all"
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
