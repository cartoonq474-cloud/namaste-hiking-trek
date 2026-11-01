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

const all = getImages('images');
const filtered = all.filter(p => /everest|himalaya|mountain|sherpa|namche|lukla|trail|bridge|nepal/i.test(p));
console.log('Relevant images found:', filtered.length);
console.log(filtered.join('\n'));
