import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import img85 from '../assets/images/85.png'
import img84 from '../assets/images/84.png'
import img87 from '../assets/images/87.png'

const blogs = [
  {
    slug: 'home-healthcare-needed',
    title: 'How to Know When Home Healthcare Is Needed',
    excerpt: 'Recognizing the signs early can make a significant difference in safety and quality of life for your loved ones.',
    image: img85,
  },
  {
    slug: 'after-hospital-discharge',
    title: 'What to Do After Hospital Discharge',
    excerpt: 'A step-by-step guide for safe recovery at home — what to watch for and when to get support.',
    image: img84,
  },
  {
    slug: 'reduce-fall-risk',
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Resources</p>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Helpful Articles & Guides
            </h2>
          </div>
          <Link to="/resources" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all whitespace-nowrap">
            View All Resources <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              to={`/resources/${blog.slug}`}
              className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4 flex-1">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
