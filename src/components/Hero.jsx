import { Phone, ArrowRight, Clock, Shield, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1 className="text-[48px] font-medium text-slate-900 leading-tight">
              When Daily Care Becomes Uncertain, We Bring <span className="gradient-text">Trusted Support</span> Home.
            </h1>

            <p className="text-base text-slate-600 leading-[1.7] max-w-lg">
              Reliable in-home healthcare for individuals who need help with medication, mobility, and personal care. Delivered with consistency and professional oversight.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2">
              {['Medication Support', 'Mobility Assistance', 'Personal Care', 'Companionship', 'Cognitive Support'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-primary text-white rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+14434608684"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 (443) 460-8684
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-[1.5px] border-primary text-primary rounded-md font-medium text-base hover:bg-primary/5 transition-all"
              >
                Get Help Understanding Your Care Options
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=1100&fit=crop&q=90"
              alt="Professional Healthcare Caregiver"
              className="w-full h-[550px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 bg-[#eef0ff] rounded-xl py-6 px-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">Care available within 24–48 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">24/7 service coverage</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-700">Serving Towson, MD & surrounding areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
