const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function inspectSection(id) {
  const start = ebc.indexOf(`id="${id}"`);
  if (start === -1) {
    console.log(`Section ${id} NOT FOUND in EBC`);
    return;
  }
  const nextSection = ebc.indexOf('<section', start + 10);
  const end = nextSection !== -1 ? nextSection : ebc.indexOf('</main>', start);
  const sectionHtml = ebc.substring(start, end);
  console.log(`\n==================== SECTION: ${id} (Length: ${sectionHtml.length}) ====================`);
  
  // Extract all distinct class names in this section
  const classes = [...sectionHtml.matchAll(/class="([^"]+)"/g)].map(m => m[1]);
  const uniqueClasses = [...new Set(classes.flatMap(c => c.split(/\s+/)))];
  console.log('Classes used:', uniqueClasses.slice(0, 20).join(', '));
  
  // Print first 800 chars of section
  console.log('--- Opening excerpt ---');
  console.log(sectionHtml.substring(0, 800));
}

// Inspect Hero
const heroStart = ebc.indexOf('<section class="trek-hero-section');
const heroEnd = ebc.indexOf('</section>', heroStart);
console.log('=== HERO SECTION ===');
console.log(ebc.substring(heroStart, Math.min(heroStart + 1500, heroEnd)));

inspectSection('section-overview');
inspectSection('section-itinerary');
inspectSection('section-includes');
inspectSection('section-dates');
inspectSection('section-packing');
inspectSection('section-details');
inspectSection('section-altitude-profile');
inspectSection('section-weather');
inspectSection('section-faqs');
