import { useParams, Link } from 'react-router';
import { blogPosts } from '../data/blog';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BackgroundImage } from '../components/ui/BackgroundImage';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center relative bg-[var(--bg-primary)]">
        <BackgroundImage solidColor={true} />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-[var(--accent-primary)] hover:opacity-80 font-bold underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage solidColor={true} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:opacity-80 mb-8 font-bold underline">
          <ArrowLeft size={20} />
          Back to blog
        </Link>

        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-lg mb-8"
          />

          <div className="flex gap-4 text-sm text-[var(--text-muted)] mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold text-[var(--text-primary)] mb-8">
            {post.title}
          </h1>

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </article>
      </div>
    </div>
  );
}
