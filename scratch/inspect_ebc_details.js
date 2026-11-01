const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const detStart = ebcHtml.indexOf('<section id="section-details"');
const detEnd = ebcHtml.indexOf('</section>', detStart);

console.log('EBC detStart:', detStart, 'detEnd:', detEnd);
console.log('Length of EBC section-details:', detEnd - detStart);

// Check sample card from EBC
const firstCardIdx = ebcHtml.indexOf('class="detail-accordion-card"', detStart);
const secondCardIdx = ebcHtml.indexOf('class="detail-accordion-card"', firstCardIdx + 50);

console.log('--- Sample EBC Accordion Card ---');
console.log(ebcHtml.slice(firstCardIdx, secondCardIdx));
