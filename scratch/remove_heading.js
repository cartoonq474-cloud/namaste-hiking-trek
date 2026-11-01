const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const target = `<h3 class="res-blogs-main-title">Explore our Travel Blog</h3>`;

if (!html.includes(target)) {
  console.error('ERROR: target not found in index.html');
  process.exit(1);
}

// Remove the target and any trailing whitespace/newline
html = html.replace(/\s*<h3 class="res-blogs-main-title">Explore our Travel Blog<\/h3>/, '');

// Validate tag balance
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
  console.error('Tag balance error!');
  process.exit(1);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('SUCCESS: Explore our Travel Blog heading removed with 100% tag balance!');
