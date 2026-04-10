import { CheckCircle, Clock, Users, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const items = [
  { icon: CheckCircle, title: 'Consistent Care Delivery', desc: 'Structured, dependable support with no gaps or inconsistency' },
  { icon: Clock, title: 'Responsive Communication', desc: 'Reachable when it matters, not limited to fixed hours' },
  { icon: Users, title: 'Personalized Care Approach', desc: 'Support plans built around actual needs, not assumptions' },
  { icon: Shield, title: 'Professional Oversight', desc: 'Services delivered with clinical awareness and accountability' },
]

export default function Trust() {
  return (
    <section className="relative py-20 bg-light-bg overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-medium text-slate-900 text-center mb-16">
          CARE YOU CAN RELY ON WITHOUT UNCERTAINTY
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-[20px] font-medium text-slate-900 mb-2">{title}</h3>
              <p className="text-base text-slate-600 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            See all our services →
          </Link>
        </div>
      </div>
    </section>
  )
}
