const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const start = ebcHtml.indexOf('id="section-details"');
const end = ebcHtml.indexOf('id="section-altitude-profile"');
const sec = ebcHtml.substring(start, end);

const cards = [...sec.matchAll(/<div class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
console.log('EBC detail-accordion-card count:', cards.length);

const startCard = sec.indexOf('class="detail-accordion-card"');
console.log(sec.substring(startCard, startCard + 1200));

