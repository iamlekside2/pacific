import { User, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-100 to-white rounded-3xl flex items-center justify-center border border-slate-200 shadow-xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-primary/40" />
                </div>
                <span className="text-slate-400 font-medium">Founder Photo</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Built on Professional Care and Personal Commitment</h2>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">Blessing Okeke</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Pacific Home Healthcare is led by a dedicated healthcare professional focused on delivering dependable, patient-centered in-home care.</p>
            </div>
            <p className="text-slate-600 leading-relaxed">Care is structured to be consistent, responsive, and reliable so families are not left managing uncertainty on their own.</p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all">
              View Full Profile
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
