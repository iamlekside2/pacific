import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Family Member',
    text: 'The peace of mind knowing my mother was safe and cared for was invaluable. The team was professional, compassionate, and truly reliable.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Care Recipient',
    text: 'After my surgery, the support made recovery smooth and comfortable. They treated me with dignity and helped me regain my confidence.',
    rating: 5,
  },
  {
    name: 'Patricia Williams',
    role: 'Family Member',
    text: 'We were overwhelmed. Pacific gave us breathing room while ensuring excellent care. I cannot recommend them highly enough.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-in-down">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            What Families Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real stories from the families we're privileged to serve</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="card-hover group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col h-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image Area */}
              <div className="h-44 bg-gradient-to-br from-primary/10 via-blue-50 to-white flex items-center justify-center border-b border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30" />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                {/* Quote Icon */}
                <Quote className="w-5 h-5 text-primary/20 mb-3" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 mb-6 flex-1 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
