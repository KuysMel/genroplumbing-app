import { Link } from 'react-router';
import { Check } from 'lucide-react';
import { pricingPlans, faqPricing } from '../data/pricing';
import { useState } from 'react';
import { BackgroundImage } from '../components/ui/BackgroundImage';

const lightBg = 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const darkBg = 'https://images.unsplash.com/photo-1733510548942-a69d4de5e03a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16 relative bg-[var(--bg-primary)]">
      <BackgroundImage lightImage={lightBg} darkImage={darkBg} blur={0.8} opacity={0.8} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold text-[var(--text-primary)] mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Professional plumbing services with clear, upfront pricing. No hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`card p-8 flex flex-col relative ${plan.popular ? 'md:scale-105 border-2 border-[var(--accent-primary)]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">{plan.description}</p>
                <div className="mb-8 hidden">
                  <span className="font-display text-4xl font-bold text-[var(--text-primary)]">
                    ₱{plan.basePrice}
                  </span>
                  {plan.calloutFee > 0 && <span className="text-[var(--text-secondary)]"> + ₱{plan.calloutFee} callout</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <Check size={18} className="text-[var(--accent-green)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`px-6 py-3 rounded-lg font-bold text-center transition ${plan.popular
                    ? 'bg-[var(--accent-primary)] text-white hover:shadow-lg'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--border-color)]'
                    }`}
                  style={plan.popular ? { color: '#ffffff', fontWeight: 700 } : undefined}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Pricing FAQs
            </h2>
            <div className="space-y-4">
              {faqPricing.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full card p-6 text-left hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-[var(--text-primary)]">{item.question}</h3>
                  </div>
                  {openFAQ === idx && (
                    <p className="mt-4 text-[var(--text-secondary)]">{item.answer}</p>
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
