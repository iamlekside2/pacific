import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft, Mail, Phone } from 'lucide-react'
import imgFaq from '../assets/images/faq.jpg'

const sections = [
  {
    heading: '1. Introduction',
    body: [
      'Pacific Homecare ("we," "our," "us") is committed to protecting the privacy, confidentiality, and security of personal information entrusted to us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or engage our home care services.',
      'By using our website or submitting your information, you agree to the practices described in this policy.',
      'For all inquiries regarding this Privacy Policy, please contact us via our official Contact Page.',
    ],
  },
  {
    heading: '2. Information We Collect',
    body: ['We may collect the following types of information:'],
    subsections: [
      {
        sub: 'a. Personal Information',
        list: [
          'Full name',
          'Phone number',
          'Email address',
          'Physical address',
          'Care recipient details (age, condition, care needs)',
          'Emergency contact information',
        ],
      },
      {
        sub: 'b. Health & Care Information (when voluntarily provided)',
        list: [
          'Medical conditions relevant to care planning',
          'Medication and care requirements',
          'Mobility, cognitive, or daily living support needs',
        ],
      },
      {
        sub: 'c. Website & Technical Data',
        list: [
          'IP address',
          'Browser type',
          'Device information',
          'Pages visited and time spent on site',
          'Cookies and analytics data',
        ],
      },
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: ['We use collected information strictly to:'],
    list: [
      'Respond to inquiries and provide consultations',
      'Develop and deliver personalized care plans',
      'Coordinate home care services',
      'Improve website performance and user experience',
      'Communicate important updates related to services',
      'Ensure safety, compliance, and service quality',
    ],
    bodyAfter: ['We do not sell or rent personal information to third parties.'],
  },
  {
    heading: '4. Sharing of Information',
    body: ['We may share limited information only when necessary:'],
    list: [
      'With trained caregivers involved in your care',
      'With healthcare professionals involved in coordination (if applicable)',
      'With service providers who support operations (e.g., scheduling systems, secure communications)',
      'When required by law, regulation, or legal process',
    ],
    bodyAfter: ['All partners and service providers have responsibility to maintain confidentiality.'],
  },
  {
    heading: '5. Data Security',
    body: ['We implement appropriate safeguards to protect your personal information, including:'],
    list: [
      'Secure servers and encrypted communication tools',
      'Restricted internal access based on job role',
      'Confidential handling of health-related information',
      'Regular system monitoring and updates',
    ],
    bodyAfter: ['However, no digital transmission is completely secure, and we cannot guarantee absolute security.'],
  },
  {
    heading: '6. Cookies & Tracking Technologies',
    body: ['Our website may use cookies to:'],
    list: [
      'Improve site performance',
      'Understand user behavior',
      'Enhance user experience',
    ],
    bodyAfter: ['You may disable cookies in your browser settings, though some website features may be affected.'],
  },
  {
    heading: '7. Your Rights',
    body: ['Depending on your location, you may have rights to:'],
    list: [
      'Access your personal data',
      'Request corrections or updates',
      'Request deletion of certain information',
      'Withdraw consent where applicable',
    ],
    bodyAfter: ['To exercise these rights, please contact us via our Contact Page.'],
  },
  {
    heading: '8. Data Retention',
    body: ['We retain personal and care-related data only as long as necessary to:'],
    list: [
      'Provide services',
      'Comply with legal and regulatory obligations',
      'Resolve disputes and maintain records',
    ],
  },
  {
    heading: '9. Children\'s Privacy',
    body: ['Our services are intended for adults and caregivers. We do not knowingly collect information from individuals under 18 without appropriate guardian involvement.'],
  },
  {
    heading: '10. Changes to This Policy',
    body: ['We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.'],
  },
  {
    heading: '11. Contact Us',
    body: ['For any privacy-related concerns or questions, please contact us via our Contact Page.'],
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — THE PACIFIC HOMECARE'
  }, [])

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgFaq} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full mb-5">
            <Shield className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">Legal</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">Privacy Policy</h1>
          <div className="flex flex-wrap gap-6 text-sm text-blue-100/80">
            <span><span className="font-semibold">Effective Date:</span> April 13, 2026</span>
            <span><span className="font-semibold">Last Updated:</span> April 13, 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{s.heading}</h2>
              {s.body && s.body.map((p, j) => (
                <p key={j} className="text-base text-slate-700 leading-[1.8] mb-4">{p}</p>
              ))}
              {s.subsections && s.subsections.map((sub, k) => (
                <div key={k} className="mb-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{sub.sub}</h3>
                  <ul className="space-y-1.5 ml-6">
                    {sub.list.map(item => (
                      <li key={item} className="text-slate-700 list-disc">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {s.list && (
                <ul className="space-y-1.5 ml-6 mb-4">
                  {s.list.map(item => (
                    <li key={item} className="text-slate-700 list-disc">{item}</li>
                  ))}
                </ul>
              )}
              {s.bodyAfter && s.bodyAfter.map((p, j) => (
                <p key={j} className="text-base text-slate-700 leading-[1.8] mb-4">{p}</p>
              ))}
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Questions About This Policy?</h3>
            <p className="text-slate-700 mb-5">For any privacy-related concerns, reach out to us through the contact methods below.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                <Mail className="w-4 h-4" /> Contact Us
              </Link>
              <a href="tel:+14435896889" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                <Phone className="w-4 h-4" /> Call +1 (443) 589-6889
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
