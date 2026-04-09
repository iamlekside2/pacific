import { Activity, MessageCircle, Target, Stethoscope } from 'lucide-react'

const items = [
  { icon: Activity, title: 'Consistent Care Delivery', desc: 'Structured, dependable support with no gaps or inconsistency' },
  { icon: MessageCircle, title: 'Responsive Communication', desc: 'Reachable when it matters, not limited to fixed hours' },
  { icon: Target, title: 'Personalized Care Approach', desc: 'Support plans built around actual needs, not assumptions' },
  { icon: Stethoscope, title: 'Professional Oversight', desc: 'Services delivered with clinical awareness and accountability' },
]

export default function Trust() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center text-white">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
