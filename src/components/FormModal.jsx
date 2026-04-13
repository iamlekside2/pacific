import { useState, useEffect } from 'react'
import { Send, Check, ArrowRight, ArrowLeft, X } from 'lucide-react'
import { useFormModal } from '../context/FormModalContext'

export default function FormModal() {
  const { isOpen, closeModal } = useFormModal()
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1)
        setSubmitted(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {submitted ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Thank You!</h2>
            <p className="text-slate-700 text-base mb-4 leading-relaxed">We've received your consultation request. A care coordinator will review your information and reach out within 24 hours.</p>
            <p className="text-slate-600">For immediate assistance, call <a href="tel:+14434608684" className="text-primary font-bold">+1 (443) 460-8684</a></p>
            <button
              onClick={closeModal}
              className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-5 pr-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Care Consultation Request</h2>
              <p className="text-slate-500 text-sm">Step {step} of 2</p>
            </div>

            {/* Step Indicator */}
            <div className="flex gap-2 mb-6">
              <div className={`h-1 flex-1 rounded-full transition-all ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`} />
              <div className={`h-1 flex-1 rounded-full transition-all ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Who is this care for?</label>
                      <select required className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors text-slate-900">
                        <option>-- Select --</option>
                        <option>Parent</option>
                        <option>Spouse</option>
                        <option>Self</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Age Range</label>
                      <select required className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors text-slate-900">
                        <option>-- Select --</option>
                        <option>Under 50</option>
                        <option>50–64</option>
                        <option>65–74</option>
                        <option>75–84</option>
                        <option>85+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">What's Happening? (Select all that apply)</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Recent hospital discharge',
                        'Difficulty with walking',
                        'Frequent falls or fall risk',
                        'Needs help with bathing/dressing',
                        'Medication concerns',
                        'Memory issues or confusion',
                        'Caregiver support is becoming overwhelming',
                        'Ongoing illness or recovery support needed',
                        'Not sure',
                      ].map(option => (
                        <label key={option} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                          <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-primary" />
                          <span className="text-xs text-slate-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">When is care needed?</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        { value: 'immediate', label: 'As soon as possible (24–48 hours)' },
                        { value: 'few_days', label: 'Within a few days' },
                        { value: 'weeks', label: 'Within 1–2 weeks' },
                        { value: 'exploring', label: 'Just exploring options' },
                      ].map(opt => (
                        <label key={opt.value} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                          <input type="radio" name="urgency" value={opt.value} className="w-3.5 h-3.5 border-slate-300 text-primary" />
                          <span className="text-xs text-slate-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:bg-primary-dark transition-all"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Describe your situation (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Any details help us understand your needs..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name *</label>
                      <input type="text" required className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Email (optional)</label>
                      <input type="email" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Location</label>
                      <input type="text" placeholder="City / ZIP Code" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" /> Submit Request
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    By submitting, you agree to be contacted by THE PACIFIC HOMECARE. Your information is confidential and used only for your inquiry.
                  </p>
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-modal-in { animation: modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  )
}
