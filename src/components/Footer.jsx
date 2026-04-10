import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Pacific Home Healthcare" className="h-10 w-auto brightness-0 invert mb-6" />
            <p className="text-white/70 text-sm mb-6 leading-[1.7]">
              Professional in-home healthcare across Maryland, delivered with consistency, compassion, and clinical expertise.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14434608684" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +1 (443) 460-8684
              </a>
              <a href="mailto:info@pacifichomehealthcare.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@pacifichomehealthcare.com
              </a>
              <span className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" /> 403 W Pennsylvania Ave, Towson, MD 21204
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/about#founder" className="hover:text-white transition-colors">Founder</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Medication Management</li>
              <li>Mobility Assistance</li>
              <li>Personal Care</li>
              <li>Cognitive Support</li>
              <li>Companionship</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Towson, MD</li>
              <li>Baltimore County</li>
              <li>Surrounding Maryland</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[13px]">&copy; 2026 Pacific Home Healthcare. All rights reserved.</p>
          <div className="flex gap-6 text-[13px]">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
