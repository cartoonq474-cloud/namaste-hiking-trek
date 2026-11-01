const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

console.log('--- FINAL COMPREHENSIVE AUDIT ---');
console.log('File size in bytes:', Buffer.byteLength(html, 'utf8'));

// 1. Tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}
console.log('All tag balances match 100%:', allOk);

// 2. Main content keywords
const mainStart = html.indexOf('<main');
const mainEnd = html.indexOf('</main>');
const mainHtml = html.substring(mainStart, mainEnd);

console.log('Kanchenjunga mentions in main:', (mainHtml.match(/Kanchenjunga/gi) || []).length);
console.log('Pangpema mentions in main:', (mainHtml.match(/Pangpema/gi) || []).length);
console.log('Ghunsa mentions in main:', (mainHtml.match(/Ghunsa/gi) || []).length);
console.log('Khambachen mentions in main:', (mainHtml.match(/Khambachen/gi) || []).length);
console.log('Sele Le mentions in main:', (mainHtml.match(/Sele Le/gi) || []).length);
console.log('Ramche mentions in main:', (mainHtml.match(/Ramche/gi) || []).length);

// Check if Lukla or Everest are erroneously present in the trek sections
const sec1Start = html.indexOf('<!-- Section 1: Overview -->');
const sec9End = html.indexOf('<!-- Section 9: FAQs -->') + 20000;
const trekContent = html.substring(sec1Start, sec9End);

console.log('Lukla in trek sections (should be 0):', (trekContent.match(/Lukla/gi) || []).length);
console.log('Namche in trek sections (should be 0):', (trekContent.match(/Namche/gi) || []).length);
console.log('EBC in trek sections (should be 0):', (trekContent.match(/\bEBC\b/gi) || []).length);
