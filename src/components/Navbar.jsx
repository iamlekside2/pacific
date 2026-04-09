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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block">Pacific Home Healthcare</span>
            <span className="font-bold text-xl text-primary sm:hidden">Pacific</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'services', 'about', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={e => scrollTo(e, `#${id}`)} className="nav-link relative text-slate-600 hover:text-primary font-medium transition-colors capitalize">
                {id}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+14434608684" className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="#form" onClick={e => scrollTo(e, '#form')} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Request Support
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-600">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {['home', 'services', 'about', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={e => scrollTo(e, `#${id}`)} className="block py-2 text-slate-600 hover:text-primary font-medium capitalize">
                {id}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-slate-200">
              <a href="tel:+14434608684" className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="#form" onClick={e => scrollTo(e, '#form')} className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold">
                Request Support
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
