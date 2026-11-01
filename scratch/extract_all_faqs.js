const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('class="faq-content-area"');
const eIdx = mardi.indexOf('</section>', sIdx);
const sub = mardi.slice(sIdx, eIdx);

// Match all faq-accordion-item
const items = [...sub.matchAll(/<div class="faq-accordion-item"[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<div class="faq-accordion-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];

console.log(`Found ${items.length} items in faq-content-area.`);
const faqs = items.map(m => ({
  q: m[1].replace(/<[^>]+>/g, '').trim(),
  a: m[2].replace(/<\/?p[^>]*>/gi, '').trim()
}));

fs.writeFileSync('scratch/all_mardi_faqs.json', JSON.stringify(faqs, null, 2));
console.log('Saved scratch/all_mardi_faqs.json');
