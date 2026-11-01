const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function showSectionStructure(id) {
  console.log(`\n================== SECTION: ${id} ==================`);
  const regex = new RegExp(`(<(?:section|div)[^>]*id=["']${id}["'][\\s\\S]*?<\\/(?:section|div)>)`, 'i');
  const match = ebc.match(regex);
  if (!match) {
    console.log('NOT FOUND');
    return;
  }
  const content = match[1];
  console.log('Total length:', content.length);
  // Show first 600 chars
  console.log('--- START ---');
  console.log(content.slice(0, 600));
  console.log('--- CLASSES USED ---');
  const classMatches = [...content.matchAll(/class=["']([^"']+)["']/g)];
  const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].sort();
  console.log(classes.join(', '));
}

const sections = [
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

sections.forEach(showSectionStructure);
