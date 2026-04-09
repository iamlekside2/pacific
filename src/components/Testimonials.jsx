import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Family Member',
    text: 'Peace of mind knowing my mother was safe and well-cared for. Professional, compassionate, and reliable throughout.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Care Recipient',
    text: 'After my surgery, support made recovery smooth and comfortable. Treated with dignity and helped regain confidence.',
    rating: 5,
  },
  {
    name: 'Patricia Williams',
    role: 'Family Member',
    text: 'Overwhelmed with caregiving. Pacific stepped in, gave us breathing room, and ensured excellent care. Highly recommend.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-slate-600">Real stories from families we've served</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-lg font-medium mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
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
