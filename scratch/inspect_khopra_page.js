const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

console.log('=== KHOPRA PAGE INSPECTION ===');
console.log('Size:', Buffer.byteLength(html, 'utf8'), 'bytes');
console.log('Lines:', html.split(/\r?\n/).length);

// Check tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.log(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}
console.log('Initial tag balance allOk:', allOk);

// Check sections
const secRegex = /<!-- Section (\d+):?\s*([^->]+)-->/g;
let m;
while ((m = secRegex.exec(html)) !== null) {
  console.log(`Section ${m[1]}: ${m[2].trim()} (at index ${m.index})`);
}

// Check title, h1, duration, and keywords
const titleM = html.match(/<title>([^<]+)<\/title>/);
console.log('Title:', titleM ? titleM[1] : 'None');

const h1M = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
console.log('H1:', h1M ? h1M[1].trim() : 'None');

console.log('Mentions of Khopra:', (html.match(/Khopra/gi) || []).length);
console.log('Mentions of Khayer:', (html.match(/Khayer/gi) || []).length);
console.log('Mentions of Everest/Lukla:', (html.match(/Everest|Lukla/gi) || []).length);
