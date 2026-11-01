const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-faqs"');
const eIdx = mardi.indexOf('class="you-might-like-section"');
const currentFaqs = sIdx !== -1 && eIdx !== -1 ? mardi.slice(sIdx, eIdx) : mardi.slice(sIdx);

const qMatches = [...currentFaqs.matchAll(/<button[^>]*class=["'][^"']*faq-item-question[^"']*["'][^>]*>([\s\S]*?)<\/button>/gi)];
console.log(`Found ${qMatches.length} questions in current Mardi FAQs.`);
if (qMatches.length === 0) {
  // Try finding any questions
  const h4s = [...currentFaqs.matchAll(/<(?:span|h3|h4|button)[^>]*class=["'][^"']*question[^"']*["'][^>]*>([\s\S]*?)<\/(?:span|h3|h4|button)>/gi)];
  console.log('Alternative matches:', h4s.map(m => m[1].replace(/<[^>]+>/g, '').trim()));
}
