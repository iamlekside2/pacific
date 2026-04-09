import { useState } from 'react'
import { Send, Clock } from 'lucide-react'

const careForOptions = ['Parent', 'Spouse', 'Self', 'Other']
const ageOptions = ['Under 50', '50–64', '65–74', '75–84', '85+']
const situationOptions = [
  'Recent hospital discharge',
  'Difficulty with walking',
  'Frequent falls or fall risk',
  'Needs help with bathing/dressing',
  'Medication concerns',
  'Memory issues or confusion',
  'Caregiver overwhelmed',
  'Ongoing illness/recovery',
]
const urgencyOptions = [
  { value: 'immediate', label: 'ASAP (24–48 hours)' },
  { value: 'few_days', label: 'Within a few days' },
  { value: 'weeks', label: 'Within 1–2 weeks' },
  { value: 'exploring', label: 'Just exploring' },
]

function RadioGroup({ name, options, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map(opt => {
        const value = typeof opt === 'string' ? opt : opt.value
        const label = typeof opt === 'string' ? opt : opt.label
        return (
          <label key={value} className="cursor-pointer">
            <input type="radio" name={name} value={value} checked={selected === value} onChange={() => onChange(value)} className="sr-only peer" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-slate-200 peer-checked:border-accent peer-checked:bg-blue-50 peer-checked:text-primary transition-all">
              {name === 'urgency' && <Clock className="w-4 h-4" />}
              <span className="text-sm font-medium">{label}</span>
            </div>
          </label>
        )
      })}
    </div>
  )
}

export default function ConsultationForm() {
  const [careFor, setCareFor] = useState('')
  const [age, setAge] = useState('')
  const [urgency, setUrgency] = useState('')
  const [situations, setSituations] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const toggleSituation = (s) => {
    setSituations(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="form" className="py-24 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-3">Thank You!</h2>
            <p className="text-slate-600 text-lg">We've received your request. A care coordinator will review your information and reach out shortly.</p>
            <p className="text-slate-600 mt-4">If you need immediate assistance, call <a href="tel:+14434608684" className="text-accent font-semibold">+1 (443) 460-8684</a></p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-24 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-3">Care Consultation Request</h2>
            <p className="text-slate-600">Tell us what's going on and we'll help you understand the next step.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Who is this care for?</label>
              <RadioGroup name="careFor" options={careForOptions} selected={careFor} onChange={setCareFor} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Age Range</label>
              <RadioGroup name="age" options={ageOptions} selected={age} onChange={setAge} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">What's Happening Right Now? (Select all that apply)</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {situationOptions.map(s => (
                  <label key={s} className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${situations.includes(s) ? 'border-accent bg-blue-50' : 'border-slate-200 hover:border-accent'}`}>
                    <input type="checkbox" checked={situations.includes(s)} onChange={() => toggleSituation(s)} className="w-4 h-4 text-accent rounded border-slate-300 focus:ring-accent" />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Level of Urgency</label>
              <RadioGroup name="urgency" options={urgencyOptions} selected={urgency} onChange={setUrgency} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Briefly describe the situation (optional)</label>
              <textarea rows={4} placeholder="Anything you share helps us better understand how to support you..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 focus:outline-none resize-none transition-colors" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 focus:outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Email Address (optional)</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 focus:outline-none transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Location</label>
              <input type="text" placeholder="City / ZIP Code" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 focus:outline-none transition-colors" />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl">
              <Send className="w-5 h-5" /> Submit Request
            </button>

            <p className="text-xs text-slate-500 text-center leading-relaxed">
              By submitting this form, you agree to be contacted by Pacific Home Healthcare regarding your request. Your information will be kept confidential and used only to respond to your inquiry and coordinate care.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
