const fs = require('fs');

const html = fs.readFileSync('scratch/evt_section1_upgraded.html', 'utf8');

function count(tag) {
  const re = new RegExp('<' + tag + '[\\s>]', 'gi');
  return (html.match(re) || []).length;
}
function countClose(tag) {
  const re = new RegExp('</' + tag + '>', 'gi');
  return (html.match(re) || []).length;
}

const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'span', 'ul', 'li', 'a', 'button'];
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
console.log('Editorial subtitles:', (html.match(/class="trek-overview-subtitle"/g) || []).length);
console.log('Highlight cards:', (html.match(/<div class="ebc-highlight-card">/g) || []).length);
console.log('Glance items:', (html.match(/class="ebc-glance-item"/g) || []).length);
console.log('Peak tags:', (html.match(/class="ebc-peak-tag"/g) || []).length);
console.log('Why book cards:', (html.match(/<div class="why-book-card">/g) || []).length);
console.log('Overall section tag open:', (html.match(/<section/g) || []).length);
console.log('Overall section tag close:', (html.match(/<\/section>/g) || []).length);

if (allBalanced && (!emojis || emojis.length === 0)) {
  console.log('\nSUCCESS: 100% tag balance and zero emojis verified!');
} else {
  console.log('\nFAILURE: Issues detected.');
  process.exit(1);
}
