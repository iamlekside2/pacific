import { MapPin } from 'lucide-react'
import imgProfile from '../assets/images/profile.jpeg'

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

        {/* Founder Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Photo */}
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-500/15 transition-all duration-500">
              <img
                src={imgProfile}
                alt="Blessing Okeke – Founder, THE PACIFIC HOMECARE"
                className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/30">
                  <p className="text-white font-bold text-lg">Blessing Okeke</p>
                  <p className="text-blue-200 text-sm">Founder, THE PACIFIC HOMECARE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Built on Professional Care and Personal Commitment
              </h2>
            </div>

            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Founder</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Blessing Okeke</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                THE PACIFIC HOMECARE is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl">
              Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
            </p>

            <a
              href="#form"
              className="inline-flex px-7 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all border border-white/20"
            >
              Get In Touch
            </a>
          </div>
        </div>

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
