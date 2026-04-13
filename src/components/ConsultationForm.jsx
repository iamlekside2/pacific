import { useState } from 'react'
import { Send, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import imgConsultation from '../assets/images/consultation.png'
import img68 from '../assets/images/68.png'

export default function ConsultationForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="form" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Thank You!</h2>
            <p className="text-slate-700 text-lg mb-4">We've received your consultation request. A care coordinator will review your information and reach out within 24 hours.</p>
            <p className="text-slate-600">For immediate assistance, call <a href="tel:+14434608684" className="text-primary font-bold">+1 (443) 460-8684</a></p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Image + info */}
          <div className="lg:col-span-2 hidden lg:block space-y-6">
            <img
              src={imgConsultation}
              alt="Caregiver helping patient"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={img68}
              alt="Home healthcare support"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Multi-step Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
              {/* Header */}
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Care Consultation Request</h2>
                <p className="text-slate-500 text-sm">Step {step} of 2</p>
              </div>

              {/* Step Indicator — compact bar */}
              <div className="flex gap-2 mb-6">
                <div className={`h-1 flex-1 rounded-full transition-all ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`} />
                <div className={`h-1 flex-1 rounded-full transition-all ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
              </div>

              <form onSubmit={handleSubmit}>
                {/* ─── STEP 1: Care Details ─── */}
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

                {/* ─── STEP 2: Contact Info ─── */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
