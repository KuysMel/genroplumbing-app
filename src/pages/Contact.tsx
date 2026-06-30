import { useState } from 'react';
import { siteContent } from '../data/content';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { BackgroundImage } from '../components/ui/BackgroundImage';

const lightBg = 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const darkBg = 'https://images.unsplash.com/photo-1733510548942-a69d4de5e03a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage lightImage={lightBg} darkImage={darkBg} blur={0.8} opacity={0.8} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-6">
                Get in Touch
              </h1>
              <p className="text-[var(--text-secondary)] mb-8">
                Contact us anytime for quotes, emergencies, or general inquiries. We're available 24/7.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg font-bold">
                  Thank you! We'll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-medium text-[var(--text-primary)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[var(--text-primary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[var(--text-primary)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold hover:shadow-lg transition"
                  style={{ color: '#ffffff', fontWeight: 700 }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card p-8">
                <div className="flex gap-4 mb-4">
                  <Phone className="text-[var(--accent-primary)] flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">Phone</h3>
                    <a
                      href={`tel:${siteContent.company.phone}`}
                      className="text-[var(--accent-primary)] font-bold hover:opacity-80 underline"
                    >
                      {siteContent.company.phone}
                    </a>
                    <p className="text-[var(--text-secondary)] text-sm">24/7 Available</p>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <div className="flex gap-4 mb-4">
                  <Phone className="text-[var(--accent-primary)] flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">Viber</h3>
                    <a
                      href={`tel:${siteContent.company.viber}`}
                      className="text-[var(--accent-primary)] font-bold hover:opacity-80 underline"
                    >
                      {siteContent.company.viber}
                    </a>
                    <p className="text-[var(--text-secondary)] text-sm">24/7 Available</p>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <div className="flex gap-4 mb-4">
                  <Mail className="text-[var(--accent-primary)] flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">Email</h3>
                    <a
                      href={`mailto:${siteContent.company.email}`}
                      className="text-[var(--accent-primary)] font-bold hover:opacity-80 underline"
                    >
                      {siteContent.company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex gap-4 mb-4">
                  <MapPin className="text-[var(--accent-primary)] flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">Service Areas</h3>
                    <p className="text-[var(--text-primary)] font-medium">
                      Central Luzon<br />
                      NCR<br />
                      CALABARZON
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Common questions about our plumbing services and how we can help
              </p>
            </div>

            <div className="space-y-4">
              {siteContent.faq.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full card p-6 text-left hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">{item.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-[var(--accent-primary)] transition-transform ${openFAQ === idx ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                  {openFAQ === idx && (
                    <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
