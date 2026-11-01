const fs = require('fs');
const path = require('path');

function searchImages(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(searchImages(full));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
      if (/cho|pass|gokyo|everest/i.test(item) || /cho|pass|gokyo|everest/i.test(full)) {
        results.push(full);
      }
    }
  }
  return results;
}

const images = searchImages('images').concat(searchImages('Trek Images'));
console.log(`Found ${images.length} images matching Cho La / Gokyo / Everest:`);
images.slice(0, 30).forEach(img => console.log(' ', img));
