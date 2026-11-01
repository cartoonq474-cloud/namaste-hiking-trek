const fs = require('fs');

const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

// Check itinerary section
const itinIdx = content.indexOf('id="section-itinerary"');
if (itinIdx !== -1) {
  console.log('=== ITINERARY SECTION START ===');
  console.log(content.substring(itinIdx, itinIdx + 1200));
}

// Check how day items or accordions are represented
const dayMatches = content.match(/<div class="[^"]*itinerary[^"]*"[^>]*>/g);
console.log('Itinerary classes found:', dayMatches ? dayMatches.slice(0, 10) : 'none');

// Look for h3 or h4 inside itinerary section
const itinEndIdx = content.indexOf('id="section-includes"');
const itinSection = content.substring(itinIdx, itinEndIdx !== -1 ? itinEndIdx : itinIdx + 15000);
const headings = itinSection.match(/<h[34][^>]*>[\s\S]*?<\/h[34]>/g);
console.log('\nHeadings in itinerary:', headings ? headings.slice(0, 15) : 'none');
