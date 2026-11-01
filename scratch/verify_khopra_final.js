const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

console.log('==================================================');
console.log('FINAL AUDIT: trek/khopra-ridge-trek/index.html');
console.log('==================================================');
console.log('Total file size:', Buffer.byteLength(html, 'utf8'), 'bytes');
console.log('Total lines:', html.split(/\r?\n/).length);

// 1. Tag balance check
console.log('\n--- 1. Tag Balance Check ---');
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(`MISMATCH: <${t}> open=${o}, close=${c}, diff=${o - c}`);
    allOk = false;
  }
}
if (allOk) {
  console.log('PERFECT: 100% tag balance on all HTML tags!');
}

// 2. Keyword check
console.log('\n--- 2. Keyword Check ---');
console.log('Mentions of Khopra:', (html.match(/Khopra/gi) || []).length);
console.log('Mentions of Khayer:', (html.match(/Khayer/gi) || []).length);
console.log('Mentions of Annapurna:', (html.match(/Annapurna/gi) || []).length);
console.log('Mentions of Dhaulagiri:', (html.match(/Dhaulagiri/gi) || []).length);
console.log('Mentions of Ghandruk:', (html.match(/Ghandruk/gi) || []).length);
console.log('Mentions of Poon Hill:', (html.match(/Poon Hill/gi) || []).length);
console.log('Mentions of Mohare:', (html.match(/Mohare/gi) || []).length);
console.log('Mentions of Everest (unwanted):', (html.match(/Everest/gi) || []).length);
console.log('Mentions of Lukla (unwanted):', (html.match(/Lukla/gi) || []).length);
console.log('Mentions of Kala Patthar (unwanted):', (html.match(/Kala Patthar/gi) || []).length);

// 3. Card counts
console.log('\n--- 3. Structural Elements ---');
console.log('Itinerary cards count:', (html.match(/class="itinerary-card"/g) || []).length);
console.log('Detail accordion cards count:', (html.match(/class="detail-accordion-card"/g) || []).length);
console.log('Trip fact items count:', (html.match(/class="trip-fact-item"/g) || []).length);
console.log('Highlights cards count:', (html.match(/class="ebc-highlight-card"/g) || []).length);
console.log('FAQ items count:', (html.match(/class="faq-item"/g) || []).length);

// 4. Data-altitude tags
console.log('\n--- 4. Interactive Altitude Tags ---');
const altTags = html.match(/data-altitude-m="(\d+)"/g) || [];
console.log('data-altitude-m tags count:', altTags.length);
console.log('Sample altitude values:', altTags.slice(0, 10));
