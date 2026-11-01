const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find gallery sections or images/gallery-
const galleryMatches = [...html.matchAll(/([\s\S]{0,100}images\/gallery-[^"'\s\)]+[\s\S]{0,100})/gi)];
console.log(`Found ${galleryMatches.length} gallery image references:`);
galleryMatches.forEach((m, i) => console.log(`[Gal ${i+1}] ${m[0].trim()}`));

// Check what other sections on index.html have images
const allImgAlts = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi)];
console.log(`\nTotal images with alts: ${allImgAlts.length}`);
