const fs = require('fs');

const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');
const lines = content.split(/\r?\n/);

console.log('Total lines in upper-mustang-trek/index.html:', lines.length);

const marks = [
  '<!DOCTYPE html>',
  '<script type="application/ld+json">',
  '</script>',
  '</head>',
  '<header',
  '</header>',
  '<main',
  '<!-- Hero',
  'trip-facts',
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing',
  'section-details',
  'section-altitude-profile',
  'section-weather',
  'section-map',
  'section-booking',
  'section-reviews',
  'section-faqs',
  'sidebar-booking-card',
  'inquiry-modal',
  'you-might-like-section',
  'site-footer',
  '</html>'
];

marks.forEach(m => {
  const idx = lines.findIndex(l => l.includes(m));
  console.log(`${m.padEnd(30)} : Line ${idx !== -1 ? idx + 1 : 'NOT FOUND'}`);
});
