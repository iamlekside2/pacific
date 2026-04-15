import { Phone, CheckCircle, Shield, Clock, Users, Heart, ArrowRight } from 'lucide-react'
import imgProfile from '../assets/images/profile.jpg'
import img82 from '../assets/images/82.jpg'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
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

            {/* Right: Image */}
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Community</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Who We Support</h2>
            <p className="text-lg text-slate-600">Whether it's individual care or family relief — we're built to serve both.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Individuals Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border-2 border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">For Individuals</p>
                  <h3 className="text-xl font-bold text-slate-900">Our services are designed for individuals who:</h3>
                </div>
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

            {/* Families Card */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-slate-100">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/30">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">For Families</p>
                  <h3 className="text-xl font-bold text-slate-900">We also support families who are:</h3>
                </div>
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
