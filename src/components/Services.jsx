import { Pill, Users, Bath, Brain, Heart, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import imgMedication from '../assets/images/medication.png'
import imgAmbulatory from '../assets/images/ambulatory.png'
import imgPersonalCare from '../assets/images/personal-care.png'
import imgCognitive from '../assets/images/cognitive.png'
import imgCompanionship from '../assets/images/companionship.png'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    desc: 'Accurate, timely medication support to prevent missed doses and health complications.',
    best: 'Best for: Patients with complex prescriptions or post-hospital care needs.',
    image: imgMedication,
  },
  {
    icon: Users,
    title: 'Ambulatory & Transfer Assistance',
    desc: 'Safe movement support to reduce fall risk and improve mobility confidence.',
    best: 'Best for: Individuals with weakness, instability, or recent injury.',
    image: imgAmbulatory,
  },
  {
    icon: Bath,
    title: 'Personal Care (Bathing, Toileting, Incontinence Support)',
    desc: 'Dignified assistance with essential daily routines.',
    best: 'Best for: Individuals who require help maintaining hygiene and daily comfort.',
    image: imgPersonalCare,
  },
  {
    icon: Brain,
    title: 'Cognitive Stimulation',
    desc: 'Structured engagement to support mental clarity and emotional stability.',
    best: 'Best for: Patients experiencing memory decline or reduced cognitive activity.',
    image: imgCognitive,
  },
  {
    icon: Heart,
    title: 'Companionship Support',
    desc: 'Consistent presence to reduce isolation and improve overall well-being.',
    best: 'Best for: Individuals who spend long periods alone or require social support.',
    image: imgCompanionship,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            In-Home Care Support Designed for Daily Reality
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive services tailored to maintain dignity, safety, and independence at home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(({ icon: Icon, title, desc, best, image }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group animate-fade-in-up hover:scale-105 hover:-translate-y-1 overflow-hidden"
              style={{animationDelay: `${0.1 + i * 0.06}s`}}
            >
              <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all">
                <Icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">{desc}</p>
              <p className="text-sm text-slate-600 pb-4 border-b border-slate-200 mb-4">{best}</p>

              <div className="pt-4">
                <a
                  href="tel:+14434608684"
                  className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors text-sm group-hover:text-blue-700"
                >
                  Learn More →
                </a>
              </div>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white flex flex-col shadow-lg shadow-blue-500/30 group animate-fade-in-up overflow-hidden" style={{animationDelay: `${0.1 + services.length * 0.06}s`}}>
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl translate-y-8 -translate-x-8" />

            {/* Icon */}
            <div className="relative w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>

            <h3 className="relative text-2xl font-bold mb-3">Speak with a care coordinator</h3>
            <p className="relative text-white/90 mb-6">Determine the right level of support for your unique situation.</p>

            {/* Quick info pills */}
            <div className="relative space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-white/90">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Care available within 24–48 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>Free consultation, no commitment</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@pacifichomehealthcare.com</span>
              </div>
            </div>

            <a
              href="tel:+14434608684"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-100 hover:scale-105 hover:-translate-y-1 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call Now +1 (443) 460-8684
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-2xl border-2 border-blue-200 animate-fade-in-up flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8" style={{animationDelay: '0.4s'}}>
          <p className="text-slate-700 text-lg text-center md:text-left">
            Speak with a care coordinator to determine the right level of support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primary-dark hover:scale-105 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Call Now +1 (443) 460-8684
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 hover:scale-105 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Send a Support Request
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
