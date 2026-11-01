const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s14 = content.substring(content.indexOf('<section id="homepage-reviews"'), content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking'));

console.log('--- S9 Panels structure: ---');
const s9Panels = s9.match(/<div id="(video-reviews|customer-reviews|platform-reviews)"[\s\S]*?(?=(?:<div id="(?:video-reviews|customer-reviews|platform-reviews)"|<\/section>))/g) || [];
s9Panels.forEach(p => {
  const idMatch = p.match(/id="([^"]+)"/);
  console.log(`Panel ${idMatch ? idMatch[1] : 'unknown'}, length: ${p.length}`);
});

console.log('\n--- S14 Panels structure: ---');
const s14Panels = s14.match(/<div id="(tab-platform-reviews|tab-customer-reviews|tab-video-reviews)"[\s\S]*?(?=(?:<div id="(?:tab-platform-reviews|tab-customer-reviews|tab-video-reviews)"|<\/section>))/g) || [];
s14Panels.forEach(p => {
  const idMatch = p.match(/id="([^"]+)"/);
  console.log(`Panel ${idMatch ? idMatch[1] : 'unknown'}, length: ${p.length}`);
});
