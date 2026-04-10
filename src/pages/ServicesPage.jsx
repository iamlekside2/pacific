import { Phone, ArrowRight, Pill, Users, Bath, Brain, Heart, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop&q=85',
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
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop&q=85',
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
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=85',
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
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=85',
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
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=500&fit=crop&q=85',
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
      <section className="relative py-20 bg-light-bg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=600&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[48px] font-medium text-slate-900 mb-4">
            Care That Fits the Reality of Daily Life at Home
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7] mb-8">
            Professional in-home healthcare services designed to support safety, stability, and independence. For recovery, ongoing care, or daily living support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium shadow-lg shadow-primary/20">
              <Phone className="w-4 h-4" /> Call Now +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors">
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding Your Care Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">UNDERSTANDING YOUR CARE NEEDS</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            Choosing the right level of care isn't always straightforward.
          </p>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            What starts as a small concern (missed medication, unsteady movement, or difficulty with daily routines) can quickly develop into larger risks without consistent support.
          </p>
          <p className="text-base text-slate-600 leading-[1.7]">
            Our services are structured to address real, day-to-day care needs with clarity, consistency, and professional oversight.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 text-center mb-16">OUR IN-HOME CARE SERVICES</h2>

          <div className="space-y-16">
            {services.map(({ icon: Icon, title, image, includes, why, bestFor, ensure }, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-10 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <img src={image} alt={title} className="w-full h-80 object-cover rounded-xl shadow-lg" />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 border border-blue-300 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-[20px] font-medium text-slate-900">{title}</h3>
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-1">What this includes</p>
                    <p className="text-base text-slate-600 leading-[1.7]">{includes}</p>
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-1">Why it matters</p>
                    <p className="text-base text-slate-600 leading-[1.7]">{why}</p>
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-1">Best suited for</p>
                    <ul className="space-y-1">
                      {bestFor.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-base text-slate-600 leading-[1.7]">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-1">What we ensure</p>
                    <p className="text-base text-slate-600 leading-[1.7]">{ensure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How These Services Work Together */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">HOW THESE SERVICES WORK TOGETHER</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            Most individuals don't need just one type of support. Care is often a combination of:
          </p>
          <ul className="space-y-2 mb-6">
            {['Medication management', 'Mobility assistance', 'Personal care', 'Supervision and companionship'].map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7]">
            We build care plans based on actual needs, not assumptions. So support is both effective and appropriate.
          </p>
        </div>
      </section>

      {/* When to Start Care */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">WHEN TO START CARE</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">A person may need support if:</p>
          <ul className="space-y-2 mb-6">
            {[
              'Daily routines are becoming difficult to maintain',
              'Safety concerns are increasing at home',
              'Recovery requires supervision',
              'Caregiving is becoming overwhelming',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7]">
            Delaying support often leads to avoidable complications. Early care helps stabilize the situation and reduces long-term risk.
          </p>
        </div>
      </section>

      {/* Starting Care Is Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] font-medium text-slate-900 mb-12">STARTING CARE IS SIMPLE</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: '1', title: 'Speak with a Care Coordinator', desc: 'We understand the situation and immediate needs.' },
              { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of support required.' },
              { num: '3', title: 'Care Begins', desc: 'Services are typically implemented within 24–48 hours.' },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-medium text-lg mx-auto mb-4 shadow-lg shadow-primary/20">
                  {step.num}
                </div>
                <h3 className="text-[20px] font-medium text-slate-900 mb-2">{step.title}</h3>
                <p className="text-base text-slate-600 leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium shadow-lg shadow-primary/20">
              <Phone className="w-4 h-4" /> Call Now +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors">
              Request Support
            </Link>
          </div>
        </div>
      </section>

      {/* Why Families Choose */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-8">WHY FAMILIES CHOOSE PACIFIC HOME HEALTHCARE</h2>
          <ul className="space-y-3 mb-6">
            {whyChoose.map(item => (
              <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7]">
            Care is delivered with reliability, so families are not left managing uncertainty alone.
          </p>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] font-medium text-slate-900 mb-4">NOT SURE WHAT SERVICE YOU NEED?</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            You don't need to have everything figured out. A short conversation can help clarify:
          </p>
          <ul className="text-base text-slate-600 space-y-2 mb-8">
            <li>• What level of care is appropriate</li>
            <li>• Which services are actually needed</li>
            <li>• How quickly support can begin</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium shadow-lg shadow-primary/20">
              <Phone className="w-4 h-4" /> Call Now +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium mb-4">If care needs are becoming unclear, it's time to get support.</h2>
          <p className="text-white/80 text-base mb-8 leading-[1.7]">
            Early action prevents complications and brings stability to daily life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-md font-medium">
              <Phone className="w-4 h-4" /> Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
              Request Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
