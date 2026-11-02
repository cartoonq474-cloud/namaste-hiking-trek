const fs = require('fs');
const html = fs.readFileSync('trek/dhaulagiri-circuit-trek/index.html', 'utf8');

const tags = ['div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'table', 'tbody', 'tr', 'td', 'h1', 'h2', 'h3', 'h4', 'p', 'span'];
let hasError = false;

tags.forEach(tag => {
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  const opens = (html.match(openRegex) || []).length;
  const closes = (html.match(closeRegex) || []).length;
  const diff = opens - closes;
  if (diff !== 0) {
    console.error(`FAIL: <${tag}> open: ${opens}, close: ${closes}, diff: ${diff}`);
    hasError = true;
  } else {
    console.log(`PASS: <${tag}> balanced (${opens} / ${closes})`);
  }
});

if (hasError) {
  process.exit(1);
} else {
  console.log('\nALL 17 CHECKED HTML TAGS ARE 100% PERFECTLY BALANCED!');
}
