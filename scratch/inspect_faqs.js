const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const s12 = html.indexOf('id="section-faqs"');
const footer = html.indexOf('<footer');

const snippet = html.slice(s12, footer);
const titles = [...snippet.matchAll(/class="faq-question-title"[^>]*>([\s\S]*?)<\/span>/gi)].map(m => m[1].trim());
console.log(`Found ${titles.length} FAQ questions:`);
titles.forEach((t, i) => console.log(`${i + 1}: ${t}`));
