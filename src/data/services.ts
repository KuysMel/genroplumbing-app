export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  highlights: string[];
  includes: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'septic-tank-siphoning',
    title: 'Septic Tank Siphoning',
    shortTitle: 'Septic Tank Siphoning',
    summary: 'Reliable septic tank siphoning and waste removal for homes, businesses, and commercial properties.',
    image: '/images/genro-malabanan-septic-cleaning.jpg',
    highlights: ['Safe waste extraction', 'Residential and commercial tanks', '24/7 emergency response'],
    includes: ['Tank inspection before service', 'Professional vacuum siphoning', 'Clean work area after completion', 'Guidance for maintenance schedules'],
  },
  {
    slug: 'plumbing-services',
    title: 'Plumbing Services',
    shortTitle: 'Plumbing Services',
    summary: 'General plumbing repair, installation, and maintenance handled by experienced GENRO technicians.',
    image: '/images/laguna-plumbing-service.jpg',
    highlights: ['Pipe repairs and replacement', 'Fixture installation', 'Preventive maintenance'],
    includes: ['Leak diagnosis', 'Faucet and toilet repair', 'Water line maintenance', 'Residential and commercial support'],
  },
  {
    slug: 'declogging-services',
    title: 'Declogging Services',
    shortTitle: 'Declogging Services',
    summary: 'Fast clearing for clogged toilets, sinks, floor drains, and sewer lines using professional tools.',
    image: '/images/declogging-service-laguna.jpg',
    highlights: ['Toilet and sink clogs', 'Floor drain blockages', 'No-mess service process'],
    includes: ['Blockage assessment', 'Drain clearing', 'Flow testing', 'Recommendations to prevent repeat clogs'],
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortTitle: 'Drain Cleaning',
    summary: 'Routine and urgent drain cleaning to restore flow and reduce odors, backups, and slow drainage.',
    image: '/images/gallery/06.jpeg',
    highlights: ['Kitchen and bathroom drains', 'Odor and backup reduction', 'Maintenance cleaning'],
    includes: ['Drain line check', 'Debris removal', 'Water flow test', 'Advice for long-term drain care'],
  },
  {
    slug: 'grease-trap-cleaning',
    title: 'Grease Trap Cleaning',
    shortTitle: 'Grease Trap Cleaning',
    summary: 'Grease trap cleaning for restaurants, kitchens, and food-service spaces that need dependable sanitation support.',
    image: '/images/gallery/10.jpeg',
    highlights: ['Food-service support', 'Grease and sludge removal', 'Odor control'],
    includes: ['Trap inspection', 'Grease removal', 'Cleaning and flushing', 'Maintenance interval guidance'],
  },
  {
    slug: 'pipeline-repair',
    title: 'Pipeline Repair',
    shortTitle: 'Pipeline Repair',
    summary: 'Pipeline repair and maintenance for damaged, leaking, or aging residential and commercial pipe systems.',
    image: '/images/genro04.jpeg',
    highlights: ['Leak and damage repair', 'Pipeline maintenance', 'Commercial and residential service'],
    includes: ['Problem inspection', 'Pipe repair recommendations', 'Replacement support when needed', 'Final leak and flow checks'],
  },
  {
    slug: 'sewer-line-cleaning',
    title: 'Sewer Line Cleaning',
    shortTitle: 'Sewer Line Cleaning',
    summary: 'Sewer line cleaning for backups, slow drains, and waste-line blockages that need professional attention.',
    image: '/images/gallery/14.jpeg',
    highlights: ['Sewer backup response', 'Waste-line blockage clearing', 'Flow restoration'],
    includes: ['Line assessment', 'Clog removal', 'Sewer flow testing', 'Service recommendations for recurring issues'],
  },
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortTitle: 'Emergency Plumbing',
    summary: 'Urgent plumbing response for leaks, backups, clogged toilets, and septic emergencies any time of day.',
    image: '/images/gallery/15.jpeg',
    highlights: ['Available 24/7', 'Urgent leak and clog response', 'Fast dispatch'],
    includes: ['Emergency assessment', 'Immediate temporary control when needed', 'Repair or clearing service', 'Next-step recommendations'],
  },
  {
    slug: 'water-leak-repair',
    title: 'Water Leak Repair',
    shortTitle: 'Water Leak Repair',
    summary: 'Water leak detection and repair for pipes, fixtures, toilets, and water lines before damage spreads.',
    image: '/images/gallery/03.jpeg',
    highlights: ['Pipe and fixture leaks', 'Water line repair', 'Damage prevention'],
    includes: ['Leak source check', 'Repair options', 'Fixture or pipe servicing', 'Final pressure and leak testing'],
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return serviceDetails.find((service) => service.slug === slug);
}
