export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'signs-septic-tank-maintenance',
    title: 'Warning Signs Your Septic Tank Needs Maintenance',
    excerpt: 'Learn the key indicators that your septic system requires professional attention before problems escalate.',
    content: `
# Warning Signs Your Septic Tank Needs Maintenance

A well-functioning septic system is crucial for any property. Here are the critical warning signs that indicate your system needs professional maintenance:

## Visual and Olfactory Indicators

**Unpleasant Odors**: If you notice persistent foul smells around your property, this often signals an issue with your septic tank. These odors indicate that waste is not being properly processed or disposed of.

**Slow Drains**: Consistently slow-draining fixtures throughout your home suggest that your septic system may be backing up or filling to capacity.

**Wet Patches**: Unusual wet patches in your yard, especially near the septic tank location, indicate potential leaks or system overflow.

## Performance Issues

**Backed-Up Sewage**: Perhaps the most concerning sign, sewage backing up into toilets or drains demands immediate professional intervention.

**Gurgling Sounds**: Unusual gurgling sounds from your plumbing suggest air being forced back through the system due to blockages or tank issues.

## Preventive Maintenance

Regular professional maintenance can prevent these issues from developing. Industry experts recommend:
- Annual inspections for residential systems
- Pumping every 3-5 years depending on usage
- Avoiding excessive water usage
- Proper waste disposal practices

**Don't wait for problems to escalate**. Contact GENRO Plumbing Services for a professional septic system evaluation today.
    `,
    author: 'GENRO Team',
    date: '2024-03-15',
    category: 'Septic Care',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    slug: 'prevent-drain-clogs',
    title: 'How to Prevent Drain Clogs: 5 Essential Tips',
    excerpt: 'Simple preventive measures to keep your drains clear and avoid costly plumbing repairs.',
    content: `
# How to Prevent Drain Clogs: 5 Essential Tips

Most drain clogs are preventable with proper care and maintenance. Here are five proven strategies to keep your drains flowing smoothly:

## 1. Use Drain Screens and Strainers

Install drain screens in all sinks, showers, and tubs. These inexpensive devices catch hair, soap residue, and food particles before they enter your pipes. Clean them regularly for maximum effectiveness.

## 2. Be Mindful of What Goes Down the Drain

Avoid pouring grease, coffee grounds, eggshells, and starchy foods down the drain. These materials accumulate and create blockages. Instead:
- Dispose of grease in a waste container
- Compost organic waste
- Scrape dishes before washing

## 3. Use Hot Water Regularly

Run hot water through your drains weekly to dissolve soap buildup and loosen minor clogs. This simple habit prevents many common drainage issues.

## 4. Avoid Chemical Drain Cleaners

Commercial drain cleaners are harsh and can damage your pipes over time. Instead, use:
- Baking soda and vinegar (natural alternative)
- A plunger for minor clogs
- A plumbing snake for stubborn blockages

## 5. Schedule Regular Professional Cleaning

Annual professional drain cleaning prevents major clogs and extends the life of your plumbing system. GENRO Plumbing Services offers eco-friendly drain cleaning solutions.

By following these tips, you can avoid emergency calls and expensive repairs. For persistent drain issues, our certified professionals are available 24/7.
    `,
    author: 'GENRO Team',
    date: '2024-02-28',
    category: 'Maintenance',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    slug: 'common-plumbing-emergencies',
    title: 'Common Plumbing Emergencies and How to Handle Them',
    excerpt: 'Know what to do when plumbing disasters strike. Quick action can minimize damage and costs.',
    content: `
# Common Plumbing Emergencies and How to Handle Them

Plumbing emergencies can happen without warning. Knowing how to respond can minimize water damage and reduce repair costs. Here are the most common emergencies and immediate steps to take:

## Burst Pipes

**What to Do**:
1. Locate your main water shut-off valve immediately
2. Turn it clockwise to stop water flow
3. Call GENRO Plumbing Services for emergency repair

**Prevention**: Insulate pipes in cold areas and avoid freezing temperatures.

## Sewage Backup

**What to Do**:
1. Do not use any plumbing fixtures
2. Avoid contact with contaminated water
3. Call for emergency professional help immediately
4. Keep records for insurance claims

## Overflowing Toilet

**What to Do**:
1. Stop water flow by turning the shut-off valve (usually at the base)
2. Do not flush again
3. Use a plunger if water level is normal
4. Call professionals for persistent issues

## No Hot Water

**What to Do**:
1. Check your water heater for pilot light (gas models)
2. Look for obvious leaks
3. If the tank is old (10+ years), replacement may be needed
4. Call GENRO for diagnosis

## Water Leaks

**What to Do**:
1. Turn off the main water supply
2. Place buckets to catch water
3. Document the damage with photos
4. Call emergency services immediately

**Remember**: GENRO Plumbing Services is available 24/7 for all emergency plumbing situations. Don't delay—quick professional intervention saves money and prevents property damage.
    `,
    author: 'GENRO Team',
    date: '2024-02-10',
    category: 'Emergency',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1585534330695-ebb21ef62fa5?w=800&h=600&fit=crop',
  },
];
