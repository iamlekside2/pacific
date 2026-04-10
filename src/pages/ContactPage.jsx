import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Shield, Send, Check, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      <section className="relative py-20 bg-light-bg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=600&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[48px] font-medium text-slate-900 mb-4">
            Get the Support You Need—Without Delay
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7] mb-8">
            Whether you're dealing with an urgent care situation or trying to understand your options, we're here to help you take the next step with clarity.
          </p>

          {/* Trust Badges */}
          <div className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 bg-white rounded-xl py-5 px-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">Care available within 24–48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">24/7 service coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">Serving Towson, MD & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* When to Reach Out */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium text-slate-900 mb-6">WHEN TO REACH OUT</h2>
          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            You don't need to wait until things become critical. Most families contact us when:
          </p>
          <ul className="space-y-2 mb-6">
            {whenToReach.map(item => (
              <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-600 leading-[1.7] italic">
            If any of these sound familiar, it's the right time to speak with someone.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="form" className="py-20 bg-[#eef0ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
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
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-[32px] font-medium text-slate-900 mb-4">CARE CONSULTATION REQUEST</h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7]">
                  Tell us what's going on—we'll help you understand the next step. A short consultation helps clarify what level of care is needed and how quickly support can begin.
                </p>
              </div>

              <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Care For & Age */}
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
                      <input type="text" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" placeholder="Preferred for faster response" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address (optional)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium text-base shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                    <Send className="w-5 h-5" /> Submit Request
                  </button>

                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    By submitting this form, you agree to be contacted by Pacific Home Healthcare regarding your request. This may include phone calls, text messages, or email using the information you provided. Your information will be kept confidential and used only to respond to your inquiry and coordinate care.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] font-medium text-slate-900 mb-12">WHAT HAPPENS AFTER YOU CONTACT US</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: '1', title: 'Initial Conversation', desc: 'We listen and understand your situation in detail.' },
              { num: '2', title: 'Care Assessment', desc: 'We determine the appropriate level of support based on actual needs.' },
              { num: '3', title: 'Care Begins', desc: "Services are typically implemented within 24–48 hours. You'll have clarity on what to expect at every step." },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-medium text-lg mx-auto mb-4 shadow-lg shadow-primary/20">
                  {step.num}
                </div>
                <h3 className="text-[20px] font-medium text-slate-900 mb-2">{step.title}</h3>
                <p className="text-base text-slate-600 leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-[32px] font-medium text-slate-900 mb-6">OUR LOCATION</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-6">
                <h3 className="text-[20px] font-medium text-slate-900 mb-2">Pacific Home Healthcare</h3>
                <p className="text-base text-slate-600 leading-[1.7]">403 W Pennsylvania Avenue<br />Towson, MD 21204</p>
              </div>
              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <p className="text-slate-500 text-sm">Map — Towson, MD 21204</p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-[32px] font-medium text-slate-900 mb-6">CONTACT DETAILS</h2>
              <div className="space-y-6">
                <a href="tel:+14434608684" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[13px] text-slate-500">Phone</p>
                    <p className="text-base font-medium text-slate-900">+1 (443) 460-8684</p>
                  </div>
                </a>
                <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[13px] text-slate-500">Email</p>
                    <p className="text-base font-medium text-slate-900">info@pacifichomehealthcare.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-base text-slate-600 leading-[1.7] mb-4">
                  Reaching out does not commit you to anything. It simply gives you clarity on:
                </p>
                <ul className="space-y-2">
                  {['What your situation requires', 'What options are available', 'How quickly support can begin'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-base text-slate-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base text-slate-600 leading-[1.7] mt-4 italic">
                  Sometimes a short conversation is all it takes to make things clearer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-medium mb-4">If care needs are increasing or becoming uncertain, don't wait.</h2>
          <p className="text-white/80 text-base mb-8 leading-[1.7]">
            Early support prevents complications and makes care more manageable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-md font-medium">
              <Phone className="w-4 h-4" /> Call Now for Immediate Assistance +1 (443) 460-8684
            </a>
            <Link to="/contact#form" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
              Request Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
