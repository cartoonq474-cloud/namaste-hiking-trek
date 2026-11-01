const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const tags = ['div', 'section', 'article', 'main', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'ul', 'li', 'button', 'a', 'table', 'tbody', 'tr', 'td', 'th'];

console.log('--- Tag Balance Verification for trek/mera-peak-climbing/index.html ---');
let allBalanced = true;

for (const tag of tags) {
  const openRegex = new RegExp(`<${tag}(?:\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`<\/${tag}>`, 'gi');
  const openCount = (html.match(openRegex) || []).length;
  const closeCount = (html.match(closeRegex) || []).length;
  const diff = openCount - closeCount;
  
  if (diff !== 0) {
    allBalanced = false;
    console.error(`MISMATCH: <${tag}> open: ${openCount}, </${tag}> close: ${closeCount} (diff: ${diff})`);
  } else {
    console.log(`BALANCED: <${tag}>: ${openCount}/${closeCount}`);
  }
}

if (allBalanced) {
  console.log('\nSUCCESS: 100% of checked HTML tags are perfectly balanced (0 unclosed tags)!');
} else {
  console.error('\nFAILURE: Found unbalanced tags!');
}

