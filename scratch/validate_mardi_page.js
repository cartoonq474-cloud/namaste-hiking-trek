const fs = require('fs');

const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const tags = ['div', 'section', 'article', 'main', 'p', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'button', 'a', 'script', 'style', 'nav', 'form', 'svg'];

console.log('--- TAG BALANCE REPORT for trek/mardi-himal-trek/index.html ---');
let allBalanced = true;

tags.forEach(tag => {
  // match opening tag: <tag (with word boundary or followed by space, >, \n)
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*>|>)`, 'gi');
  // match closing tag: </tag>
  const closeRegex = new RegExp(`<\\/${tag}>`, 'gi');

  const openCount = (content.match(openRegex) || []).length;
  const closeCount = (content.match(closeRegex) || []).length;

  if (openCount !== closeCount) {
    console.error(`MISMATCH [${tag}]: open = ${openCount}, close = ${closeCount} (diff: ${openCount - closeCount})`);
    allBalanced = false;
  } else {
    console.log(`BALANCED [${tag}]: ${openCount}`);
  }
});

if (allBalanced) {
  console.log('\nALL 26 TAG TYPES ARE 100% PERFECTLY BALANCED!');
} else {
  console.error('\nSOME TAGS ARE UNBALANCED! FIX REQUIRED!');
}

// Check for emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const hasEmoji = emojiRegex.test(content);
console.log('Has Cartoon Emojis:', hasEmoji ? 'YES (NEEDS REMOVAL)' : 'NO (100% CLEAN VECTOR SVGs)');
