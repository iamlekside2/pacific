export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="bg-primary/10 rounded-2xl aspect-square flex items-center justify-center border-2 border-primary/20">
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <p className="text-slate-600 font-semibold">Founder Photo</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              BUILT ON PROFESSIONAL CARE AND PERSONAL COMMITMENT
            </h2>

            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Founder</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Blessing Okeke</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Pacific Home Healthcare is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-6">
              Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
            </p>

            <a href="#" className="inline-flex px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all shadow-md">
              View Full Profile
            </a>
          </div>
        </div>

        {/* Serving Families */}
        <div className="bg-white rounded-2xl p-12 border-2 border-primary/10">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">SERVING FAMILIES ACROSS MARYLAND</h3>
          <p className="text-slate-600 mb-8 text-lg">Providing in-home healthcare services in:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">Towson, MD</p>
              <p className="text-slate-600 mt-2">Primary service area</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">Baltimore County</p>
              <p className="text-slate-600 mt-2">Extended coverage</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">Surrounding Maryland</p>
              <p className="text-slate-600 mt-2">Service region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
