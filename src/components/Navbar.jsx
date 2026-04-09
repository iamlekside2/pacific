import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900">Pacific</p>
              <p className="text-xs text-slate-600">Home Healthcare</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', id: '#home' },
              { label: 'Services', id: '#services' },
              { label: 'Resources', id: '#faq' },
              { label: 'About', id: '#about' },
              { label: 'Contact', id: '#contact' },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={id}
                onClick={e => scrollTo(e, id)}
                className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+14434608684"
              className="flex items-center gap-2 px-4 py-2.5 text-primary hover:bg-primary hover:text-white border-2 border-primary rounded-lg font-semibold transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href="#form"
              onClick={e => scrollTo(e, '#form')}
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-sm shadow-lg"
            >
              Request Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-700">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: 'Home', id: '#home' },
              { label: 'Services', id: '#services' },
              { label: 'Resources', id: '#faq' },
              { label: 'About', id: '#about' },
              { label: 'Contact', id: '#contact' },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={id}
                onClick={e => scrollTo(e, id)}
                className="block py-2 text-slate-700 hover:text-primary font-medium"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-slate-200">
              <a
                href="tel:+14434608684"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold w-full"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="#form"
                onClick={e => scrollTo(e, '#form')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold w-full"
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
