import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function ConsultationForm() {
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop&q=85"
              alt="Caregiver helping patient"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=500&fit=crop&q=85"
              alt="Home healthcare support"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
              Next Steps
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Care Consultation Request</h2>
            <p className="text-slate-600 text-lg">Tell us what's going on and we'll help you understand the next step. A short consultation helps clarify what level of care is needed and how quickly support can begin.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Care For & Age */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Who is this care for?</label>
                <select required className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-slate-900">
                  <option>-- Select --</option>
                  <option>Parent</option>
                  <option>Spouse</option>
                  <option>Self</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Age Range</label>
                <select required className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors text-slate-900">
                  <option>-- Select --</option>
                  <option>Under 50</option>
                  <option>50–64</option>
                  <option>65–74</option>
                  <option>75–84</option>
                  <option>85+</option>
                </select>
              </div>
            </div>

            {/* Situations */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">What's Happening? (Select all that apply)</label>
              <div className="grid sm:grid-cols-2 gap-3">
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
                  <label key={option} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary" />
                    <span className="text-sm text-slate-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">When is care needed?</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { value: 'immediate', label: 'As soon as possible (24–48 hours)' },
                  { value: 'few_days', label: 'Within a few days' },
                  { value: 'weeks', label: 'Within 1–2 weeks' },
                  { value: 'exploring', label: 'Just exploring options' },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                    <input type="radio" name="urgency" value={opt.value} className="w-4 h-4 border-slate-300 text-primary" />
                    <span className="text-sm text-slate-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Describe your situation (optional)</label>
              <textarea
                rows={4}
                placeholder="Any details help us understand your needs..."
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Email (optional)</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Location</label>
                <input
                  type="text"
                  placeholder="City / ZIP Code"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="w-5 h-5" /> Submit Request
            </button>

            {/* Privacy */}
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              By submitting, you agree to be contacted by Pacific Home Healthcare. Your information is confidential and used only for your inquiry.
            </p>
          </form>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}
