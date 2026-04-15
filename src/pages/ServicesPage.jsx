import { Phone, ArrowRight, Pill, Users, Bath, Brain, Heart, CheckCircle, Shield, Clock, AlertCircle, Sparkles, Activity, UserCheck, HeartHandshake, TrendingUp } from 'lucide-react'
import imgMedication from '../assets/images/medication.jpg'
import imgAmbulatory from '../assets/images/ambulatory.jpg'
import imgPersonalCare from '../assets/images/personal-care.jpg'
import imgCognitive from '../assets/images/cognitive.jpg'
import imgCompanionship from '../assets/images/companionship.jpg'
import img81 from '../assets/images/81.jpg'
import img82 from '../assets/images/82.jpg'
import imgCareOverview from '../assets/images/care-overview.jpg'
import img83 from '../assets/images/83.jpg'
import img86 from '../assets/images/86.jpg'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    image: imgMedication,
    includes: 'Accurate, timely support with prescribed medications, ensuring correct dosage and adherence to schedules.',
    why: 'Missed or incorrect medications can lead to complications, hospital readmissions, or worsening health conditions.',
    bestFor: [
      'Individuals managing multiple prescriptions',
      'Post-hospital recovery patients',
      'Patients experiencing memory-related challenges',
    ],
    ensure: 'Consistency, accuracy, and reduced risk in daily medication routines.',
  },
  {
    icon: Users,
    title: 'Ambulatory & Transfer Assistance',
    image: imgAmbulatory,
    includes: 'Support with walking, repositioning, and safe transfers (bed to chair, bathroom use, etc.).',
    why: 'Unassisted movement increases the risk of falls, injuries, and loss of confidence.',
    bestFor: [
      'Individuals with weakness or instability',
      'Post-surgery or injury recovery',
      'Patients at risk of falls',
    ],
    ensure: 'Safer movement, improved confidence, and reduced fall risk.',
  },
  {
    icon: Bath,
    title: 'Personal Care Support (Bathing, Toileting, Incontinence Care)',
    image: imgPersonalCare,
    includes: 'Hands-on assistance with essential hygiene and personal care routines.',
    why: 'When personal care becomes difficult, it impacts dignity, comfort, and overall health.',
    bestFor: [
      'Individuals needing help with daily hygiene',
      'Patients with limited mobility',
      'Those requiring consistent personal support',
    ],
    ensure: 'Dignified, respectful care that maintains comfort and routine.',
  },
  {
    icon: Brain,
    title: 'Cognitive Stimulation & Support',
    image: imgCognitive,
    includes: 'Structured engagement designed to support mental activity, memory, and emotional stability.',
    why: 'Cognitive decline can affect safety, routines, and overall well-being if left unaddressed.',
    bestFor: [
      'Individuals experiencing memory loss or confusion',
      'Early-stage cognitive decline',
      'Patients needing structured daily engagement',
    ],
    ensure: 'Consistent mental engagement and a more stable daily routine.',
  },
  {
    icon: Heart,
    title: 'Companionship Services',
    image: imgCompanionship,
    includes: 'Meaningful social interaction, conversation, and presence throughout the day.',
    why: 'Isolation can lead to emotional decline, reduced motivation, and worsening health outcomes.',
    bestFor: [
      'Individuals living alone',
      'Patients needing social and emotional support',
      'Those at risk of isolation',
    ],
    ensure: 'A consistent, reassuring presence that improves overall well-being.',
  },
]

