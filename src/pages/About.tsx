import { siteContent } from '../data/content';
import { BackgroundImage } from '../components/ui/BackgroundImage';

const lightBg = 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const darkBg = 'https://images.unsplash.com/photo-1733510548942-a69d4de5e03a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage lightImage={lightBg} darkImage={darkBg} blur={0.8} opacity={0.8} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="font-display text-5xl font-bold text-[var(--text-primary)] mb-6">
              About GENRO
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
              Professional plumbing services you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4">Our Story</h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                Founded in {siteContent.company.founded}, GENRO has grown to become a trusted plumbing services provider across Central Luzon, NCR, and CALABARZON.
              </p>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We're committed to delivering professional, reliable, and eco-friendly plumbing solutions to residential and commercial clients.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4">Our Mission</h2>
              <p className="text-[var(--text-secondary)] mb-6 italic leading-relaxed">
                "{siteContent.company.mission}"
              </p>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4">Our Vision</h2>
              <p className="text-[var(--text-secondary)] italic leading-relaxed">
                "{siteContent.company.vision}"
              </p>
            </div>
          </div>

          <div className="card p-12 bg-[var(--accent-primary)] text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Available 24/7</h2>
            <p className="mb-6 text-lg">Emergency plumbing services anytime, anywhere in our service areas</p>
            <a
              href={`tel:${siteContent.company.phone}`}
              className="inline-block px-8 py-4 bg-white text-[var(--accent-primary)] rounded-lg font-bold hover:shadow-lg transition"
              style={{ fontWeight: 700 }}
            >
              Call {siteContent.company.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
