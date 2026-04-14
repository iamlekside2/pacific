import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Shield, Send, Check, CheckCircle } from 'lucide-react'
import img67 from '../assets/images/67.jpg'
import img86 from '../assets/images/86.jpg'

const whenToReach = [
  'Care needs suddenly increase',
  'A loved one is being discharged from the hospital',
  'Daily routines are becoming difficult to manage',
  'Safety concerns are starting to appear',
  'Caregiving is becoming overwhelming',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get the Support You Need—Without Delay
          </h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're dealing with an urgent care situation or trying to understand your options, we're here to help you take the next step with clarity.
          </p>

          {/* Trust Badges */}
          <div className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 bg-white/10 backdrop-blur-sm rounded-2xl py-5 px-8 border border-white/20">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-semibold text-white/90">Care available within 24–48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-semibold text-white/90">24/7 service coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-semibold text-white/90">Serving Towson, MD & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* When to Reach Out */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">When to Reach Out</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">You don't need to wait until things become critical. Most families contact us when:</p>
              <ul className="space-y-3 mb-6">
                {whenToReach.map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-lg"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" /> {item}</li>
                ))}
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6">If any of these sound familiar, it's the right time to speak with someone.</p>
            </div>
            <div className="hidden lg:block">
              <img
                src={img67}
                alt="Healthcare professional with patient"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="form" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Thank You!</h2>
              <p className="text-slate-700 text-lg mb-4">We've received your request. A care coordinator will review your information and reach out shortly to discuss your situation and next steps.</p>
              <p className="text-slate-600">If you need immediate assistance, you can call: <a href="tel:+14434608684" className="text-primary font-bold">+1 (443) 460-8684</a></p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-3">Care Consultation Request</h2>
                <p className="text-slate-600 text-lg">Tell us what's going on—we'll help you understand the next step.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
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

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">What's Happening? (Select all that apply)</label>
                  <div className="grid sm:grid-cols-2 gap-3">
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
                      <label key={option} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary" />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">When is care needed?</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { value: 'immediate', label: 'As soon as possible (within 24–48 hours)' },
                      { value: 'few_days', label: 'Within a few days' },
                      { value: 'weeks', label: 'Within the next 1–2 weeks' },
                      { value: 'exploring', label: 'Just exploring options' },
                    ].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-primary/30 transition-all">
                        <input type="radio" name="urgency" value={opt.value} className="w-4 h-4 border-slate-300 text-primary" />
                        <span className="text-sm text-slate-700">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Briefly describe the situation (optional)</label>
                  <textarea rows={4} placeholder="Anything you share helps us better understand how to support you." className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none resize-none transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Location (City / ZIP Code)</label>
                  <input type="text" placeholder="Where will care be provided?" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" placeholder="Preferred for faster response" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Email Address (optional)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors" />
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                  <Send className="w-5 h-5" /> Submit Request
                </button>

                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  By submitting this form, you agree to be contacted by THE PACIFIC HOMECARE regarding your request. This may include phone calls, text messages, or email using the information you provided. Your information will be kept confidential and used only to respond to your inquiry and coordinate care.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">What Happens After You Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { num: '1', title: 'Initial Conversation', desc: 'We listen and understand your situation in detail.' },
              { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of support based on actual needs.' },
              { num: '3', title: 'Care Begins', desc: "Services are typically implemented within 24–48 hours. You'll have clarity on what to expect at every step." },
            ].map(step => (
              <div key={step.num}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-blue-500/40 border-4 border-white mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Location</h2>
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">THE PACIFIC HOMECARE</h3>
                <p className="text-lg text-slate-600">403 W Pennsylvania Avenue<br />Towson, MD 21204</p>
              </div>
              <a
                href="https://maps.google.com/?q=403+W+Pennsylvania+Avenue,+Towson,+MD+21204"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={img86}
                  alt="THE PACIFIC HOMECARE location"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Visit Us</p>
                      <p className="font-bold text-slate-900">Get Directions →</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Contact Details</h2>
              <div className="space-y-6 mb-8">
                <a href="tel:+14434608684" className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-lg font-bold text-slate-900">+1 (443) 460-8684</p>
                  </div>
                </a>
                <a href="mailto:info@thepacifichomecare.com" className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-lg font-bold text-slate-900">info@thepacifichomecare.com</p>
                  </div>
                </a>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">Reaching out does not commit you to anything. It simply gives you clarity on:</p>
                <ul className="space-y-2">
                  {['What your situation requires', 'What options are available', 'How quickly support can begin'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> {item}</li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4 italic">Sometimes a short conversation is all it takes to make things clearer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6">If care needs are increasing or becoming uncertain, don't wait.</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">Early support prevents complications and makes care more manageable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" /> Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
