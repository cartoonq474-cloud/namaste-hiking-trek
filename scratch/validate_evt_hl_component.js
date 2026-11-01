const fs = require('fs');

const html = fs.readFileSync('scratch/evt_highlights_upgraded.html', 'utf8');

function count(tag) {
  const re = new RegExp('<' + tag + '[\\s>]', 'gi');
  return (html.match(re) || []).length;
}
function countClose(tag) {
  const re = new RegExp('</' + tag + '>', 'gi');
  return (html.match(re) || []).length;
}

const tags = ['div', 'p', 'h2', 'h3', 'span', 'svg', 'em'];
console.log('--- TAG BALANCE ---');
let allBalanced = true;
for (const t of tags) {
  const o = count(t);
  const c = countClose(t);
  const ok = o === c;
  if (!ok) allBalanced = false;
  console.log(t.padEnd(8) + ': open = ' + o + ', close = ' + c + (ok ? ' [BALANCED]' : ' [MISMATCH!]'));
}

// Emoji check
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
const emojis = html.match(emojiRegex);
console.log('\n--- EMOJI CHECK ---');
console.log('Emojis found:', emojis ? emojis.length : 0);

// Specific components
console.log('\n--- COMPONENT CHECKS ---');
const cardMatches = [...html.matchAll(/<div class="ebc-highlight-card">([\s\S]*?)<\/div>\s*(?=<!--|<div class="ebc-highlight-card"|<\/div>\s*<\/div>)/gi)];
console.log('Highlight cards:', cardMatches.length);
console.log('Peak tags:', (html.match(/class="ebc-peak-tag"/g) || []).length);

console.log('\n--- WORD COUNT PER CARD ---');
let allAbove100Words = true;
cardMatches.forEach((c, idx) => {
  const text = c[1];
  const titleMatch = text.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pMatch = text.match(/<p[^>]*class="ebc-highlight-body"[^>]*>([\s\S]*?)<\/p>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO TITLE';
  const body = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO BODY';
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < 100) allAbove100Words = false;
  console.log(`Card ${String(idx + 1).padStart(2)}: ${title} (${words} words, ${body.length} chars)`);
});

if (allBalanced && (!emojis || emojis.length === 0) && cardMatches.length === 16 && allAbove100Words) {
  console.log('\nSUCCESS: 100% tag balance, zero emojis, and all 16 cards are deep flagship length!');
} else {
  console.log('\nFAILURE: Criteria not met.');
  process.exit(1);
}
