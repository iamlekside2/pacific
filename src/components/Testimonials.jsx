import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret Walterson',
    role: 'Family of Care Recipient',
    text: 'The peace of mind we gained knowing my mother was safe and well-cared for was invaluable. The team was professional, compassionate, and reliable.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Dicta Cheng',
    role: 'Care Recipient',
    text: 'After my surgery, the support made my recovery smooth and comfortable. The caregivers treated me with dignity and helped me regain confidence.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Patricia Oakley',
    role: 'Family of Care Recipient',
    text: 'We were overwhelmed with caregiving. Pacific stepped in and gave us breathing room while ensuring excellent care. Highly recommend.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-[32px] font-medium text-slate-900">What Families Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base text-slate-600 leading-[1.7] mb-8">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-slate-900 text-sm">{t.name}</p>
                  <p className="text-[13px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
