const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

// Find all faq-item occurrences
const faqItemRegex = /<div class="faq-item">[\s\S]*?<\/div>\s*<\/div>/g;
let match;
let count = 0;
let badQuestionCount = 0;
let goodQuestionCount = 0;

const faqSectionStart = content.indexOf('<!-- Category 1: General Information -->');
const faqSectionEnd = content.indexOf('<!-- Footer Section -->');
const faqSlice = content.slice(faqSectionStart, faqSectionEnd);

console.log('FAQ Section slice length:', faqSlice.length);

const items = faqSlice.split('<div class="faq-item">').slice(1);
console.log('Total faq-item blocks found:', items.length);

items.forEach((item, idx) => {
  const hasFaqQuestion = item.includes('class="faq-question"');
  const hasFaqItemQuestion = item.includes('class="faq-item-question"');
  const hasFaqAnswer = item.includes('class="faq-answer"');
  const hasFaqItemAnswer = item.includes('class="faq-item-answer"');
  
  if (hasFaqQuestion || hasFaqAnswer) {
    badQuestionCount++;
    console.log(`Item ${idx + 1} has bad classes: faq-question=${hasFaqQuestion}, faq-answer=${hasFaqAnswer}`);
  }
  if (hasFaqItemQuestion) {
    goodQuestionCount++;
  }
});

console.log(`Summary: total=${items.length}, bad=${badQuestionCount}, good=${goodQuestionCount}`);
