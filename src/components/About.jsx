import { MapPin } from 'lucide-react'

const areas = [
  { city: 'Towson, MD', note: 'Primary service area' },
  { city: 'Baltimore County', note: 'Extended coverage' },
  { city: 'Surrounding Maryland', note: 'Service region' },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Service Areas */}
        <div className="bg-white rounded-3xl p-12 border-2 border-slate-200 shadow-sm">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Serving Families Across Maryland</h3>
          <p className="text-slate-600 mb-10 text-lg">Providing in-home healthcare services in:</p>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map(({ city, note }) => (
              <div key={city} className="group flex items-start gap-4 p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{city}</p>
                  <p className="text-slate-500 mt-1 text-sm">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
