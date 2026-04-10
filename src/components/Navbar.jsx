import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, path, hash) => {
    e.preventDefault()
    setMobileOpen(false)
    if (hash && location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (hash) {
      navigate('/' + hash)
    } else {
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Home', path: '/', hash: null },
    { label: 'Services', path: '/services', hash: null },
    { label: 'Resources', path: '/', hash: '#resources' },
    { label: 'About', path: '/about', hash: null },
    { label: 'Contact', path: '/contact', hash: null },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Pacific Home Healthcare" className="h-14 w-auto" />
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, path, hash }) => (
              <a
                key={label}
                href={hash || path}
                onClick={e => handleNavClick(e, path, hash)}
                className="nav-link text-slate-700 hover:text-primary font-medium text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+14434608684"
              className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="/contact"
              onClick={e => handleNavClick(e, '/contact', null)}
              className="px-6 py-3 bg-primary text-white rounded-md font-medium text-sm hover:bg-primary-dark transition-colors"
            >
              Request Support
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(({ label, path, hash }) => (
              <a
                key={label}
                href={hash || path}
                onClick={e => handleNavClick(e, path, hash)}
                className="block py-2 text-slate-700 hover:text-primary font-medium"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="tel:+14434608684"
                className="flex items-center justify-center gap-2 px-4 py-3 border-[1.5px] border-primary text-primary rounded-md font-medium"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="/contact"
                onClick={e => handleNavClick(e, '/contact', null)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-md font-medium"
              >
                Request Support
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
