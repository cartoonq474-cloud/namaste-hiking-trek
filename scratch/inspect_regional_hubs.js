const fs = require('fs');

const regionalHubs = [
  'everest-region-treks/index.html',
  'annapurna-region-treks/index.html',
  'manaslu-region-treks/index.html',
  'langtang-region-treks/index.html',
  'restricted-area-treks-nepal/index.html',
  'trekking-regions-nepal/index.html'
];

regionalHubs.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const imgs = [...content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi)];
  console.log(`\n=== ${f} (${imgs.length} images) ===`);
  imgs.forEach((m, i) => {
    if (m[1].includes('unsplash')) {
      console.log(`  ${i+1}. alt="${m[2]}" | src="${m[1].slice(0, 60)}..."`);
    }
  });
});
