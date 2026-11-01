const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const faqStart = actHtml.indexOf('id="section-faqs"');
const sbStart = actHtml.indexOf('class="sidebar-booking-card"');
const faqHtml = actHtml.slice(faqStart, sbStart);

// Check category buttons
const btnMatches = [...faqHtml.matchAll(/class="faq-category-btn([^"]*)"([^>]*)>([\s\S]*?)<\/button>/gi)];
console.log('Category buttons found:', btnMatches.length);
btnMatches.forEach((m, i) => {
  console.log(`Btn ${i+1}: class="${m[1]}" attrs="${m[2].trim()}" text="${m[3].replace(/<[^>]+>/g, '').trim()}"`);
});

// Check panels
const panelMatches = [...faqHtml.matchAll(/id="(faq-[^"]+)"\s+class="([^"]+)"/gi)];
console.log('\nCategory panels found:', panelMatches.length);
panelMatches.forEach((m, i) => {
  console.log(`Panel ${i+1}: id="${m[1]}" class="${m[2]}"`);
});

// Check faq items
const itemMatches = [...faqHtml.matchAll(/class="faq-item([^"]*)"/gi)];
console.log('\nTotal faq-item found:', itemMatches.length);

// Check if questions have .faq-item-question
const qMatches = [...faqHtml.matchAll(/class="([^"]*faq-(?:item-)?question[^"]*)"/gi)];
console.log('Total faq questions found:', qMatches.length);

// Check if answers have .faq-item-answer
const aMatches = [...faqHtml.matchAll(/class="([^"]*faq-(?:item-)?answer[^"]*)"/gi)];
console.log('Total faq answers found:', aMatches.length);
