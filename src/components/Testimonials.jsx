import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Family Member',
    text: 'Peace of mind knowing my mother was safe and cared for. The team was professional, compassionate, and truly reliable.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Care Recipient',
    text: 'After surgery, the support made recovery smooth and comfortable. Treated with dignity and helped me regain confidence.',
    rating: 5,
  },
  {
    name: 'Patricia Williams',
    role: 'Family Member',
    text: 'We were overwhelmed. Pacific stepped in, gave us breathing room, and ensured excellent care. Highly recommend.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            What Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-primary/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div className="border-t border-slate-200 pt-6">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
