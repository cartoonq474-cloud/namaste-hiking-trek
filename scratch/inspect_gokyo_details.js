const fs = require('fs');

const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

console.log('=== 1. ITINERARY CARD COUNT ===');
const itinCards = [...html.matchAll(/class="[^"]*itinerary-accordion-card[^"]*"/g)];
console.log('itinerary-accordion-card count:', itinCards.length);

console.log('\n=== 2. FAQ SECTION DETAILS ===');
const faqSection = html.match(/<section id="section-faqs"[\s\S]*?<\/section>/)?.[0] || '';
const panels = [...faqSection.matchAll(/id="(faq-[^"]+)"/g)].map(m => m[1]);
console.log('FAQ panel IDs:', panels);

// Check classes inside faqSection
const items = [...faqSection.matchAll(/<div class="faq-item[^"]*"[\s\S]*?<\/div>\s*<\/div>/g)];
console.log('FAQ item chunks matched:', items.length);

// Let's print the first 3 FAQ questions in panel 1
const firstPanel = faqSection.match(/id="faq-panel-general"[\s\S]*?(?=<div class="faq-category-panel"|<\/div>\s*<\/div>\s*<\/section>)/)?.[0];
if (firstPanel) {
  const qMatches = [...firstPanel.matchAll(/<div class="faq-item-question">([\s\S]*?)<\/div>/g)];
  console.log('Questions in general panel:', qMatches.map(m => m[1].replace(/<[^>]+>/g, '').trim()));
}

console.log('\n=== 3. DATA-TREK-KEY LOCATIONS ===');
const keyMatches = [...html.matchAll(/(.{0,50}data-trek-key="[^"]+".{0,50})/g)].map(m => m[1].trim());
console.log('Key matches:', keyMatches);

console.log('\n=== 4. MISSING IMAGES IN GOKYO ===');
const imgMatches = [...html.matchAll(/<img[^>]+src="([^">]+)"[^>]*>/g)];
const missingList = [];
imgMatches.forEach(m => {
  const src = m[1];
  if (src.startsWith('http')) return;
  let cleanSrc = src.split('?')[0].split('#')[0];
  let localPath;
  if (cleanSrc.startsWith('/')) {
    localPath = '.' + cleanSrc;
  } else if (cleanSrc.startsWith('../../')) {
    localPath = cleanSrc.replace(/^\.\.\/\.\.\//, '');
  } else if (cleanSrc.startsWith('../')) {
    localPath = cleanSrc.replace(/^\.\.\//, '');
  } else {
    localPath = 'trek/gokyo-lakes-trek/' + cleanSrc;
  }
  if (!fs.existsSync(localPath)) {
    missingList.push({ tag: m[0].slice(0, 100), src, localPath });
  }
});
console.log('Missing images total:', missingList.length);
missingList.forEach(item => console.log('MISSING:', item.src));
