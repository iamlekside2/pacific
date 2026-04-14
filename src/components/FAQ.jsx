import { useState } from 'react'
import imgFaq from '../assets/images/faq.jpg'
import { ChevronDown } from 'lucide-react'
import { useFormModal } from '../context/FormModalContext'

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
  const { openModal } = useFormModal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: FAQ Content */}
          <div>
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Common Questions
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
              className="border-2 border-slate-200 rounded-xl overflow-hidden transition-all hover:border-blue-400 hover:shadow-lg shadow-sm group animate-fade-in-up bg-white"
              style={{animationDelay: `${0.1 + index * 0.05}s`}}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-left font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200 animate-fade-in-up">
                  <p className="text-slate-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block">
            <img
              src={imgFaq}
              alt="Healthcare professional"
              className="w-full h-[600px] object-cover rounded-2xl shadow-xl sticky top-28"
            />
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-12 bg-gradient-to-r from-blue-50 to-blue-50/50 border-l-4 border-blue-500 rounded-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">If Care Is Becoming Uncertain, It's Time to Act</h3>
          <p className="text-slate-700 text-lg mb-8">
            Delays can lead to avoidable complications. Early support stabilizes care and reduces pressure on families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14434608684"
              className="group inline-flex px-8 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <button
              onClick={openModal}
              className="group inline-flex px-8 py-5 border-2 border-blue-500 text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all"
            >
              Request Support
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
