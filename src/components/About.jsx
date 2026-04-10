import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const areas = [
  { city: 'Towson, MD', note: 'Primary service area' },
  { city: 'Baltimore County', note: 'Extended coverage' },
  { city: 'Surrounding Maryland', note: 'Service region' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Section — Centered */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-6">About the Founder</p>

          <h2 className="text-[32px] font-medium text-slate-900 mb-8">
            BUILT ON PROFESSIONAL CARE AND PERSONAL COMMITMENT
          </h2>

          {/* Circular Photo */}
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=90"
            alt="Blessing Okeke – Founder, Pacific Home Healthcare"
            className="w-32 h-32 rounded-full border-4 border-primary mx-auto object-cover shadow-lg mb-6"
          />

          <h3 className="text-[20px] font-medium text-slate-900">Blessing Okeke</h3>
          <p className="text-[13px] text-slate-500 mb-4">Founder, Pacific Home Healthcare</p>

          <p className="text-base text-slate-600 leading-[1.7] mb-4">
            Pacific Home Healthcare is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.
          </p>

          <p className="text-base text-slate-600 leading-[1.7] border-l-2 border-primary pl-4 text-left italic mb-6">
            Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
          >
            View Full Profile <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service Areas */}
        <div className="bg-light-bg rounded-xl p-10 border border-gray-200">
          <h3 className="text-[20px] font-medium text-slate-900 mb-2 text-center">SERVING FAMILIES ACROSS MARYLAND</h3>
          <p className="text-base text-slate-600 mb-8 text-center">Providing in-home healthcare services in:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map(({ city, note }) => (
              <div key={city} className="flex items-start gap-3 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-medium text-slate-900">{city}</p>
                  <p className="text-[13px] text-slate-500 mt-1">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
