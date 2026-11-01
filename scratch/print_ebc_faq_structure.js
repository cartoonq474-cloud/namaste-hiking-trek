const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const faqStart = ebcHtml.indexOf('id="section-faqs"');
const nextSection = ebcHtml.indexOf('</section>', faqStart);
console.log('FAQ section length:', nextSection - faqStart);

console.log('--- EBC FAQ SECTION START (1000 chars) ---');
console.log(ebcHtml.slice(faqStart, faqStart + 1000));

console.log('--- EBC FAQ CATEGORIES NAV ---');
const navStart = ebcHtml.indexOf('<div class="faq-category-nav">', faqStart);
const navEnd = ebcHtml.indexOf('</div>\n              </div>', navStart);
console.log(ebcHtml.slice(navStart, navEnd + 30));

console.log('--- FIRST CATEGORY CONTENT PANEL ---');
const panelStart = ebcHtml.indexOf('class="faq-category-content', faqStart);
const panelEnd = ebcHtml.indexOf('</div>\n\n              <!-- Category', panelStart);
console.log(ebcHtml.slice(panelStart, panelStart + 1500));
