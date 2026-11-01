const fs = require('fs');

const trekFiles = [
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

trekFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n======================================================`);
  console.log(`AUDIT: ${file}`);
  
  // 1. Check between gallery and Key Trip Facts
  const galStart = content.indexOf('trek-gallery-collage');
  const factsStart = content.indexOf('Key Trip Facts');
  if (galStart !== -1 && factsStart !== -1) {
    const galChunk = content.substring(galStart, factsStart);
    const galImgs = [...galChunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    console.log(`[Gallery Area] Total images: ${galImgs.length} (Expected: 5)`);
    if (galImgs.length > 5) {
      console.log(`  WARNING: Found ${galImgs.length - 5} extra/dummy images in gallery area!`);
      galImgs.slice(5).forEach((img, i) => console.log(`    Extra #${i + 1}: ${img[1]}`));
    }
  }

  // 2. Check all unsplash images remaining on the page
  const allImgs = [...content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  const unsplashImgs = allImgs.filter(m => m[1].includes('unsplash'));
  console.log(`[Whole Page] Total images: ${allImgs.length}, Unsplash images: ${unsplashImgs.length}`);
});
