import { siteContent } from '../data/content';
import { Link } from 'react-router';
import { BackgroundImage } from '../components/ui/BackgroundImage';

const lightBg = 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const darkBg = 'https://images.unsplash.com/photo-1733510548942-a69d4de5e03a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Features() {
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
              Our Plumbing Services
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
              Comprehensive solutions for every plumbing need. From emergency repairs to complete system installations.
            </p>
          </div>

          <div className="space-y-12">
            {siteContent.services.map((service) => (
              <div key={service.id} className="card p-10">
                <div className="flex gap-8 items-start">
                  <div className="text-6xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-3">
                      {service.name}
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to="/contact"
                        className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold hover:shadow-lg transition"
                        style={{ color: '#ffffff', fontWeight: 700 }}
                      >
                        Request Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-[var(--accent-primary)] text-white rounded-lg p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="mb-8 text-lg">Contact us for personalized quotes and emergency services available 24/7.</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-[var(--accent-primary)] rounded-lg font-bold hover:shadow-lg transition"
              style={{ fontWeight: 700 }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
