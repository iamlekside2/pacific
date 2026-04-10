import { Pill, Users, Bath, Brain, Heart, Phone } from 'lucide-react'

const services = [
  {
    icon: Pill,
    title: 'Medication Administration',
    desc: 'Accurate, timely medication support to prevent missed doses and health complications.',
    best: 'Patients with complex prescriptions or post-hospital care needs.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=300&fit=crop&q=80',
  },
  {
    icon: Users,
    title: 'Ambulatory & Transfer Assistance',
    desc: 'Safe movement support to reduce fall risk and improve mobility confidence.',
    best: 'Individuals with weakness, instability, or recent injury.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=300&fit=crop&q=80',
  },
  {
    icon: Bath,
    title: 'Personal Care (Bathing, Toileting, Incontinence Support)',
    desc: 'Dignified assistance with essential daily routines.',
    best: 'Individuals who require help maintaining hygiene and daily comfort.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop&q=80',
  },
  {
    icon: Brain,
    title: 'Cognitive Stimulation',
    desc: 'Structured engagement to support mental clarity and emotional stability.',
    best: 'Patients experiencing memory decline or reduced cognitive activity.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop&q=80',
  },
  {
    icon: Heart,
    title: 'Companionship Support',
    desc: 'Consistent presence to reduce isolation and improve overall well-being.',
    best: 'Individuals who spend long periods alone or require social support.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=300&fit=crop&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-medium text-slate-900 mb-4">
            IN-HOME CARE SUPPORT DESIGNED FOR DAILY REALITY
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-[1.7]">
            Comprehensive services tailored to maintain dignity, safety, and independence at home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(({ icon: Icon, title, desc, best, image }) => (
            <div
              key={title}
              className="group bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-l-[3px] hover:border-l-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 border border-blue-300 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[20px] font-medium text-slate-900 mb-3">{title}</h3>
                <p className="text-base text-slate-600 leading-[1.7] mb-4">{desc}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-[13px] rounded-full font-medium">
                  Best for: {best}
                </span>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="bg-primary rounded-xl p-8 text-white flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl font-medium mb-3">Speak with a care coordinator</h3>
              <p className="text-white/90 mb-8 leading-[1.7]">Determine the right level of support for your unique situation.</p>
            </div>
            <a
              href="tel:+14434608684"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now +1 (443) 460-8684
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-light-bg rounded-xl border border-blue-100">
          <p className="text-slate-700 text-base leading-[1.7]">
            Speak with a care coordinator to determine the right level of support.{' '}
            <a href="tel:+14434608684" className="text-primary font-medium hover:underline">
              Call Now +1 (443) 460-8684
            </a>
            {' | '}
            <a href="#form" className="text-primary font-medium hover:underline">
              Send a Support Request
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
