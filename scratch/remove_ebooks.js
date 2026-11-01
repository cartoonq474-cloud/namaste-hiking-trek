const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

const ebookBtnPattern = /\s*<button class="res-tab-btn" data-res-cat="ebooks">E-Books<\/button>/;

if (!ebookBtnPattern.test(html)) {
  console.error('ERROR: E-Books button not found in index.html');
  process.exit(1);
}

html = html.replace(ebookBtnPattern, '');
html = html.replace('<!-- Section 4.5: Resources Related to Himalayan Trekking (Webinars, Blogs, Checklists, E-Books) -->', '<!-- Section 4.5: Resources Related to Himalayan Trekking (Webinars, Blogs, Checklists) -->');

// Validate HTML tags
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
if (!allOk) {
  console.error('HTML tag balance failed!');
  process.exit(1);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('SUCCESS: E-Books button removed from index.html with 100% tag balance!');

// 2. Update js/reviews-tabs.js
let js = fs.readFileSync('js/reviews-tabs.js', 'utf8');

const ebooksBlockPattern = /,\s*ebooks:\s*\[[\s\S]*?\](?=\s*\};)/;

if (!ebooksBlockPattern.test(js)) {
  console.error('ERROR: ebooks block not found in js/reviews-tabs.js');
  process.exit(1);
}

js = js.replace(ebooksBlockPattern, '');

// Test syntax of JS
try {
  new Function(js);
  console.log('SUCCESS: js/reviews-tabs.js syntax is valid!');
} catch (e) {
  console.error('JS Syntax Error:', e);
  process.exit(1);
}

fs.writeFileSync('js/reviews-tabs.js', js, 'utf8');
console.log('SUCCESS: ebooks removed from js/reviews-tabs.js!');
