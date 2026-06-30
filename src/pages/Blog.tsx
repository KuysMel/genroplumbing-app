import { Link } from 'react-router';
import { blogPosts } from '../data/blog';
import { Calendar, Clock } from 'lucide-react';
import { BackgroundImage } from '../components/ui/BackgroundImage';

export default function Blog() {
  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage solidColor={true} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="font-display text-5xl font-bold text-[var(--text-primary)] mb-6">
            Plumbing Tips & Insights
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Expert advice and guides for maintaining your plumbing system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card hover:shadow-lg transition group no-underline"
            >
              <div className="aspect-video bg-[var(--bg-tertiary)] rounded-lg mb-6 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="flex gap-4 text-sm text-[var(--text-muted)] mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime} min
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition">
                {post.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
