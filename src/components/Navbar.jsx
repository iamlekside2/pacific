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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Pacific Home Healthcare" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, path, hash }) => (
              <a
                key={label}
                href={hash || path}
                onClick={e => handleNavClick(e, path, hash)}
                className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+14434608684"
              className="px-4 py-2 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors text-sm"
            >
              +1 (443) 460-8684
            </a>
            <a
              href="/contact"
              onClick={e => handleNavClick(e, '/contact', null)}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all shadow-md"
            >
              Get Support
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
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
            <div className="pt-4 space-y-3 border-t border-slate-200">
              <a
                href="tel:+14434608684"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href="/contact"
                onClick={e => handleNavClick(e, '/contact', null)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
