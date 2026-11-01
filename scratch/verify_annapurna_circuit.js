const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('--- VERIFICATION REPORT ---');
console.log('Total file size:', html.length);

const expectedSections = [
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

expectedSections.forEach(s => {
  const exists = html.includes(`id="${s}"`);
  console.log(`Section #${s}: ${exists ? 'PRESENT' : 'MISSING'}`);
});

console.log('Has site-footer:', html.includes('class="site-footer"'));
console.log('Has NAMASTE. watermark:', html.includes('NAMASTE.'));
console.log('Has sidebar-booking-card:', html.includes('class="sidebar-booking-card"'));
console.log('Has 14-day duration mention:', html.includes('14 calendar days'));
console.log('Has $1,199 pricing:', html.includes('$1,199'));
console.log('Has Thorong La 5,416m:', html.includes('5,416 m'));
console.log('Has Chame start:', html.includes('Chame (~2,710 m)'));
console.log('Has Manang acclimatization:', html.includes('Acclimatization Day in Manang'));
console.log('data-trek-key:', html.match(/data-trek-key="([^"]+)"/)?.[1]);

// Check for raw emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const linesWithEmoji = [];
html.split('\n').forEach((l, idx) => {
  if (emojiRegex.test(l)) {
    linesWithEmoji.push(idx + 1);
  }
});
console.log('Raw emojis found on lines:', linesWithEmoji.length, linesWithEmoji.slice(0, 10));
