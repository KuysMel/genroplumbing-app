import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { assetPath } from '../../lib/assets';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={assetPath('logo.png')} alt="GENRO Plumbing" className="w-16 h-16 p-1 object-contain" />
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-[var(--text-primary)]">GENRO</div>
              <div className="text-xs font-semibold text-[var(--accent-green)]">Plumbing</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-display text-uppercase text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-semibold text-sm transition border-b-2 border-transparent hover:border-[var(--accent-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="font-display hidden sm:inline-block px-6 py-2.5 bg-[var(--accent-primary)] text-white font-bold rounded-lg hover:shadow-lg transition text-sm"
              style={{ color: '#ffffff', fontWeight: 700 }}
            >
              Book Now
            </Link>
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border-color)] p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-display block text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition py-2 font-semibold pl-4 border-l-2 border-transparent hover:border-[var(--accent-primary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="font-display block w-full px-6 py-2.5 bg-[var(--accent-primary)] text-white rounded-lg font-bold hover:shadow-lg transition text-center mt-2"
              style={{ color: '#ffffff', fontWeight: 700 }}
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
