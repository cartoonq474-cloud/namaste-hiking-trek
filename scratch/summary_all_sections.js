const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// List of all sections and their exact positions
const sections = [
  { id: 'hero', name: 'Hero Banner & Quick Search', start: 463, end: 642, heading: 'Best Trekking Agency: Authentic & Safe Himalayan Expeditions (H1)' },
  { id: 'himalayan-skyline', name: 'Interactive Himalayan Elevation Skyline', start: 643, end: 748, heading: 'None (Interactive Widget)' },
  { id: 'regions', name: 'Explore Nepal by Trekking Region', start: 749, end: 1648, heading: 'Explore Nepal by Trekking Region (H2)' },
  { id: 'activity-packages', name: 'Himalayan Adventure Services & Packages', start: 1649, end: 1904, heading: 'Himalayan Adventure Services & Packages (H2)' },
  { id: 'popular-treks', name: 'Find Your Perfect Trek (Popular Treks)', start: 1905, end: 2303, heading: 'Find Your Perfect Trek (H2)' },
  { id: 'peak-climbing', name: 'Best Himalayan Peak Climbing Packages', start: 2304, end: 2716, heading: 'Best Himalayan Peak Climbing Packages (H2)' },
  { id: 'tour-packages', name: 'Best Tour Packages in Nepal', start: 2717, end: 3128, heading: 'Best Tour Packages in Nepal (H2)' },
  { id: 'how-it-works', name: 'How does Namaste Hiking Trek Work?', start: 3129, end: 3281, heading: 'How does Namaste Hiking Trek Work? (H2)' },
  { id: 'reviews-section', name: 'Trekker Testimonials / Reviews (Partially broken/duplicate)', start: 3284, end: 3829, heading: 'Best Himalayan Trekking Reviews (H2)' },
  { id: 'trekking-gallery', name: 'What Your Journey Feels Like (Gallery)', start: 3832, end: 3894, heading: 'What Your Journey Feels Like (H2)' },
  { id: 'trust-safety', name: 'Why Namaste Hiking Trek? (Trust & Safety)', start: 3897, end: 4031, heading: 'Why Namaste Hiking Trek? (H2)' },
  { id: 'founder-message', name: 'Message from Our Founder', start: 4034, end: 4102, heading: 'Message from Our Founder (H2)' },
  { id: 'team-specialists', name: 'Best Himalayan Expedition and Trekking Specialists', start: 4104, end: 4259, heading: 'Best Himalayan Expedition and Trekking Specialists (H2)' },
  { id: 'homepage-reviews', name: 'MISPLACED DUPLICATE: Interactive Platform Reviews Switcher', start: 4262, end: 4716, heading: 'NONE (Missing H2!)' },
  { id: 'resources-section', name: 'Resources Related to Himalayan Trekking', start: 4719, end: 4794, heading: 'Resources Related to Himalayan Trekking (H2)' },
  { id: 'newsletter-cta', name: 'Subscribe to Our Newsletter', start: 4797, end: 4834, heading: 'Subscribe to Our Newsletter (H2)' },
  { id: 'faq', name: 'Frequently Asked Questions', start: 4837, end: 5032, heading: 'Frequently Asked Questions (H2)' },
  { id: 'cta-banner', name: 'Final Adventure Call-to-Action Banner', start: 5035, end: 5049, heading: 'Are You Ready to Start Your Adventure? (H2)' }
];

console.log('HOMEPAGE AUDIT SUMMARY:');
sections.forEach((s, idx) => {
  console.log(`${idx + 1}. [${s.id}] ${s.name}`);
  console.log(`   Lines: ${s.start}-${s.end} (${s.end - s.start + 1} lines) | Heading: ${s.heading}`);
});
