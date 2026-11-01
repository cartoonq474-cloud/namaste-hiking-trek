const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const sectionIds = [
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
  'section-faqs'
];

sectionIds.forEach(id => {
  const startTag = `<section id="${id}"`;
  const startIdx = html.indexOf(startTag);
  if (startIdx === -1) {
    console.log(`MISSING: ${id}`);
    return;
  }
  // Find matching </section>
  const nextSectionIdx = html.indexOf('<section ', startIdx + startTag.length);
  const endIdx = html.indexOf('</section>', startIdx);
  console.log(`${id}: start ${startIdx}, end ${endIdx}, next section: ${nextSectionIdx}`);
});
