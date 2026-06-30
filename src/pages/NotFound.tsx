import { Link } from 'react-router';
import { BackgroundImage } from '../components/ui/BackgroundImage';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative bg-[var(--bg-primary)]">
      <BackgroundImage solidColor={true} />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-6xl font-bold text-[var(--text-primary)] mb-4">
          404
        </h1>
        <p className="text-2xl text-[var(--text-secondary)] mb-8">
          Page not found
        </p>
        <p className="text-[var(--text-secondary)] mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold hover:opacity-90 transition"
          style={{ color: '#ffffff', fontWeight: 700 }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
