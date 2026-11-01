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

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const startStr = '<!-- Multi-Image Collage Gallery -->';
  const endStr = '<!-- Key Trip Facts Grid -->';
  const p1 = content.indexOf(startStr);
  const p2 = content.indexOf(endStr);
  console.log(`${f}: p1=${p1}, p2=${p2}, diff=${p2 - p1}`);
});
