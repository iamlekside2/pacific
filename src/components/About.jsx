export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">About</p>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Professional Care Built on Personal Commitment
              </h2>
            </div>

            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Founder</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Blessing Okeke</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Pacific Home Healthcare is led by a dedicated healthcare professional committed to delivering dependable, patient-centered in-home care that families can trust.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4">
              <p className="text-slate-700 text-lg italic">
                "Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own."
              </p>
            </blockquote>

            <a href="#" className="inline-flex px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all shadow-md">
              Learn More
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 p-12 bg-white rounded-2xl border-2 border-primary/10">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Primary Service Area</p>
            <p className="text-2xl font-bold text-slate-900">Towson, MD</p>
          </div>
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Extended Coverage</p>
            <p className="text-2xl font-bold text-slate-900">Baltimore County</p>
          </div>
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Service Region</p>
            <p className="text-2xl font-bold text-slate-900">Surrounding MD</p>
          </div>
        </div>
      </div>
    </section>
  )
}
