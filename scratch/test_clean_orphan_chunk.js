const fs = require('fs');

const files = [
  'trek/everest-base-camp-trek/index.html',
  'trek/mardi-himal-trek/index.html',
  'trek/annapurna-circuit-trek/index.html',
  'trek/tilicho-lake-trek/index.html',
  'trek/annapurna-base-camp/index.html',
  'trek/gokyo-lakes-trek/index.html',
  'trek/gokyo-lakes-and-cho-la-pass/index.html',
  'trek/manaslu-circuit-trek/index.html',
  'trek/gosaikunda-lake-trek/index.html',
  'trek/langtang-valley-trek/index.html'
];

const orphanRegex = /\r?\n\s*<!-- Grid Items \(Right 2x2 Columns\) -->[\s\S]*?<\/div>\s*<\/div>\s*(?=\r?\n\s*<!-- Key Trip Facts Grid -->)/;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(orphanRegex);
  console.log(`${f}: match found? ${Boolean(match)} (length: ${match ? match[0].length : 0})`);
});
