import { Phone, ArrowRight, Search, Clock, Clipboard } from 'lucide-react'
import img69 from '../assets/images/69.jpg'
import { useFormModal } from '../context/FormModalContext'

export default function CTA() {
  const { openModal } = useFormModal()

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Buttons */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              You Don't Have to Figure This Out Alone
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Most families delay care. Not by choice, but because the next step isn't clear. A short consultation helps you understand:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Search, text: 'What level of care is actually needed' },
                { icon: Clock, text: 'How quickly support can begin' },
                { icon: Clipboard, text: 'What the process looks like from start to care delivery' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-slate-700 text-lg pt-1.5">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 text-lg mb-8 font-medium">Speak with a care coordinator today.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+14435896889"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block">
            <img
              src={img69}
              alt="Caregiver with patient"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
