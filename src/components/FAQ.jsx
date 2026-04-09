import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can care start?',
    answer: 'Care can typically begin within 24 to 48 hours after assessment. We understand that time is critical in healthcare situations, so we prioritize swift response and implementation.',
  },
  {
    question: 'What type of patients do you support?',
    answer: 'We assist individuals who need help with daily living, recovery from illness or injury, mobility support, medication management, and ongoing care. This includes post-hospital discharge patients, individuals with mobility challenges, and those needing cognitive or personal care support.',
  },
  {
    question: 'Is care available 24 hours?',
    answer: 'Yes, services are available 24/7 based on your needs. Whether you need morning assistance, evening support, or around-the-clock care, we can customize a schedule that works for your situation.',
  },
  {
    question: 'How do I know what level of care is needed?',
    answer: 'A consultation with our care coordinator helps determine the appropriate care plan for your specific situation. We assess your needs, medical history, daily living requirements, and support goals to create a personalized plan.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide in-home healthcare services in Towson, Baltimore County, and surrounding Maryland communities. Contact us to confirm service availability in your specific area.',
  },
  {
    question: 'How are your caregivers trained and certified?',
    answer: 'All our caregivers are professionally trained and licensed. We maintain strict standards for qualifications, background checks, and ongoing professional development to ensure the highest quality of care.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
            Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">Everything you need to know about our services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-left font-semibold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Speak with our care coordinators for personalized guidance</p>
          <a
            href="tel:+14434608684"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
          >
            Call Now: +1 (443) 460-8684
          </a>
        </div>
      </div>
    </section>
  )
}
