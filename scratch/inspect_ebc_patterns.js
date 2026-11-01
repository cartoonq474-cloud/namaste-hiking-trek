const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== EBC Section Itinerary Sample ===');
const itinSecStart = html.indexOf('id="section-itinerary"');
if (itinSecStart !== -1) {
  console.log(html.slice(itinSecStart, itinSecStart + 1500));
}

console.log('\n=== EBC Section FAQs Sample ===');
const faqSecStart = html.indexOf('id="section-faqs"');
if (faqSecStart !== -1) {
  console.log(html.slice(faqSecStart, faqSecStart + 1500));
}

console.log('\n=== Three Passes Section Itinerary Sample ===');
const tp = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');
const tpItinStart = tp.indexOf('id="section-itinerary"');
if (tpItinStart !== -1) {
  console.log(tp.slice(tpItinStart, tpItinStart + 1500));
}

console.log('\n=== Three Passes Section FAQs Sample ===');
const tpFaqStart = tp.indexOf('id="section-faqs"');
if (tpFaqStart !== -1) {
  console.log(tp.slice(tpFaqStart, tpFaqStart + 1500));
}
