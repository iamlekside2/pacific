import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Walterson',
    role: 'Family of Care Recipient',
    text: 'The peace of mind we gained knowing my mother was safe and well-cared for was invaluable. The team was professional, compassionate, and reliable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Dicta Cheng',
    role: 'Care Recipient',
    text: 'After my surgery, the support made my recovery smooth and comfortable. The caregivers treated me with dignity and helped me regain confidence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Patricia Oakley',
    role: 'Family of Care Recipient',
    text: 'We were overwhelmed with caregiving. Pacific stepped in and gave us breathing room while ensuring excellent care. Highly recommend.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
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
              <div className="border-t border-slate-200 pt-6 flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
