export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic Service',
    description: 'Single service call for minor plumbing issues',
    basePrice: 0,
    calloutFee: 500,
    features: [
      'Professional diagnosis',
      'Basic repairs included',
      '1-hour service window',
    ],
    services: ['Faucet repair', 'Small leak fixes', 'Trap cleaning'],
    cta: 'Request Service',
  },
  {
    id: 'standard',
    name: 'Standard Service',
    description: 'Complete plumbing solutions for residential needs',
    basePrice: 2500,
    calloutFee: 0,
    popular: true,
    features: [
      'Comprehensive inspection',
      'Parts & labor included',
      'Same-day service available',
      '24/7 emergency support',
    ],
    services: [
      'De-clogging',
      'Pipe repairs',
      'Fixture installation',
      'Water pressure issues',
    ],
    cta: 'Book Now',
  },
  {
    id: 'premium',
    name: 'Septic & Specialty',
    description: 'Complete septic tank and major plumbing work',
    basePrice: 4500,
    calloutFee: 0,
    features: [
      'Septic tank pumping (up to 2000L)',
      'Complete system inspection',
      'Eco-friendly disposal',
      'Priority scheduling',
      '24/7 emergency response',
    ],
    services: [
      'Septic tank cleaning',
      'Siphoning services',
      'Repiping',
      'Major installation',
    ],
    cta: 'Get Quote',
  },
];

export const faqPricing = [
  {
    question: 'Do you charge a callout fee?',
    answer:
      'Standard and Premium service plans include free callout. Basic Service has a ₱500 callout fee.',
  },
  {
    question: 'Are parts included in the price?',
    answer:
      'Yes, parts are included in all our service packages. We provide high-quality, durable parts with warranties.',
  },
  {
    question: 'Can I get a discount for multiple services?',
    answer:
      'Absolutely! We offer 10-15% discounts when you book multiple services or annual maintenance plans. Contact us for details.',
  },
  {
    question: 'What if the repair costs more than expected?',
    answer:
      'We always provide a detailed quote before proceeding with work. You approve all charges before we begin. No surprises.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, for major work (repiping, septic installation) we can arrange flexible payment terms. Ask our team about options.',
  },
  {
    question: 'Is there an emergency surcharge?',
    answer:
      'Emergency calls (nights, weekends, holidays) may have a 20-30% premium depending on the time and location.',
  },
];
