const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

console.log('--- MERA PEAK PAGE VALIDATION ---');
console.log('File size:', html.length, 'bytes');

// 1. Tag balance checks
const tagsToTest = ['div', 'section', 'span', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'ul', 'li', 'button'];
const tagReport = {};

tagsToTest.forEach(tag => {
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  const openCount = (html.match(openRegex) || []).length;
  const closeCount = (html.match(closeRegex) || []).length;
  tagReport[tag] = { open: openCount, close: closeCount, diff: openCount - closeCount };
});

console.log('Tag balance report:');
console.table(tagReport);

// 2. Altitude data tags
const altMatches = html.match(/data-altitude-m="[^"]+"/g);
console.log('Total data-altitude-m tags:', altMatches ? altMatches.length : 0);

// 3. Detail accordion cards
const detailCards = html.match(/class="detail-accordion-card"/g);
console.log('Total detail accordion cards:', detailCards ? detailCards.length : 0);

// 4. Detail content inner
const detailInner = html.match(/class="detail-accordion-content-inner"/g);
console.log('Total detail-accordion-content-inner elements:', detailInner ? detailInner.length : 0);

// 5. Itinerary cards
const itinCards = html.match(/class="itinerary-card/g);
console.log('Total itinerary cards:', itinCards ? itinCards.length : 0);

// 6. Packing items
const packingCheckboxes = html.match(/class="gear-item-checkbox"/g);
console.log('Total gear checkboxes:', packingCheckboxes ? packingCheckboxes.length : 0);

// 7. FAQ items
const faqItems = html.match(/class="faq-item"/g);
console.log('Total FAQ items:', faqItems ? faqItems.length : 0);

// 8. Departure rows
const depRows = html.match(/class="departure-item-row"/g);
console.log('Total departure rows:', depRows ? depRows.length : 0);

// 9. Check data-trek-key
console.log('Contains data-trek-key="mera-peak":', html.includes('data-trek-key="mera-peak"'));
console.log('Contains data-trek-key="ebc":', html.includes('data-trek-key="ebc"'));

// 10. Check visualizers
const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
const weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');
console.log('Altitude visualizer has mera-peak:', altJs.includes('"mera-peak"'));
console.log('Weather visualizer has mera-peak:', weaJs.includes('"mera-peak"'));

