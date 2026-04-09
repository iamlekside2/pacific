import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Family of Care Recipient',
    text: 'The peace of mind we gained knowing my mother was safe and well-cared for was invaluable. The team was professional, compassionate, and reliable.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Care Recipient',
    text: 'After my surgery, the support made my recovery smooth and comfortable. The caregivers treated me with dignity and helped me regain confidence.',
    rating: 5,
  },
  {
    name: 'Patricia Williams',
    role: 'Family of Care Recipient',
    text: 'We were overwhelmed with caregiving. Pacific stepped in and gave us breathing room while ensuring excellent care. Highly recommend.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Families Are Saying</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real experiences from families we've had the privilege to support.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border-b border-slate-200 relative overflow-hidden">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
