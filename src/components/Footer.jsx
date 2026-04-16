import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {

  return (
    <footer id="contact" className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900 text-white py-16 relative overflow-hidden border-t border-white/10">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <img src={logo} alt="THE PACIFIC HOMECARE" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 text-sm mb-6">Professional in-home healthcare across Maryland, delivered with consistency, compassion, and clinical expertise.</p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14434608684" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/link">
                <Phone className="w-4 h-4 group-hover/link:scale-110 transition-transform" /> +1 (443) 589-6889
              </a>
              <a href="mailto:info@thepacifichomecare.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/link">
                <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform" /> info@thepacifichomecare.com
              </a>
              <span className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" /> 403 W Pennsylvania Ave, Towson, MD
              </span>
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <h4 className="font-bold mb-6 group-hover:text-blue-100 transition-colors">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[{label: 'Home', to: '/'}, {label: 'Services', to: '/services'}, {label: 'About', to: '/about'}, {label: 'Contact', to: '/contact'}].map(({label, to}) => (
                <li key={to}><Link to={to} className="hover:text-white hover:translate-x-1 transition-all inline-block">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <h4 className="font-bold mb-6 group-hover:text-blue-100 transition-colors">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Medication Management</li>
              <li>Mobility Assistance</li>
              <li>Personal Care</li>
              <li>Cognitive Support</li>
              <li>Companionship</li>
            </ul>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <h4 className="font-bold mb-6 group-hover:text-blue-100 transition-colors">Service Areas</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Baltimore County</li>
              <li>Baltimore City</li>
              <li>Montgomery County</li>
              <li>Prince George's County</li>
              <li>Anne Arundel County</li>
              <li>Howard County</li>
              <li>Harford County</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
          <p className="text-white/60 text-sm">&copy; 2026 THE PACIFIC HOMECARE. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors hover:scale-110">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-white/60 hover:text-white transition-colors hover:scale-110">Terms & Conditions</Link>
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
    </footer>
  )
}
