import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft, Mail, Phone } from 'lucide-react'
import imgFaq from '../assets/images/faq.jpg'

const sections = [
  {
    heading: '1. Agreement to Terms',
    body: ['By accessing this website or using services provided by Pacific Homecare ("we," "our," "us"), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our website and services.'],
  },
  {
    heading: '2. Nature of Services',
    body: ['Pacific Homecare provides non-emergency home care services, including but not limited to:'],
    list: [
      'Personal care assistance',
      'Mobility and transfer support',
      'Medication reminders and assistance',
      'Cognitive and companionship support',
      'Assistance with daily living activities',
    ],
    bodyAfter: ['We do not provide emergency medical services. In the event of a medical emergency, call emergency services immediately.'],
  },
  {
    heading: '3. Eligibility',
    body: ['Our services are intended for:'],
    list: [
      'Adults requiring home care support',
      'Family members or legal guardians arranging care',
      'Authorized representatives acting on behalf of a client',
    ],
  },
  {
    heading: '4. Care Assessments',
    body: ['Before service delivery, we may conduct a care assessment to determine appropriate support levels. Recommendations are based on information provided by clients or caregivers and may be updated as needs change.'],
  },
  {
    heading: '5. Client Responsibilities',
    body: ['Clients and/or their representatives agree to:'],
    list: [
      'Provide accurate and complete information',
      'Disclose relevant medical and care needs',
      'Ensure safe access to the care environment',
      'Communicate changes in condition promptly',
      'Treat caregivers with respect and dignity',
    ],
  },
  {
    heading: '6. Service Limitations',
    body: ['While we aim to provide consistent and reliable care, Pacific Homecare does not guarantee:'],
    list: [
      'Specific health outcomes or recovery results',
      'Availability of services without scheduling confirmation',
      'Continuous availability of a specific caregiver',
    ],
    bodyAfter: ['Care assignments may change based on availability and client needs.'],
  },
  {
    heading: '7. Payments & Fees',
    body: [
      'All service fees will be communicated during consultation or service agreement. Payment terms, schedules, and conditions will be provided prior to service commencement.',
      'Failure to make payments may result in suspension or termination of services.',
    ],
  },
  {
    heading: '8. Cancellations & Scheduling',
    list: [
      'Scheduled services require reasonable notice for cancellation',
      'Repeated short-notice cancellations may result in service adjustments',
      'Emergency situations will be handled on a case-by-case basis',
    ],
  },
  {
    heading: '9. Privacy & Confidentiality',
    body: ['We maintain strict confidentiality of client information in accordance with our Privacy Policy. By using our services, you consent to necessary information sharing for care delivery purposes.'],
  },
  {
    heading: '10. Limitation of Liability',
    body: ['To the fullest extent permitted by law:'],
    list: [
      'Pacific Homecare is not liable for indirect, incidental, or consequential damages',
      'We are not responsible for outcomes beyond our control or outside scope of care',
      'Clients assume responsibility for ensuring a safe home environment',
    ],
  },
  {
    heading: '11. Third-Party Services',
    body: ['We may use third-party platforms for scheduling, communication, or administrative support. We are not responsible for third-party service disruptions or policies.'],
  },
  {
    heading: '12. Termination of Services',
    body: ['We reserve the right to suspend or terminate services if:'],
    list: [
      'Terms are violated',
      'Safety concerns arise',
      'Non-payment occurs',
      'Care environment becomes unsafe',
    ],
  },
  {
    heading: '13. Changes to Terms',
    body: ['We may update these Terms periodically. Continued use of the website or services constitutes acceptance of updated terms.'],
  },
  {
    heading: '14. Governing Law',
    body: ['These Terms shall be governed by and interpreted under the laws of the applicable jurisdiction where services are delivered.'],
  },
  {
    heading: '15. Contact Information',
    body: ['For all inquiries regarding these Terms, please contact us via our Contact Page.'],
  },
]

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms & Conditions — THE PACIFIC HOMECARE'
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
            <FileText className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">Legal</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">Terms & Conditions</h1>
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
            <h3 className="text-xl font-bold text-slate-900 mb-3">Have Questions About These Terms?</h3>
            <p className="text-slate-700 mb-5">For all inquiries regarding these Terms, reach out to us through the contact methods below.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                <Mail className="w-4 h-4" /> Contact Us
              </Link>
              <a href="tel:+14434608684" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                <Phone className="w-4 h-4" /> Call +1 (443) 460-8684
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
