import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can care start?',
    answer: 'Care can typically begin within 24 to 48 hours after assessment.',
  },
  {
    question: 'What type of patients do you support?',
    answer: 'We assist individuals who need help with daily living, recovery, mobility, and ongoing care.',
  },
  {
    question: 'Is care available 24 hours?',
    answer: 'Yes, services are available 24/7 based on your needs.',
  },
  {
    question: 'How do I know what level of care is needed?',
    answer: 'A consultation helps determine the appropriate care plan for your specific situation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            COMMON QUESTIONS
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-slate-200 rounded-lg overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-left font-bold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200">
                  <p className="text-slate-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-12 bg-primary/5 border-l-4 border-primary rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">IF CARE IS BECOMING UNCERTAIN, IT'S TIME TO ACT</h3>
          <p className="text-slate-700 text-lg mb-8">
            Delays can lead to avoidable complications. Early support stabilizes care and reduces pressure on families.
          </p>
          <a
            href="tel:+14434608684"
            className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-dark transition-all"
          >
            Call Now for Immediate Assistance +1 (443) 460-8684
          </a>
          <a
            href="#form"
            className="inline-flex ml-4 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all"
          >
            Request Support
          </a>
        </div>
      </div>
    </section>
  )
}
