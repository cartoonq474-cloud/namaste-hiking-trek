const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

// 1. Check all image src paths
const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}

const missingImages = [];
images.forEach(img => {
  if (img.startsWith('http') || img.startsWith('data:')) return;
  // Resolve path relative to trek/everest-base-camp-luxury-trek/
  let localPath;
  if (img.startsWith('../')) {
    localPath = img.replace(/^\.\.\//, '');
  } else if (img.startsWith('/')) {
    localPath = img.slice(1);
  } else {
    localPath = 'trek/everest-base-camp-luxury-trek/' + img;
  }
  if (!fs.existsSync(localPath)) {
    missingImages.push({ src: img, localPath });
  }
});

console.log('Total images checked:', images.length);
console.log('Missing images:', missingImages.length ? missingImages : 'None! All images exist.');

// 2. Check internal anchor targets
const anchorRegex = /href="#([^"]+)"/g;
const anchors = [];
while ((match = anchorRegex.exec(html)) !== null) {
  anchors.push(match[1]);
}
const missingAnchors = anchors.filter(id => !html.includes(`id="${id}"`));
console.log('Missing anchors:', missingAnchors.length ? missingAnchors : 'None! All anchor targets exist.');

// 3. Check JSON-LD
const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let jsonCount = 0;
while ((match = jsonLdRegex.exec(html)) !== null) {
  jsonCount++;
  try {
    JSON.parse(match[1]);
    console.log(`JSON-LD #${jsonCount}: Valid JSON.`);
  } catch (err) {
    console.error(`JSON-LD #${jsonCount} ERROR:`, err.message);
  }
}

// 4. Check title and canonical
const titleMatch = html.match(/<title>([^<]+)<\/title>/);
const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');
console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');
