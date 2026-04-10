import { Phone, ArrowRight } from 'lucide-react'

const situations = [
  {
    title: 'After Hospital Discharge',
    problem: "You've been told your loved one needs supervision at home, but instructions are unclear, follow-ups are hard to coordinate, and you're unsure what level of care is actually required. Small gaps in care can quickly turn into setbacks.",
    solution: 'We provide structured in-home support after discharge—helping manage medications, monitor recovery, and maintain stability so progress continues safely at home.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Increasing Falls or Mobility Issues',
    problem: "Simple movements—getting out of bed, using the bathroom, walking short distances—are becoming unpredictable. You're noticing near-falls or hesitations, and the risk of injury is increasing.",
    solution: 'We assist with safe movement, transfers, and ambulation—reducing fall risk while helping maintain as much independence as possible.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Medication Mismanagement',
    problem: "Medications are being missed, taken incorrectly, or causing confusion. You're concerned, but managing schedules and dosages consistently is becoming difficult.",
    solution: 'We ensure medications are administered correctly and on time, reducing health risks and bringing consistency to daily routines.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'When Cognitive Changes Begin to Affect Safety or Daily Routines',
    problem: "You're noticing forgetfulness, confusion, or changes in behavior that are starting to affect safety: missed medications, wandering, or difficulty following daily routines.",
    solution: 'We provide structured support and consistent supervision to help maintain safety, reinforce routines, and support cognitive engagement in a calm, familiar environment.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Declining Daily Function',
    problem: 'Tasks that were once routine, like bathing, dressing, toileting, moving around, now require assistance. Maintaining dignity and consistency is becoming more difficult without support.',
    solution: 'We assist with essential daily care in a respectful, structured way; helping maintain comfort, hygiene, and stability.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Caregiver Burnout',
    problem: "You're doing everything you can: balancing care, work, and personal responsibilities; but it's becoming physically and emotionally unsustainable. There's little time to rest, and the pressure keeps building.",
    solution: "We provide dependable, ongoing support that eases the load, so care continues without interruption, and you're not managing it alone.",
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=300&fit=crop&q=80',
  },
]

export default function Situations() {
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
            SITUATIONS WE STEP IN QUICKLY
          </h2>
          <p className="text-base text-slate-600 leading-[1.7]">
            Recognizing when professional support becomes essential
          </p>
        </div>

        {/* Alternating Rows */}
        <div className="space-y-0">
          {situations.map(({ title, problem, solution, image }, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-start gap-8 py-12 border-b border-gray-100 ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Situation Side */}
              <div className="flex-1 space-y-3">
                <span className="text-[13px] font-medium text-primary uppercase tracking-wider">The Situation</span>
                <h3 className="text-[20px] font-medium text-slate-900">{title}</h3>
                <p className="text-base text-slate-600 leading-[1.7]">{problem}</p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:flex flex-col items-center mx-4">
                <div className="w-px bg-primary/20 flex-1 min-h-[120px]" />
              </div>

              {/* Response Side */}
              <div className="flex-1 space-y-3">
                <span className="text-[13px] font-medium text-primary uppercase tracking-wider">How We Step In</span>
                <p className="text-base text-slate-600 leading-[1.7]">{solution}</p>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-lg mt-4 shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-slate-600 text-base italic leading-[1.7]">
          When these situations begin to appear, consistent support makes a measurable difference in safety, recovery, and quality of life.
        </div>

        {/* CTA Banner */}
        <div className="mt-8 bg-primary rounded-xl py-8 px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <a
              href="#form"
              onClick={e => scrollTo(e, '#form')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
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
