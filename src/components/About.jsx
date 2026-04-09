import { Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl h-96 flex items-center justify-center border-2 border-primary/20 overflow-hidden">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-16 h-16 text-primary/40" />
                </div>
                <p className="text-slate-500 font-semibold">Founder Photo</p>
                <p className="text-sm text-slate-400 mt-2">600x600px recommended</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Built on Professional Care & Personal Commitment
            </h2>

            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Founder</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Blessing Okeke</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Pacific Home Healthcare is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-6">
              Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
            >
              View Full Profile
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 p-12 bg-white rounded-2xl border border-slate-200">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Primary Area</p>
            <h4 className="text-2xl font-bold text-slate-900">Towson, MD</h4>
          </div>
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Extended Coverage</p>
            <h4 className="text-2xl font-bold text-slate-900">Baltimore County</h4>
          </div>
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Service Region</p>
            <h4 className="text-2xl font-bold text-slate-900">Surrounding MD</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
