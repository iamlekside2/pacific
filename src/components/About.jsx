import { User, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
                alt="Blessing Okeke - Founder"
                className="w-full h-full object-cover"
              />
              {/* Placeholder with fallback styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <User className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <span className="text-slate-400 font-medium block">Upload founder photo</span>
                  <p className="text-sm text-slate-400 mt-2">Recommended: 600x600px</p>
                </div>
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
