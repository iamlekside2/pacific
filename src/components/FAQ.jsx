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
    <section id="faq" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            COMMON QUESTIONS
          </h2>
          <p className="text-xl text-blue-200/80">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-white/10 rounded-xl overflow-hidden transition-all hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 group animate-fade-in-up bg-slate-800/40 backdrop-blur-sm"
              style={{animationDelay: `${0.1 + index * 0.05}s`}}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/60 transition-colors"
              >
                <span className="text-left font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-800/60 border-t-2 border-white/10 animate-fade-in-up">
                  <p className="text-white/80 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-12 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-blue-500/20 border-2 border-blue-400/40 rounded-2xl backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-bold text-white mb-4">IF CARE IS BECOMING UNCERTAIN, IT'S TIME TO ACT</h3>
          <p className="text-white/80 text-lg mb-8">
            Delays can lead to avoidable complications. Early support stabilizes care and reduces pressure on families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14434608684"
              className="group inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="group inline-flex px-8 py-4 border-2 border-cyan-400/60 text-cyan-300 rounded-xl font-bold hover:bg-cyan-400/10 hover:border-cyan-300 hover:scale-105 hover:-translate-y-1 transition-all backdrop-blur-sm"
            >
              Request Support
            </a>
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
