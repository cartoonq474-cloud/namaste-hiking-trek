const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-faqs"');
const eIdx = mardi.indexOf('</section>', sIdx);
const faqHtml = mardi.slice(sIdx, eIdx + 10);

// Find categories
const catRegex = /<div class="faq-category-content[^"]*"[^>]*data-category="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*(?=<div class="faq-category-content|<\/div>\s*<\/section>)/g;
let m;
const cats = {};
while ((m = catRegex.exec(faqHtml)) !== null) {
  const catName = m[1];
  const content = m[2];
  // extract items
  const itemRegex = /<div class="faq-accordion-item"[\s\S]*?<div class="faq-accordion-header"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<div class="faq-accordion-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
  let im;
  cats[catName] = [];
  while ((im = itemRegex.exec(content)) !== null) {
    const q = im[1].replace(/<[^>]+>/g, '').trim();
    const a = im[2].trim();
    cats[catName].push({ q, a });
  }
}

console.log('Categories found:', Object.keys(cats));
Object.keys(cats).forEach(k => console.log(`${k}: ${cats[k].length} questions`));
fs.writeFileSync('scratch/mardi_faqs_extracted.json', JSON.stringify(cats, null, 2));
