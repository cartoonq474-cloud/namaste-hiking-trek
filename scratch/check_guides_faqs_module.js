const fs = require('fs');

const { luxuryGuides, luxuryFaqs } = require('./content_luxury_guides_faqs.js');
console.log('Total luxury guides:', luxuryGuides.length);
console.log('Guide titles:');
luxuryGuides.forEach((g, i) => console.log(`  ${i+1}. ${g.title} (${g.category})`));

console.log('\nTotal luxury FAQs:', luxuryFaqs.length);
const faqCategories = [...new Set(luxuryFaqs.map(f => f.category))];
console.log('FAQ Categories:', faqCategories);
faqCategories.forEach(cat => {
  const count = luxuryFaqs.filter(f => f.category === cat).length;
  console.log(`  ${cat}: ${count} questions`);
});
