const fs = require('fs');

const files = [
  'trek/everest-base-camp-trek/index.html',
  'trek/mardi-himal-trek/index.html',
  'trek/annapurna-circuit-trek/index.html',
  'trek/tilicho-lake-trek/index.html',
  'trek/annapurna-base-camp-trek/index.html',
  'trek/gokyo-lakes-trek/index.html',
  'trek/gokyo-lakes-and-cho-la-pass/index.html',
  'trek/manaslu-circuit-trek/index.html',
  'trek/gosaikunda-lake-trek/index.html',
  'trek/langtang-valley-trek/index.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const orphanRegex = /\s*<!-- Grid Items \(Right 2x2 Columns\) -->\s*<div class="trek-gallery-sub">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*(?=\s*<!-- Key Trip Facts)/;
  const match = content.match(orphanRegex);
  console.log(`${f}: match found? ${Boolean(match)}`);
});
