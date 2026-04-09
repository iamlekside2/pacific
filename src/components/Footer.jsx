import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-xl">P</div>
              <div><p className="text-sm font-bold">Pacific</p><p className="text-xs text-white/80">Home Healthcare</p></div>
            </div>
            <p className="text-white/80 text-sm mb-6">Professional in-home healthcare across Maryland, delivered with consistency, compassion, and clinical expertise.</p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14434608684" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +1 (443) 460-8684
              </a>
              <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@pacifichomehealthcare.com
              </a>
              <span className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" /> 403 W Pennsylvania Ave, Towson, MD
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[{label: 'Home', id: '#home'}, {label: 'Services', id: '#services'}, {label: 'Resources', id: '#faq'}, {label: 'About', id: '#about'}].map(({label, id}) => (
                <li key={id}><a href={id} onClick={e => scrollTo(e, id)} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Medication Management</li>
              <li>Mobility Assistance</li>
              <li>Personal Care</li>
              <li>Cognitive Support</li>
              <li>Companionship</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Towson, MD</li>
              <li>Baltimore County</li>
              <li>Surrounding Maryland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; 2026 Pacific Home Healthcare. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
