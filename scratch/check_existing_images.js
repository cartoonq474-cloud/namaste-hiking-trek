const fs = require('fs');

const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('Total images in existing page:', imgs.length);
console.log('Unique images:', [...new Set(imgs)]);

