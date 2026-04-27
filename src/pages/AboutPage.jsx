import { Phone, CheckCircle, Shield, Clock, Users, Heart, ArrowRight } from 'lucide-react'
import img82 from '../assets/images/82.jpg'
import img83 from '../assets/images/83.jpg'
import img84 from '../assets/images/84.jpg'
import img85 from '../assets/images/85.jpg'
import img86 from '../assets/images/86.jpg'
import img87 from '../assets/images/87.jpg'
import imgConsultation from '../assets/images/consultation.jpg'
import { Link } from 'react-router-dom'
import { useFormModal } from '../context/FormModalContext'

const differentiators = [
  { title: 'Care That Is Structured, Not Improvised', sub: 'Inconsistent care leads to setbacks.', desc: 'Our services are delivered through clear routines, defined responsibilities, and consistent execution; so nothing important is missed.', icon: Shield },
  { title: 'Responsiveness When It Matters Most', sub: "Care needs don't follow a schedule.", desc: 'We remain accessible and responsive, ensuring families are not left waiting or guessing when situations change.', icon: Clock },
  { title: 'Personalized Based on Real Needs', sub: 'No two care situations are the same.', desc: 'We assess actual conditions and build care plans around what is truly needed—not assumptions or generic templates.', icon: Users },
  { title: 'Professional Oversight and Accountability', sub: 'Care is delivered with clinical awareness and responsibility.', desc: 'Every service is structured to maintain safety, reduce risk, and support measurable stability over time.', icon: Heart },
]

const weSupport = [
  'Require assistance with daily living activities',
  'Need supervision during recovery at home',
  'Are experiencing mobility or safety concerns',
  'Need help managing medications',
  'Are showing signs of cognitive decline',
  'Require consistent companionship and support',
]

const familySupport = [
  'Managing care alongside work and responsibilities',
  'Experiencing caregiver fatigue',
  'Unsure what level of care is appropriate',
  'Trying to prevent further health complications',
]

const whyTrust = [
  { label: 'Reliable', desc: 'delivered consistently without disruption' },
  { label: 'Responsive', desc: 'support is available when needed' },
  { label: 'Structured', desc: 'clear systems guide every aspect of care' },
  { label: 'Personalized', desc: 'tailored to real, evolving needs' },
]

