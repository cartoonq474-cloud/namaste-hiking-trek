const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const showcase = html.substring(html.indexOf('id="res-blogs-showcase"'), html.indexOf('id="res-blogs-showcase"') + 4000);
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
console.log('Emojis found in showcase:', emojiRegex.test(showcase));

// Check tag balance across all major tags in index.html
const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c);
    allOk = false;
  }
}

if (allOk) console.log('100% BALANCED tags in index.html!');
