import { BackgroundImage } from '../components/ui/BackgroundImage';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage solidColor={true} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-none text-[var(--text-secondary)]">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly, including your name, email, phone number, and service requests. We also collect technical information about your website usage.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use your information to provide services, respond to inquiries, and improve our website. We never share your personal information with third parties without consent.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@genro.ph.
          </p>
        </div>
      </div>
    </div>
  );
}
