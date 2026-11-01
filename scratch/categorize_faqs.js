const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('scratch/detailed_faq_audit.json', 'utf8'));

console.log('=== DETAILED CATEGORY ASSIGNMENT OF ALL 25 FAQS ===');
const categories = ['general', 'permits', 'accommodation', 'health', 'payments', 'cultural'];
categories.forEach(cat => {
  console.log(`\n========================================`);
  console.log(`CATEGORY: ${cat.toUpperCase()}`);
  console.log(`========================================`);
  const catItems = audit.filter(a => a.recommendedCategory === cat);
  console.log(`Items count: ${catItems.length}`);
  catItems.forEach(item => {
    console.log(`\n  [#${item.id}] "${item.providedQuestion}"`);
    console.log(`     Type: ${item.matchType}`);
    if (item.matchedExistingQuestion) {
      console.log(`     Replaces / maps to existing: "${item.matchedExistingQuestion}"`);
    } else {
      console.log(`     Status: COMPLETELY NEW QUESTION TO ADD`);
    }
    console.log(`     Answer Preview: "${item.providedAnswer.substring(0, 100)}..."`);
  });
});
