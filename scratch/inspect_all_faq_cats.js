const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const faqSectionStart = content.indexOf('<!-- Category 1: General Information -->');
const faqSectionEnd = content.indexOf('<!-- Footer Section -->');
const faqSlice = content.slice(faqSectionStart, faqSectionEnd);

const catRegex = /<div class="faq-category-content[^"]*" id="([^"]+)">([\s\S]*?)(?=<div class="faq-category-content|<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/g;
let catMatch;

while ((catMatch = catRegex.exec(faqSlice)) !== null) {
  const catId = catMatch[1];
  const catBody = catMatch[2];
  const qMatches = [];
  const qRegex = /<h3[^>]*>(.*?)<\/h3>/g;
  let q;
  while ((q = qRegex.exec(catBody)) !== null) {
    qMatches.push(q[1].trim());
  }
  console.log(`\nCategory: ${catId} (${qMatches.length} questions):`);
  qMatches.forEach((qm, i) => {
    console.log(`  ${i+1}. ${qm}`);
  });
}
