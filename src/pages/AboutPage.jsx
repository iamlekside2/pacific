import { Phone, CheckCircle, Shield, Clock, Users, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const differentiators = [
  {
    title: 'Care That Is Structured, Not Improvised',
    desc: 'Inconsistent care leads to setbacks. Our services are delivered through clear routines, defined responsibilities, and consistent execution; so nothing important is missed.',
    icon: Shield,
  },
  {
    title: 'Responsiveness When It Matters Most',
    desc: "Care needs don't follow a schedule. We remain accessible and responsive, ensuring families are not left waiting or guessing when situations change.",
    icon: Clock,
  },
  {
    title: 'Personalized Based on Real Needs',
    desc: 'No two care situations are the same. We assess actual conditions and build care plans around what is truly needed—not assumptions or generic templates.',
    icon: Users,
  },
  {
    title: 'Professional Oversight and Accountability',
    desc: 'Care is delivered with clinical awareness and responsibility. Every service is structured to maintain safety, reduce risk, and support measurable stability over time.',
    icon: Heart,
  },
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

const commitment = [
  { label: 'Consistency', desc: 'care delivered reliably, without gaps' },
  { label: 'Respect', desc: 'preserving dignity in every interaction' },
  { label: 'Clarity', desc: 'clear communication and expectations' },
  { label: 'Accountability', desc: 'responsibility in how care is delivered' },
]

const whyTrust = [
  { label: 'Reliable', desc: 'delivered consistently without disruption' },
  { label: 'Responsive', desc: 'support is available when needed' },
  { label: 'Structured', desc: 'clear systems guide every aspect of care' },
  { label: 'Personalized', desc: 'tailored to real, evolving needs' },
]

export default function AboutPage() {
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
            Care Built on Professional Responsibility and Personal Commitment
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7] mb-8">
            Pacific Home Healthcare provides structured, dependable in-home care designed to support safety, stability, and dignity for individuals and the families who rely on us.
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

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">WHO WE ARE</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            Pacific Home Healthcare is a residential healthcare provider focused on delivering consistent, high-quality in-home care for individuals who require daily support.
          </p>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">We work with families navigating:</p>
          <ul className="space-y-2 mb-6">
            {['Recovery after hospital discharge', 'Ongoing health conditions', 'Age-related decline', 'Increasing care needs at home'].map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7]">
            Our role is simple but critical: to bring clarity, structure, and reliable care into situations that often feel uncertain.
          </p>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 text-center mb-16">WHAT MAKES OUR APPROACH DIFFERENT</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {differentiators.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium text-slate-900 mb-2">{title}</h3>
                  <p className="text-base text-slate-600 leading-[1.7]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-10">WHO WE SUPPORT</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[20px] font-medium text-slate-900 mb-4">Our services are designed for individuals who:</h3>
              <ul className="space-y-2">
                {weSupport.map(item => (
                  <li key={item} className="flex items-start gap-2 text-base text-slate-600 leading-[1.7]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-slate-900 mb-4">We also support families who are:</h3>
              <ul className="space-y-2">
                {familySupport.map(item => (
                  <li key={item} className="flex items-start gap-2 text-base text-slate-600 leading-[1.7]">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role in Your Care Journey */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">OUR ROLE IN YOUR CARE JOURNEY</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            When care needs increase, most families face the same challenges:
          </p>
          <ul className="space-y-2 mb-6">
            {['Unclear next steps', 'Gaps in support', 'Growing pressure and responsibility'].map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">• {item}</li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">We step in to:</p>
          <ul className="space-y-2 mb-6">
            {['Stabilize daily routines', 'Reduce immediate risks', 'Provide dependable, ongoing support'].map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7]">
            So care continues safely—and you're not managing it alone.
          </p>
        </div>
      </section>

      {/* Our Commitment to Care */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">OUR COMMITMENT TO CARE</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-6">We approach every care situation with:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {commitment.map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3 p-4 bg-light-bg rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base text-slate-700"><span className="font-medium">{label}</span> — {desc}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-600 leading-[1.7] italic">
            Because in-home care is not just about assistance. It's about maintaining stability, safety, and quality of life.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section id="founder" className="py-20 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-6">Founder Profile</p>
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=90"
            alt="Blessing Okeke"
            className="w-40 h-40 rounded-full border-4 border-primary mx-auto object-cover shadow-lg mb-6"
          />
          <h3 className="text-[32px] font-medium text-slate-900 mb-1">Blessing Okeke</h3>
          <p className="text-[13px] text-slate-500 mb-6">Founder, Pacific Home Healthcare</p>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            Pacific Home Healthcare is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.
          </p>
          <p className="text-base text-slate-600 leading-[1.7] border-l-2 border-primary pl-4 text-left italic">
            Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
          </p>
        </div>
      </section>

      {/* Why Families Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-8">WHY FAMILIES TRUST PACIFIC HOME HEALTHCARE</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-6">Families choose Pacific Home Healthcare because care is:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {whyTrust.map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3 p-4 bg-light-bg rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base text-slate-700"><span className="font-medium">{label}</span> — {desc}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-600 leading-[1.7]">
            This reduces uncertainty and creates a more stable, manageable care experience.
          </p>
        </div>
      </section>

      {/* If You're Unsure */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] font-medium text-slate-900 mb-4">IF YOU'RE UNSURE WHAT TO DO NEXT</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            You don't need to have all the answers before reaching out. A short conversation can help you:
          </p>
          <ul className="text-base text-slate-600 space-y-2 mb-8">
            <li>• Understand your current situation more clearly</li>
            <li>• Identify what level of care is needed</li>
            <li>• Determine how quickly support can begin</li>
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
          <h2 className="text-[32px] font-medium mb-4">When care becomes uncertain, having the right support changes everything.</h2>
          <p className="text-white/80 text-base mb-8 leading-[1.7]">
            We're here to provide clarity, structure, and dependable care—when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-md font-medium">
              <Phone className="w-4 h-4" /> Call Now
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
