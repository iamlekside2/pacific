import { useState } from 'react'
import { Plus, Minus, Phone } from 'lucide-react'

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
    answer: 'A consultation helps determine the appropriate care plan.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ Accordion */}
          <div>
            <div className="mb-10">
              <h2 className="text-[32px] font-medium text-slate-900 mb-4">COMMON QUESTIONS</h2>
              <p className="text-base text-slate-600 leading-[1.7]">Everything you need to know about our services</p>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="pb-5 pl-4 border-l-2 border-primary ml-0">
                      <p className="text-base text-slate-600 leading-[1.7]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop&q=85"
              alt="Healthcare professional"
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-navy rounded-xl py-10 px-8 text-center text-white">
          <h3 className="text-[20px] font-medium mb-3">IF CARE IS BECOMING UNCERTAIN, IT'S TIME TO ACT</h3>
          <p className="text-white/80 text-base mb-8 max-w-2xl mx-auto leading-[1.7]">
            Delays can lead to avoidable complications. Early support stabilizes care and reduces pressure on families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-md font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Request Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
