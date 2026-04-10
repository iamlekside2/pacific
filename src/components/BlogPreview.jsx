import { ArrowRight } from 'lucide-react'

const blogs = [
  {
    title: 'How to Know When Home Healthcare Is Needed',
    excerpt: 'Recognizing the signs early can make a significant difference in safety and quality of life for your loved ones.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Understanding Different Types of In-Home Care',
    excerpt: 'From medication management to companionship, learn about the range of services available for home healthcare.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'How to Reduce Fall Risk at Home',
    excerpt: 'Simple steps and professional support that can help prevent falls and improve mobility confidence.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop&q=80',
  },
]

export default function BlogPreview() {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[13px] font-medium text-primary uppercase tracking-wider mb-3">Resources</p>
          <h2 className="text-[32px] font-medium text-slate-900">Helpful Articles & Guides</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-medium text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-base text-slate-600 leading-[1.7] mb-4">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
