const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('--- 1. Testing Schema ---');
const sIdx = html.indexOf('<script type="application/ld+json">');
const eIdx = html.indexOf('</script>', sIdx);
const jsonString = html.substring(sIdx + '<script type="application/ld+json">'.length, eIdx);
const schema = JSON.parse(jsonString);
const faqNode = schema['@graph'].find(g => g['@type'] === 'FAQPage');
console.log('FAQPage mainEntity count:', faqNode.mainEntity.length);

console.log('\n--- 2. Testing Category Panels in DOM ---');
const categories = ['general', 'permits', 'accommodation', 'health', 'payments', 'cultural'];
categories.forEach(cat => {
  const panelRegex = new RegExp(`<div class="faq-category-content[^"]*" id="faq-cat-${cat}">([\\s\\S]*?)(?=(?:<div class="faq-category-content"|<\\/div>\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>))`);
  const match = html.match(panelRegex);
  if (!match) {
    console.error(`Missing panel for category: ${cat}`);
  } else {
    const itemCount = (match[1].match(/<div class="faq-item">/g) || []).length;
    console.log(`Category [${cat}] panel found with ${itemCount} FAQ items.`);
  }
});

console.log('\n--- 3. Testing Question/Answer Count in Section ---');
const faqSectionStart = html.indexOf('id="section-faqs"');
const faqSectionEnd = html.indexOf('</section>', faqSectionStart);
const faqSection = html.substring(faqSectionStart, faqSectionEnd);

const totalItems = (faqSection.match(/<div class="faq-item">/g) || []).length;
const totalQuestions = (faqSection.match(/<div class="faq-item-question">/g) || []).length;
const totalAnswers = (faqSection.match(/<div class="faq-item-answer">/g) || []).length;
const totalToggles = (faqSection.match(/<span class="faq-toggle-circle">∨<\/span>/g) || []).length;

console.log(`Total FAQ items: ${totalItems}`);
console.log(`Total FAQ questions: ${totalQuestions}`);
console.log(`Total FAQ answers: ${totalAnswers}`);
console.log(`Total FAQ toggles: ${totalToggles}`);

if (totalItems === totalQuestions && totalQuestions === totalAnswers && totalAnswers === totalToggles) {
  console.log('\nAll FAQ elements are 100% consistent and symmetrical!');
} else {
  console.error('\nDiscrepancy found!');
  process.exit(1);
}
