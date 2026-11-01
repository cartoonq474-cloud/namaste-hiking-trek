const fs = require('fs');

const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a'];
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  console.log(`${t}: open=${o}, close=${c}, diff=${o - c}`);
}
