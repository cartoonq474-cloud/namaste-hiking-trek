const fs = require('fs');

const files = ['nepal-trekking-packages/index.html', 'nepal-trekking-packages.html'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const imgs = [...content.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi)];
  console.log(`\n=== ${f} (${imgs.length} images) ===`);
  imgs.forEach((m, idx) => {
    if (m[1].includes('unsplash')) {
      console.log(`  ${idx + 1}. alt="${m[2]}" | src="${m[1].slice(0, 70)}..."`);
    }
  });
});
