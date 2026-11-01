const fs = require('fs');

let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// Fix the mega menu links that were replaced by global replace
html = html.replace(
  '<a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Khopra Ridge Trek</span>',
  '<a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span>'
);

html = html.replace(
  '<a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Khopra Ridge Trek</span>',
  '<a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span>'
);

html = html.replace(
  '<a href="../../trek/everest-base-camp-luxury-trek/" class="mega-trek-link"><span>Khopra Ridge Luxury Trek</span>',
  '<a href="../../trek/everest-base-camp-luxury-trek/" class="mega-trek-link"><span>Everest Base Camp Luxury Trek</span>'
);

html = html.replace(
  '<a href="../../trek/everest-base-camp-with-cho-la-pass-trek/" class="mega-trek-link"><span>Khopra Ridge with Cho La Pass',
  '<a href="../../trek/everest-base-camp-with-cho-la-pass-trek/" class="mega-trek-link"><span>Everest Base Camp with Cho La Pass'
);

html = html.replace(
  '<li><a href="../../trek/everest-base-camp-trek/">Khopra Ridge</a></li>',
  '<li><a href="../../trek/everest-base-camp-trek/">Everest Base Camp</a></li>'
);

// Validate tag balance
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

if (!allOk) {
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/khopra-ridge-trek/index.html', html, 'utf8');
console.log('Fixed navigation menu link text successfully!');
