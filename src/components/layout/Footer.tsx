import { Link } from 'react-router';
import { Phone, Mail } from 'lucide-react';
import { siteContent } from '../../data/content';
import { assetPath } from '../../lib/assets';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={assetPath('logo.png')} alt="GENRO Plumbing" className="w-64 h-64 mb-4 rounded-lg object-contain" />
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-4">
              {siteContent.company.name}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-6">{siteContent.company.description}</p>
            <div className="flex gap-3">
              <a
                href={`tel:${siteContent.company.phone}`}
                className="p-2.5 bg-[var(--bg-tertiary)] text-[var(--accent-primary)] hover:opacity-80 rounded-lg transition"
                title="Call us"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${siteContent.company.email}`}
                className="p-2.5 bg-[var(--bg-tertiary)] text-[var(--accent-primary)] hover:opacity-80 rounded-lg transition"
                title="Email us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */} {/* Company */}
          <div>
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="m-10"></div>
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {siteContent.services.map((service) => (
                <li key={service.id}>
                  <Link to={service.link} className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */} {/* Certifications */}
          <div>
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/legal/privacy" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition underline hover:no-underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="m-10"></div>
            <h4 className="text-[var(--text-primary)] font-display font-bold mb-6">Certifications</h4>
            <div className="grid grid-cols-2 gap-2">
              {siteContent.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-medium text-[var(--text-primary)] text-center"
                >
                  {cert.name}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-color)] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-sm text-[var(--text-secondary)] text-center">
            <p>&copy; {currentYear} {siteContent.company.name}. All rights reserved.</p>
            <p>Available 24/7 | Central Luzon • NCR • CALABARZON</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
