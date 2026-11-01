const fs = require('fs');
const path = require('path');

function searchImages(dir) {
  let res = [];
  try {
    for (const f of fs.readdirSync(dir)) {
      if (f === '.git' || f === 'node_modules') continue;
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) res = res.concat(searchImages(full));
      else if (/\.(jpg|jpeg|png|webp)$/i.test(f)) {
        if (/three[-_]pass|kongma|cho[-_]la|renjo|gokyo|ebc|kala[-_]patthar|dzongla|thangnak|lungden/i.test(f)) {
          res.push(f);
        }
      }
    }
  } catch(e) {}
  return res;
}

const found = searchImages('.');
console.log('Total matching images found:', found.length);
console.log('Sample images:', found.slice(0, 30));

