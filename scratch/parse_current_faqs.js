const fs = require('fs');

const block = fs.readFileSync('scratch/current_faq_block.html', 'utf8');

// Let's see the structure of items in FAQ block
const itemRegex = /<div class="faq-item"([^>]*)>([\s\S]*?)<\/div>\s*(?=<div class="faq-item"|<\/div>\s*<\/div>\s*<\/section>)/g;
// Or let's see how question titles are marked up
const questionRegex = /<button class="faq-question"[^>]*>([\s\S]*?)<\/button>/gi;
const answerRegex = /<div class="faq-answer"[^>]*>([\s\S]*?)<\/div>/gi;

let qMatch;
const questions = [];
while ((qMatch = questionRegex.exec(block)) !== null) {
  // strip tags
  const text = qMatch[1].replace(/<[^>]+>/g, '').trim();
  questions.push(text);
}

console.log(`Found ${questions.length} existing FAQ questions in section-faq:`);
questions.forEach((q, idx) => {
  console.log(`${idx + 1}. ${q}`);
});
