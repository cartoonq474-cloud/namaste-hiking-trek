const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const faqSectionStart = content.indexOf('<!-- Category 1: General Information -->');
const faqSectionEnd = content.indexOf('<!-- Footer Section -->');
const faqSlice = content.slice(faqSectionStart, faqSectionEnd);

const itemRegex = /<div class="faq-item">([\s\S]*?)<\/div>\s*<\/div>/g;
let m;
let i = 0;
while ((m = itemRegex.exec(faqSlice)) !== null) {
  i++;
  const block = m[1];
  const qMatch = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const qTitle = qMatch ? qMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO TITLE';
  
  if (block.includes('14 calendar days') || block.includes('14 days') || block.includes('14-day')) {
    console.log(`Item ${i}: "${qTitle}" mentions 14 days!`);
  }
}
