const fs = require('fs');
const tp = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

// Print one complete itinerary card from TP
const itinCardMatch = tp.match(/<div class=\"itinerary-card[\s\S]*?<!-- Day 02 -->/);
if (itinCardMatch) {
  console.log('=== THREE PASSES ITINERARY CARD 1 ===');
  console.log(itinCardMatch[0]);
}

// Print FAQ section structure from TP
const faqMatch = tp.match(/<div class=\"faq-items-list\">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (faqMatch) {
  console.log('=== THREE PASSES FAQ LIST SAMPLE ===');
  console.log(faqMatch[0].slice(0, 1500));
}
