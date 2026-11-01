const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-faqs"');
const eIdx = mardi.indexOf('</section>', sIdx);
const faqHtml = mardi.slice(sIdx, eIdx + 10);

console.log('FAQ HTML length:', faqHtml.length);
const classes = [...faqHtml.matchAll(/class=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Classes inside Mardi FAQs:', [...new Set(classes.flatMap(c => c.split(/\s+/)))]);

const ids = [...faqHtml.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('IDs inside Mardi FAQs:', ids);