export default function AboutPage() {
  const { openModal } = useFormModal()

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={img85} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Care Built on Professional Responsibility and Personal Commitment
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
            THE PACIFIC HOMECARE provides structured, dependable in-home care designed to support safety, stability, and dignity for individuals and the families who rely on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="tel:+14435896889" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-white/20">
              <Phone className="w-5 h-5" /> Call Now +1 (443) 589-6889
            </a>
            <button onClick={openModal} className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-bold backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Request Support
            </button>
            <button onClick={openModal} className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-bold backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Speak with a Care Coordinator
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">THE PACIFIC HOMECARE is a residential healthcare provider focused on delivering consistent, high-quality in-home care for individuals who require daily support.</p>
              <p className="text-lg text-slate-700 font-semibold mb-4">We work with families navigating:</p>
              <ul className="space-y-3 mb-6">
                {['Recovery after hospital discharge', 'Ongoing health conditions', 'Age-related decline', 'Increasing care needs at home'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-lg">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-slate-700 leading-relaxed italic">Our role is simple but critical: to bring <span className="font-bold text-blue-700">clarity, structure, and reliable care</span> into situations that often feel uncertain.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={img82} alt="Caregiver supporting patient" className="w-full h-[550px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20">What Makes Our Approach Different</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {differentiators.map(({ title, sub, desc, icon: Icon }) => (
              <div key={title} className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium mb-1">{sub}</p>
                  <p className="text-slate-700 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Who We Support</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border-2 border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our services are designed for individuals who:</h3>
              </div>
              <ul className="space-y-3">
                {weSupport.map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-slate-100">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/30">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">We also support families who are:</h3>
              </div>
              <ul className="space-y-3">
                {familySupport.map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role in Your Care Journey */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <img src={img84} alt="Caregiver assisting patient" className="w-full h-[550px] object-cover" />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Our Role in Your Care</h2>
              <p className="text-lg text-slate-700 font-semibold mb-4">When care needs increase, most families face the same challenges:</p>
              <ul className="space-y-2 mb-8">
                {['Unclear next steps', 'Gaps in support', 'Growing pressure and responsibility'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-slate-700 font-semibold mb-4">We step in to:</p>
              <ul className="space-y-2 mb-6">
                {['Stabilize daily routines', 'Reduce immediate risks', 'Provide dependable, ongoing support'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed italic">So care continues safely—and you're not left managing it alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clinical Credentials & Service Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border-2 border-blue-200 mb-4">
              <Shield className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Licensed & Credentialed</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Clinical Credentials & Service Coverage</h2>
          </div>

          {/* Licensing */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-sm mb-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-lg text-slate-700 leading-relaxed mb-3">
                  THE PACIFIC HOMECARE operates as a licensed <span className="font-bold text-blue-700">Residential Services Agency (RSA)</span> under the Maryland Department of Health, Office of Health Care Quality.
                </p>
                <p className="text-slate-600 leading-relaxed italic">
                  This means care is delivered within regulated standards designed to ensure safety, accountability, and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our services include:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Skilled nursing under registered nurse (RN) supervision',
                'Medication management and administration',
                'Assistance with activities of daily living (ADLs)',
                'Companion care and routine support',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 p-5 bg-white rounded-xl border-2 border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 leading-relaxed mt-6 italic">
              Care is provided by trained healthcare professionals, with oversight that ensures reliability across every care plan.
            </p>
          </div>

          {/* Service Coverage */}
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 mb-10">
            <p className="text-lg text-slate-700 font-semibold mb-5 text-center">We support adults 18 and older and provide services across:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Baltimore County',
                'Baltimore City',
                'Montgomery County',
                "Prince George's County",
                'Anne Arundel County',
                'Howard County',
                'Harford County',
              ].map(county => (
                <div key={county} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="font-semibold text-slate-800">{county}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Our Commitment to Care */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Commitment to Care</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">We approach every care situation with:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Consistency', desc: 'care delivered reliably, without gaps' },
                  { label: 'Respect', desc: 'preserving dignity in every interaction' },
                  { label: 'Clarity', desc: 'clear communication and expectations' },
                  { label: 'Accountability', desc: 'responsibility in how care is delivered' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700"><span className="font-bold">{label}</span> — {desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl">
                Because in-home care is not just about assistance. It's about maintaining stability, safety, and quality of life.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={img83} alt="Compassionate care moment" className="w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Trust THE PACIFIC HOMECARE */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={img86} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <img src={img87} alt="Family trusting care" className="w-full h-[550px] object-cover" />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Families Trust THE PACIFIC HOMECARE</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">Families choose THE PACIFIC HOMECARE because care is:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {whyTrust.map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700"><span className="font-bold">{label}</span> — {desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">This reduces uncertainty and creates a more stable, manageable care experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* If You're Unsure What to Do Next */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">If You're Unsure What to Do Next</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">You don't need to have all the answers before reaching out. A short conversation can help you:</p>
              <ul className="text-lg text-slate-700 space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" /> Understand your current situation more clearly</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" /> Identify what level of care is needed</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" /> Determine how quickly support can begin</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+14435896889" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primary-dark transition-all">
                  <Phone className="w-5 h-5" /> Call Now +1 (443) 589-6889
                </a>
                <button onClick={openModal} className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-all">
                  Book a Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={imgConsultation} alt="Care consultation" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={img82} alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6">When care becomes uncertain, having the right support changes how everything is managed.</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">The goal isn't just to respond. It's to bring structure, stability, and clarity into daily life at home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14435896889" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <button onClick={openModal} className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/50 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/80 hover:scale-105 hover:-translate-y-1 transition-all backdrop-blur-sm">
              Request Support
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
