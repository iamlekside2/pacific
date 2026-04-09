import { Phone, MessageCircle, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#form' },
]

const servicesList = ['Medication Support', 'Mobility Assistance', 'Personal Care', 'Cognitive Support']
const areas = ['Towson, MD', 'Baltimore County', 'Surrounding Maryland']

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">Pacific Home Healthcare</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing dependable, patient-centered in-home care across Maryland. Care is structured to be consistent, responsive, and reliable.
            </p>
            <div className="space-y-3">
              <a href="tel:+14434608684" className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +1 (443) 460-8684
              </a>
              <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" /> info@pacifichomehealthcare.com
              </a>
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" /> 403 W Pennsylvania Avenue, Towson, MD 21204
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={e => scrollTo(e, href)} className="text-slate-400 hover:text-accent transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {servicesList.map(s => (
                <li key={s}><span className="text-slate-400">{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-3">
              {areas.map(a => (
                <li key={a}><span className="text-slate-400">{a}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; 2026 Pacific Home Healthcare. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
