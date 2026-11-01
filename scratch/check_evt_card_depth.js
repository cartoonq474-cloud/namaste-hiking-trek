const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const cards = [...evt.matchAll(/<div class="ebc-highlight-card">([\s\S]*?)<\/div>\s*(?=<!--|<div class="ebc-highlight-card"|<\/div>\s*<\/div>)/gi)];
console.log('EVT Highlight Cards count:', cards.length);

cards.forEach((c, idx) => {
  const text = c[1];
  const titleMatch = text.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pMatch = text.match(/<p[^>]*class="ebc-highlight-body"[^>]*>([\s\S]*?)<\/p>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO TITLE';
  const body = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO BODY';
  console.log(`EVT Card ${idx + 1}: ${title} (${body.split(/\s+/).length} words, ${body.length} chars)`);
  console.log(`  Preview: ${body.slice(0, 100)}...`);
});
