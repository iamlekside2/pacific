import { Phone, CheckCircle, Shield, Clock, Users, Heart, ArrowRight } from 'lucide-react'
import imgProfile from '../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'

const differentiators = [
  { title: 'Care That Is Structured, Not Improvised', desc: 'Inconsistent care leads to setbacks. Our services are delivered through clear routines, defined responsibilities, and consistent execution; so nothing important is missed.', icon: Shield },
  { title: 'Responsiveness When It Matters Most', desc: "Care needs don't follow a schedule. We remain accessible and responsive, ensuring families are not left waiting or guessing when situations change.", icon: Clock },
  { title: 'Personalized Based on Real Needs', desc: 'No two care situations are the same. We assess actual conditions and build care plans around what is truly needed—not assumptions or generic templates.', icon: Users },
  { title: 'Professional Oversight and Accountability', desc: 'Care is delivered with clinical awareness and responsibility. Every service is structured to maintain safety, reduce risk, and support measurable stability over time.', icon: Heart },
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

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Care Built on Professional Responsibility and Personal Commitment
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
            THE PACIFIC HOMECARE provides structured, dependable in-home care designed to support safety, stability, and dignity for individuals and the families who rely on us.
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

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">WHO WE ARE</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">THE PACIFIC HOMECARE is a residential healthcare provider focused on delivering consistent, high-quality in-home care for individuals who require daily support.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">We work with families navigating:</p>
          <ul className="space-y-2 mb-6">
            {['Recovery after hospital discharge', 'Ongoing health conditions', 'Age-related decline', 'Increasing care needs at home'].map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-700 text-lg"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" /> {item}</li>
            ))}
          </ul>
          <p className="text-lg text-slate-600 leading-relaxed">Our role is simple but critical: to bring clarity, structure, and reliable care into situations that often feel uncertain.</p>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-20">What Makes Our Approach Different</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {differentiators.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
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
          <h2 className="text-4xl font-bold text-slate-900 mb-12">WHO WE SUPPORT</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our services are designed for individuals who:</h3>
              <ul className="space-y-3">
                {weSupport.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 leading-relaxed"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">We also support families who are:</h3>
              <ul className="space-y-3">
                {familySupport.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 leading-relaxed"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment + Founder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Commitment to Care</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">We approach every care situation with:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Consistency', desc: 'care delivered reliably, without gaps' },
              { label: 'Respect', desc: 'preserving dignity in every interaction' },
              { label: 'Clarity', desc: 'clear communication and expectations' },
              { label: 'Accountability', desc: 'responsibility in how care is delivered' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3 p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700"><span className="font-bold">{label}</span> — {desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl">
            Because in-home care is not just about assistance. It's about maintaining stability, safety, and quality of life.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section id="founder" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-500/15 transition-all duration-500">
                <img
                  src={imgProfile}
                  alt="Blessing Okeke – Founder, THE PACIFIC HOMECARE"
                  className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/30">
                    <p className="text-white font-bold text-lg">Blessing Okeke</p>
                    <p className="text-blue-200 text-sm">Founder, THE PACIFIC HOMECARE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Founder Profile</p>
              <h2 className="text-4xl font-bold text-slate-900">Blessing Okeke</h2>
              <p className="text-lg text-slate-700 leading-relaxed">THE PACIFIC HOMECARE is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.</p>
              <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl italic">
                Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6">When care becomes uncertain, having the right support changes everything.</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">We're here to provide clarity, structure, and dependable care—when it matters most.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" /> Call Now
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
