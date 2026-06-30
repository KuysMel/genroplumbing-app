import { BackgroundImage } from '../components/ui/BackgroundImage';

export default function Terms() {
  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage solidColor={true} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-8">
          Terms of Service
        </h1>
        <div className="prose max-w-none text-[var(--text-secondary)]">
          <p>
            Welcome to GENRO Plumbing Services. These Terms of Service govern your use of our website and services. By accessing our site, you agree to be bound by these terms.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Service Terms
          </h2>
          <p>
            Our plumbing services are provided on an as-needed basis. All work is completed in accordance with industry standards and local regulations. Pricing is quoted before work begins.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Payment Terms
          </h2>
          <p>
            Payment is due upon completion of service unless other arrangements have been made. We accept cash, credit cards, and bank transfers.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Limitations of Liability
          </h2>
          <p>
            GENRO is not liable for indirect, incidental, or consequential damages arising from the use of our services or website.
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            For questions about these Terms, please contact us at legal@genro.ph.
          </p>
        </div>
      </div>
    </div>
  );
}