const whyChoose = [
  'Consistent, structured care delivery',
  'Responsive communication when it matters',
  'Personalized care plans based on real conditions',
  'Professional oversight and accountability',
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={img82} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Care That Fits the Reality of Daily Living at Home
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Professional in-home healthcare services designed to support safety, stability, and independence. For recovery, ongoing care, or daily living support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-white/20">
              <Phone className="w-5 h-5" /> Call Now +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-bold backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding Your Care Needs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={imgCareOverview} alt="Care overview" className="w-full h-[450px] object-cover" />
            </div>
            {/* Right: Content */}
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Care Overview</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Understanding Your Care Needs</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">Choosing the right level of care isn't always straightforward.</p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl mb-5">
                <p className="text-slate-700 leading-relaxed flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>What starts as a small concern (missed medication, unsteady movement, or difficulty with daily routines) can quickly develop into larger risks without consistent support.</span>
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">Our services are structured to address real, day-to-day care needs with <span className="font-semibold text-blue-600">clarity, consistency, and professional oversight.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20">Our In-Home Care Services</h2>
          <div className="space-y-20">
            {services.map(({ icon: Icon, title, image, includes, why, bestFor, ensure }, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl group">
                    <img src={image} alt={title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">What this includes</p>
                    <p className="text-slate-700 leading-relaxed">{includes}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Why it matters</p>
                    <p className="text-slate-700 leading-relaxed">{why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Best suited for</p>
                    <ul className="space-y-1">
                      {bestFor.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">What we ensure</p>
                    <p className="text-slate-700 leading-relaxed">{ensure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How These Services Work Together */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Integrated Care</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">How These Services Work Together</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Most individuals don't need just one type of support. Care is often a combination of:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Pill, label: 'Medication Management', desc: 'Timely, accurate dosing' },
              { icon: Activity, label: 'Mobility Assistance', desc: 'Safe movement support' },
              { icon: HeartHandshake, label: 'Personal Care', desc: 'Dignified daily routines' },
              { icon: UserCheck, label: 'Supervision & Companionship', desc: 'Consistent presence' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{label}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200 text-center">
            <Sparkles className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              We build care plans based on <span className="font-bold text-blue-600">actual needs, not assumptions</span> — so support is both effective and appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* When to Start Care */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Timing Matters</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">When to Start Care</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">A person may need support if:</p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: TrendingUp, text: 'Daily routines are becoming difficult to maintain' },
                  { icon: AlertCircle, text: 'Safety concerns are increasing at home' },
                  { icon: Activity, text: 'Recovery requires supervision' },
                  { icon: Heart, text: 'Caregiving is becoming overwhelming' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-slate-700 pt-2">{text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                <p className="text-slate-700 leading-relaxed flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-amber-700">Delaying support often leads to avoidable complications.</span> Early care helps stabilize the situation and reduces long-term risk.</span>
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={img83} alt="Caring moment" className="w-full h-[550px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Starting Care Is Simple */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Starting Care Is Simple</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { num: '1', title: 'Speak with a Care Coordinator', desc: 'We understand the situation and immediate needs.' },
              { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of support required.' },
              { num: '3', title: 'Care Begins', desc: 'Services are typically implemented within 24–48 hours.' },
            ].map(step => (
              <div key={step.num}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-blue-500/40 border-4 border-white mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20">
              <Phone className="w-5 h-5" /> Call Now +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all">
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Why Families Choose */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">The Difference</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Families Choose THE PACIFIC HOMECARE</h2>
            <p className="text-lg text-white/80">Four pillars that make our care consistently reliable.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: 'Consistent Care', desc: 'Structured, dependable delivery without gaps' },
              { icon: Phone, title: 'Responsive Communication', desc: 'Reachable when it matters most' },
              { icon: UserCheck, title: 'Personalized Plans', desc: 'Built around real conditions, not templates' },
              { icon: CheckCircle, title: 'Professional Oversight', desc: 'Clinical awareness and accountability' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto italic">
              "Care is delivered with reliability, so families are not left managing uncertainty alone."
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 lg:p-16 overflow-hidden shadow-2xl">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Image */}
              <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl">
                <img src={img81} alt="Care support" className="w-full h-[350px] object-cover" />
              </div>

              {/* Right: Content */}
              <div className="text-white">
                <p className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-3">Free Consultation</p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">Not Sure What Service You Need?</h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">You don't need to have everything figured out. A short conversation can help clarify:</p>

                <div className="space-y-3 mb-8">
                  {[
                    'What level of care is appropriate',
                    'Which services are actually needed',
                    'How quickly support can begin',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-bold shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all">
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-xl font-bold backdrop-blur-md bg-white/10 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 transition-all">
                    Book a Consultation <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6">If care needs are becoming unclear, it's time to get support.</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">Early action prevents complications and brings stability to daily life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" /> Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/50 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/80 hover:scale-105 hover:-translate-y-1 transition-all backdrop-blur-sm">
              Request Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
