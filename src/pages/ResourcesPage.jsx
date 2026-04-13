import { Phone, ArrowRight, HelpCircle, BookOpen, LifeBuoy, Zap, CheckCircle, Users, Heart, Brain, Pill, Activity, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFormModal } from '../context/FormModalContext'
import img85 from '../assets/images/85.png'
import img84 from '../assets/images/84.png'
import img87 from '../assets/images/87.png'
import img81 from '../assets/images/81.png'
import img82 from '../assets/images/82.png'
import img83 from '../assets/images/83.png'
import img86 from '../assets/images/86.png'
import imgFaq from '../assets/images/faq.png'

const commonQuestions = [
  'How do I know if home care is needed?',
  'What type of care does my situation require?',
  'How quickly can care actually start?',
  'What happens after hospital discharge?',
  'How do I manage care without becoming overwhelmed?',
]

const careGuides = [
  {
    slug: 'home-healthcare-needed',
    title: 'How to Know When Home Healthcare Is Needed',
    desc: 'Recognizing the early signs can prevent complications and reduce long-term risk.',
    image: img85,
    points: [
      'The most common warning signs',
      'When to act (and when not to wait)',
      'How early support changes outcomes',
    ],
  },
  {
    slug: 'after-hospital-discharge',
    title: 'What to Do After Hospital Discharge',
    desc: 'The transition from hospital to home is one of the most critical stages of recovery.',
    image: img84,
    points: [
      'What discharge instructions often miss',
      'How to prevent setbacks at home',
      'What support is actually needed in the first few days',
    ],
  },
  {
    slug: 'types-of-in-home-care',
    title: 'Understanding Different Types of In-Home Care',
    desc: 'Not all care is the same—and choosing incorrectly can lead to gaps in support.',
    image: img82,
    points: [
      'The difference between medical and non-medical care',
      'What services apply to your situation',
      'How to choose the right level of support',
    ],
  },
  {
    slug: 'reduce-fall-risk',
    title: 'How to Reduce Fall Risk at Home',
    desc: 'Falls are one of the most common and preventable causes of injury.',
    image: img87,
    points: [
      'Why fall risk increases',
      'Practical ways to improve safety',
      'When professional support becomes necessary',
    ],
  },
  {
    slug: 'manage-medication-safely',
    title: 'Managing Medication Safely at Home',
    desc: 'Medication errors are more common than most families realize.',
    image: img81,
    points: [
      'Common medication mistakes',
      'How to create a reliable routine',
      'When support is needed to prevent complications',
    ],
  },
]

const situations = [
  {
    icon: Heart,
    title: 'When Caregiving Becomes Overwhelming',
    desc: 'Balancing care with work, family, and personal responsibilities can quickly become unsustainable.',
    points: [
      'Recognize signs of burnout early',
      'Understand your support options',
      'Transition from doing everything alone to structured support',
    ],
  },
  {
    icon: Brain,
    title: 'When Cognitive Changes Begin to Affect Daily Life',
    desc: 'Memory loss and confusion often start subtly—but can quickly affect safety.',
    points: [
      'Identify early cognitive changes',
      'Understand risks and progression',
      'Know when structured support becomes necessary',
    ],
  },
  {
    icon: Activity,
    title: 'When Daily Activities Become Difficult',
    desc: 'Difficulty with bathing, dressing, or mobility often signals a need for support.',
    points: [
      'Recognize declining daily function',
      'Understand what level of care is appropriate',
      'Maintain dignity while introducing support',
    ],
  },
]

const quickAnswers = [
  { q: 'How quickly can care start?', a: 'Care can typically begin within 24–48 hours after assessment.' },
  { q: 'Do I need a doctor\'s referral?', a: 'In many cases, no. A consultation helps determine what\'s required.' },
  { q: 'What if I\'m not sure what care is needed?', a: 'That\'s common. A short conversation helps clarify the situation and next steps.' },
  { q: 'Is care available long-term or short-term?', a: 'Both. Services are tailored based on your needs.' },
]

export default function ResourcesPage() {
  const { openModal } = useFormModal()

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <p className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Care Guides & Resources
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Clear, practical information to help you understand what's happening and what to do next.
          </p>
        </div>
      </section>

      {/* Most Common Care Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Start Here</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Most Common Care Questions</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">If you're unsure what to do next, these are the questions most families ask first:</p>

              <ul className="space-y-3 mb-8">
                {commonQuestions.map(q => (
                  <li key={q} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 pt-1">{q}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-slate-700 leading-relaxed">You don't need to figure everything out alone. <span className="font-semibold text-blue-700">These guides are here to give you clarity.</span></p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={imgFaq} alt="Healthcare professional" className="w-full h-[550px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Care Guides */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-blue-200 mb-4">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Care Guides</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">In-Depth Articles on Home Healthcare</h2>
            <p className="text-lg text-slate-600">Comprehensive guides on the most important topics families navigate.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careGuides.map(guide => (
              <article key={guide.slug} className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="overflow-hidden">
                  <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{guide.desc}</p>

                  <div className="mb-5">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">You'll learn:</p>
                    <ul className="space-y-1.5">
                      {guide.points.map(p => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/resources/${guide.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Situation-Based Guidance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border-2 border-slate-200 mb-4">
              <LifeBuoy className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Real-Life Scenarios</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Situation-Based Guidance</h2>
            <p className="text-lg text-slate-600">Not every care situation fits into a clear category. These resources are based on real-life scenarios families face.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {situations.map(({ icon: Icon, title, desc, points }) => (
              <div key={title} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{desc}</p>

                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">This guide helps you:</p>
                <ul className="space-y-2 mb-6">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                <button onClick={openModal} className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-blue-200 mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Quick Answers</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {quickAnswers.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">{q}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use + Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 lg:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl">
                <img src={img86} alt="Care support" className="w-full h-[400px] object-cover" />
              </div>

              <div className="text-white">
                <p className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-3">How to Use These Resources</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Still Unsure What Applies to Your Situation?</h2>
                <p className="text-white/80 mb-4 leading-relaxed">You don't need to read everything. Start with the guide that best matches your current situation.</p>
                <p className="text-white/80 mb-6 leading-relaxed">A short conversation can help you:</p>

                <div className="space-y-2 mb-8">
                  {['Understand what\'s happening', 'Identify the right level of care', 'Know how quickly support can begin'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-bold shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all">
                    <Phone className="w-5 h-5" /> Call Now +1 (443) 460-8684
                  </a>
                  <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-md bg-white/10 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 transition-all">
                    Book a Consultation <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
