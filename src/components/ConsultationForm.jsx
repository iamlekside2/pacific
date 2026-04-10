import { useState } from 'react'
import { Send, Check, Phone, Mail, MapPin } from 'lucide-react'

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="form" className="py-20 bg-[#eef0ff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-[32px] font-medium text-slate-900 mb-3">Thank You!</h2>
            <p className="text-base text-slate-600 leading-[1.7] mb-4">
              We've received your request. A care coordinator will review your information and reach out shortly to discuss your situation and next steps.
            </p>
            <p className="text-slate-600">
              If you need immediate assistance, you can call:{' '}
              <a href="tel:+14434608684" className="text-primary font-medium">+1 (443) 460-8684</a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-20 bg-[#eef0ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column — Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[32px] font-medium text-slate-900 mb-4">Care Consultation Request</h2>
              <p className="text-base text-slate-600 leading-[1.7]">
                Tell us what's going on and we'll help you understand the next step. A short consultation helps clarify what level of care is needed and how quickly support can begin.
              </p>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80"
              alt="Caregiver helping patient"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+14434608684" className="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-base font-medium">+1 (443) 460-8684</span>
              </a>
              <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-base">info@pacifichomehealthcare.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base">403 W Pennsylvania Ave, Towson, MD 21204</span>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Care For & Age */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Who is this care for?</label>
                  <select required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-slate-900">
                    <option>-- Select --</option>
                    <option>Parent</option>
                    <option>Spouse</option>
                    <option>Self</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age Range</label>
                  <select required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-slate-900">
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
                <label className="block text-sm font-medium text-slate-700 mb-2">What's Happening Right Now? (Select all that apply)</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Recent hospital discharge',
                    'Difficulty with walking or movement',
                    'Frequent falls or fall risk',
                    'Needs help with bathing, dressing, or toileting',
                    'Medication management concerns',
                    'Memory issues or confusion',
                    'Caregiver support is becoming overwhelming',
                    'Ongoing illness or recovery support needed',
                    'Not sure',
                  ].map(option => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-md border border-gray-300 cursor-pointer hover:border-primary/40 transition-all text-sm">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">When is care needed?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { value: 'immediate', label: 'As soon as possible (within 24–48 hours)' },
                    { value: 'few_days', label: 'Within a few days' },
                    { value: 'weeks', label: 'Within the next 1–2 weeks' },
                    { value: 'exploring', label: 'Just exploring options' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-3 p-3 rounded-md border border-gray-300 cursor-pointer hover:border-primary/40 transition-all text-sm">
                      <input type="radio" name="urgency" value={opt.value} className="w-4 h-4 border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-slate-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Briefly describe the situation (optional)</label>
                <textarea
                  rows={3}
                  placeholder="Anything you share helps us better understand how to support you."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none transition-colors"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location (City / ZIP Code)</label>
                <input
                  type="text"
                  placeholder="Where will care be provided?"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Preferred for faster response"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address (optional)</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium text-base shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/40 transition-all"
              >
                <Send className="w-5 h-5" /> Submit Request
              </button>

              {/* Privacy */}
              <p className="text-[13px] text-slate-500 leading-relaxed">
                By submitting this form, you agree to be contacted by Pacific Home Healthcare regarding your request. This may include phone calls, text messages, or email using the information you provided. Your information will be kept confidential and used only to respond to your inquiry and coordinate care.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
