import { Activity, MessageCircle, Target, Shield } from 'lucide-react'

const items = [
  { icon: Activity, title: 'Consistent Care', desc: 'Structured, dependable support with no gaps' },
  { icon: MessageCircle, title: 'Always Responsive', desc: 'Available 24/7 when you need us' },
  { icon: Target, title: 'Personalized Plans', desc: 'Built around your actual needs' },
  { icon: Shield, title: 'Professional Care', desc: 'Clinical expertise and accountability' },
]

export default function Trust() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Care You Can Rely On
          </h2>
          <p className="text-xl text-slate-600">Without uncertainty or gaps in service</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-accent/20">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
