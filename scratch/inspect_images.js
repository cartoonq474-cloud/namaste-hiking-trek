const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// Find all image sources in the page
const imgMatches = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
console.log('Total img tags in page:', imgMatches ? imgMatches.length : 0);

const uniqueSrcs = new Set();
if (imgMatches) {
  imgMatches.forEach(img => {
    const src = img.match(/src=["']([^"']+)["']/i);
    if (src) uniqueSrcs.add(src[1]);
  });
}
console.log('Unique img sources count:', uniqueSrcs.size);
console.log('Img sources sample:');
Array.from(uniqueSrcs).slice(0, 25).forEach(s => console.log(' - ' + s));
