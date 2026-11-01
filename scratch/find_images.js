const fs = require('fs');
const path = require('path');

function getImages(dir) {
  let list = [];
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const s = fs.statSync(full);
      if (s.isDirectory()) {
        list = list.concat(getImages(full));
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(f)) {
        list.push(full.replace(/\\/g, '/'));
      }
    }
  } catch (e) {}
  return list;
}

const ebcImages = getImages('images/treks/everest-base-camp');
console.log('EBC images count:', ebcImages.length);
console.log(ebcImages.slice(0, 20).join('\n'));

const allImages = getImages('images').filter(p => !p.includes('node_modules'));
console.log('Total images count:', allImages.length);
