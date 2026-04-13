import { ArrowRight } from 'lucide-react'
import img85 from '../assets/images/85.png'
import img84 from '../assets/images/84.png'
import img87 from '../assets/images/87.png'

const blogs = [
  {
    title: 'How to Know When Home Healthcare Is Needed',
    excerpt: 'Recognizing the signs early can make a significant difference in safety and quality of life for your loved ones.',
    image: img85,
  },
  {
    title: 'Understanding Different Types of In-Home Care',
    excerpt: 'From medication management to companionship, learn about the range of services available for home healthcare.',
    image: img84,
  },
  {
    title: 'How to Reduce Fall Risk at Home',
    excerpt: 'Simple steps and professional support that can help prevent falls and improve mobility confidence.',
    image: img87,
  },
]

export default function BlogPreview() {
  return (
    <section id="resources" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-20">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Resources</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Helpful Articles & Guides
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
