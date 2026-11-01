const fs = require('fs');

const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

console.log('=== COMPREHENSIVE FINAL VERIFICATION ===\n');

// 1. Component counts
const itinCards = (html.match(/class="itinerary-card[^"]*"/g) || []).length;
console.log(`1. Itinerary cards: ${itinCards} (Expected: 21)`);

const detailCards = (html.match(/class="detail-accordion-card[^"]*"/g) || []).length;
console.log(`2. Detail accordion cards: ${detailCards} (Expected: 21)`);

const faqItems = (html.match(/class="faq-item"/g) || []).length;
console.log(`3. FAQ items: ${faqItems} (Expected: >= 28)`);

// 2. data-trek-key check
const trekKeyMatches = [...html.matchAll(/data-trek-key="([^"]+)"/g)].map(m => m[1]);
console.log(`4. data-trek-key instances:`, trekKeyMatches);

// 3. Altitude tags check
const altitudeTags = (html.match(/data-altitude-m="[0-9]+"/g) || []).length;
console.log(`5. data-altitude-m tags: ${altitudeTags}`);

// 4. Detail accordion content inner class check
const correctDetailInner = (html.match(/class="detail-accordion-content-inner"/g) || []).length;
console.log(`6. detail-accordion-content-inner count: ${correctDetailInner} (Expected: 21)`);

// 5. Schema.org JSON-LD check
const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (schemaMatch) {
  try {
    const json = JSON.parse(schemaMatch[1]);
    console.log('7. Schema.org JSON-LD parses successfully!');
    const graph = json['@graph'];
    const trip = graph.find(x => x['@type'] === 'TouristTrip');
    console.log(`   - TouristTrip subTrips count: ${trip.subTrip.length} (Expected: 21)`);
    const faq = graph.find(x => x['@type'] === 'FAQPage');
    console.log(`   - FAQPage mainEntity count: ${faq.mainEntity.length} (Expected: >= 28)`);
  } catch (err) {
    console.error('7. Schema.org JSON-LD FAILED to parse:', err.message);
  }
} else {
  console.error('7. Schema.org script not found!');
}

// 6. Altitude Visualizer check
const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
const hasAltThreePasses = altJs.includes('"three_passes":') && altJs.includes('"three-passes":');
console.log(`8. Altitude visualizer contains three_passes & three-passes: ${hasAltThreePasses}`);

// 7. Tag balance check
const tagsToCheck = ['div', 'section', 'span', 'p', 'ul', 'li', 'table', 'tr', 'td', 'th', 'button', 'a'];
console.log('\n9. HTML Tag Balance Verification:');
let allBalanced = true;

tagsToCheck.forEach(tag => {
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  
  const openCount = (html.match(openRegex) || []).length;
  const closeCount = (html.match(closeRegex) || []).length;
  const diff = openCount - closeCount;
  
  const status = diff === 0 ? 'BALANCED' : `MISMATCH (${diff > 0 ? '+' : ''}${diff})`;
  if (diff !== 0) allBalanced = false;
  console.log(`   - <${tag}>: ${openCount} open, ${closeCount} close -> ${status}`);
});

console.log('\nOverall Tag Balance:', allBalanced ? 'PERFECT (0 unclosed tags)' : 'NEEDS ATTENTION');

