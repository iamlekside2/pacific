import { FileText } from 'lucide-react'

const faqs = [
  { q: 'How quickly can care start?', a: 'Care can typically begin within 24 to 48 hours after assessment.' },
  { q: 'What type of patients do you support?', a: 'We assist individuals who need help with daily living, recovery, mobility, and ongoing care.' },
  { q: 'Is care available 24 hours?', a: 'Yes, services are available 24/7 based on your needs.' },
  { q: 'How do I know what level of care is needed?', a: 'A consultation helps determine the appropriate care plan for your specific situation.' },
]

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Common Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-accent transition-colors">
              <h3 className="text-lg font-bold text-primary mb-2 flex items-start gap-2">
                <FileText className="w-5 h-5 flex-shrink-0 mt-1" />
                {q}
              </h3>
              <p className="text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
