const fs = require('fs');

const files = [
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

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  const unsplashImgs = imgMatches.filter(m => m[1].includes('unsplash.com'));
  const trekImgs = imgMatches.filter(m => m[1].includes('images/treks/'));
  console.log(`\n=== ${file} ===`);
  console.log(`Total images: ${imgMatches.length}, Trek images: ${trekImgs.length}, Unsplash images: ${unsplashImgs.length}`);
  unsplashImgs.forEach((m, idx) => {
    const alt = m[0].match(/alt=["']([^"']*)["']/i);
    console.log(`  [Unsplash ${idx + 1}] src: ${m[1].slice(0, 60)}... | alt: ${alt ? alt[1] : ''}`);
  });
});
