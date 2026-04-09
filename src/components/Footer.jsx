import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <p className="text-sm font-bold">Pacific</p>
                <p className="text-xs text-slate-400">Home Healthcare</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing professional in-home healthcare across Maryland with consistency, compassion, and clinical expertise.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14434608684" className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +1 (443) 460-8684
              </a>
              <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@pacifichomehealthcare.com
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" /> 403 W Pennsylvania Ave, Towson, MD 21204
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: '#home' },
                { label: 'Services', id: '#services' },
                { label: 'Resources', id: '#faq' },
                { label: 'About', id: '#about' },
                { label: 'Contact', id: '#contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a href={id} onClick={e => scrollTo(e, id)} className="text-slate-400 hover:text-accent transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Medication Administration</li>
              <li>Mobility Assistance</li>
              <li>Personal Care</li>
              <li>Cognitive Support</li>
              <li>Companionship</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Towson, MD</li>
              <li>Baltimore County</li>
              <li>Surrounding Maryland</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; 2026 Pacific Home Healthcare. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
