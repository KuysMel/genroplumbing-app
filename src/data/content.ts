export const siteContent = {
  // Company Info
  company: {
    name: 'GENRO',
    tagline: 'Professional Plumbing You Can Trust',
    description: 'Trusted plumbing solutions for Central Luzon, NCR, and CALABARZON. Available 24/7.',
    email: 'abadiola4@gmail.com',
    phone: '0981-399-7654',
    viber: '0935-494-6745',
    facebook: 'Genro Malabanan Services',
    founded: '2023',
    mission: 'Provide reliable and high-quality plumbing solutions with professionalism, integrity, and efficiency.',
    vision: 'Become a leading plumbing service provider recognized for excellence and customer satisfaction.',
  },

  // Hero Section
  hero: {
    headline: 'Professional Plumbing You Can Trust',
    subheadline: 'Available 24/7 across Central Luzon, NCR, and CALABARZON. Certified professionals, fast response.',
    cta1: 'Book a Service',
    cta2: 'View Services',
  },

  // Stats
  stats: [
    { label: '1000+ Jobs', value: '1000' },
    { label: 'Available 24/7', value: '24/7' },
    { label: 'Service Areas', value: '3' },
    { label: 'Certifications', value: '6' },
  ],

  // Services
  services: [
    {
      id: 'siphoning',
      name: 'Siphoning Services',
      description: 'Professional siphoning and waste removal with safe, eco-friendly disposal methods.',
      icon: '🚰',
      details: 'Expert septic and greywater removal using modern equipment and safe techniques.',
      link: '/features#siphoning',
    },
    {
      id: 'septic-cleaning',
      name: 'Septic Tank Cleaning',
      description: 'Complete septic tank maintenance to keep your system running smoothly.',
      icon: '🔧',
      details: 'Professional cleaning, pumping, and inspection services.',
      link: '/features#septic',
    },
    {
      id: 'declogging',
      name: 'De-Clogging',
      description: 'Fast resolution of drain and pipe blockages using advanced equipment.',
      icon: '🚫',
      details: 'Chemical-free drain cleaning and unclogging services.',
      link: '/features#declogging',
    },
    {
      id: 'repiping',
      name: 'Repiping & Installation',
      description: 'Complete pipe replacement and new plumbing installations for residential and commercial.',
      icon: '🔩',
      details: 'Full repiping, leak repairs, and new line installations.',
      link: '/features#repiping',
    },
  ],

  // Trust Pillars
  trustPillars: [
    {
      title: 'Certified & Licensed',
      description: 'DENR, DTI, BIR, PhilGEPS certified professionals.',
    },
    {
      title: '24/7 Availability',
      description: 'Emergency services anytime, day or night.',
    },
    {
      title: 'Eco-Friendly Disposal',
      description: 'Safe, environmentally responsible waste management.',
    },
    {
      title: 'Skilled Professionals',
      description: 'Experienced technicians trained in all plumbing solutions.',
    },
  ],

  // Certifications
  certifications: [
    { name: 'DENR', color: 'bg-emerald-100' },
    { name: 'DTI', color: 'bg-blue-100' },
    { name: 'Business Permit', color: 'bg-amber-100' },
    { name: 'BIR Form 2303', color: 'bg-cyan-100' },
    { name: 'PhilGEPS', color: 'bg-rose-100' },
  ],

  // Testimonials (standard format for card view)
  testimonials: [
    {
      name: 'Maria Santos',
      location: 'Manila',
      service: 'Septic Tank Cleaning',
      rating: 5,
      text: 'GENRO came to our home in Makati on short notice and fixed our septic issue immediately. Professional, courteous, and very efficient. Highly recommended!',
      avatar: '👩',
    },
    {
      name: 'Juan dela Cruz',
      location: 'Quezon City',
      service: 'De-Clogging',
      rating: 5,
      text: 'Had a severe drain blockage in our condo unit. GENRO fixed it within 30 minutes without any mess. Outstanding service and fair pricing.',
      avatar: '👨',
    },
    {
      name: 'Rosa Mercado',
      location: 'Cabanatuan, Nueva Ecija',
      service: 'Siphoning Service',
      rating: 5,
      text: 'Trusted GENRO for our septic siphoning for over a year. Always punctual, professional, and they never compromise on quality.',
      avatar: '👩',
    },
    {
      name: 'Pedro Reyes',
      location: 'San Fernando, Pampanga',
      service: 'Repiping',
      rating: 5,
      text: 'Fixed multiple leaks in our house. The technicians were knowledgeable and took time to explain everything. Great service, reasonable rates.',
      avatar: '👨',
    },
    {
      name: 'Lourdes Aquino',
      location: 'Biñan, Laguna',
      service: 'Repiping',
      rating: 5,
      text: 'We had our entire house repiped. GENRO handled everything smoothly with minimal disruption. Quality work and excellent communication throughout.',
      avatar: '👩',
    },
    {
      name: 'Ricardo Gonzales',
      location: 'Caloocan',
      service: 'Septic Maintenance',
      rating: 5,
      text: 'Regular maintenance with GENRO has saved us from major problems. Reliable, honest service. Best plumber in NCR in my opinion.',
      avatar: '👨',
    },
  ],

  // Circular Testimonials (for hero component)
  circularTestimonials: [
    {
      name: 'Maria Santos',
      designation: 'Septic Tank Cleaning - Manila',
      quote: 'GENRO came to our home in Makati on short notice and fixed our septic issue immediately. Professional, courteous, and very efficient. Highly recommended!',
      src: '/images/genro01.jpeg',
    },
    {
      name: 'Juan dela Cruz',
      designation: 'De-Clogging Service - Quezon City',
      quote: 'Had a severe drain blockage in our condo unit. GENRO fixed it within 30 minutes without any mess. Outstanding service and fair pricing.',
      src: '/images/genro02.jpeg',
    },
    {
      name: 'Rosa Mercado',
      designation: 'Siphoning Service - Nueva Ecija',
      quote: 'Trusted GENRO for our septic siphoning for over a year. Always punctual, professional, and they never compromise on quality.',
      src: '/images/genro03.jpeg',
    },
  ],

  // FAQ
  faq: [
    {
      question: 'How quickly can GENRO respond to emergencies?',
      answer: 'We pride ourselves on our rapid response. In most cases, we can dispatch a technician within 1-2 hours of your call, even in the middle of the night. Our 24/7 hotline ensures your plumbing emergencies are handled promptly.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We serve Central Luzon (Pampanga, Nueva Ecija, etc.), NCR (Manila, QC, suburbs), and CALABARZON (Laguna, Cavite, Batangas). For areas outside these regions, please contact us to discuss availability.',
    },
    {
      question: 'How often should I have my septic tank cleaned?',
      answer: 'Typically, septic tanks should be pumped every 3-5 years, depending on usage and household size. We recommend a professional inspection annually to assess your specific needs and avoid costly repairs.',
    },
    {
      question: 'Are your services eco-friendly?',
      answer: 'Yes. GENRO follows safe and environmentally responsible disposal practices. We comply with all environmental regulations and use methods that minimize impact on the environment.',
    },
    {
      question: 'Do you offer same-day service?',
      answer: 'Yes! For non-emergency calls, we can often schedule same-day service if you call before 4 PM. Emergency calls are prioritized and handled around the clock.',
    },
    {
      question: 'What are your certifications?',
      answer: 'GENRO holds certifications from DENR, DTI, BIR, PhilGEPS, and DOH-accredited facilities. All our technicians are trained professionals committed to quality and safety.',
    },
    {
      question: 'How much does a siphoning service cost?',
      answer: 'Pricing depends on the size of your tank and location. We provide free quotes upon inspection. Call us for an estimate based on your specific situation.',
    },
    {
      question: 'What if I have a plumbing emergency at night?',
      answer: 'Call us anytime. Our 24/7 emergency hotline is always available. Emergency services may have a slight premium, but we guarantee quick response and professional solutions.',
    },
  ],

  // CTA Final
  ctaFinal: {
    headline: 'Ready to Solve Your Plumbing Problems?',
    subheadline: 'Contact us today for a free consultation. We\'re standing by 24/7.',
    cta: 'Book a Service Now',
  },
};
