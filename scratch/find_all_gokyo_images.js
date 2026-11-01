const fs = require('fs');
const path = require('path');

function searchImages(dir, keyword) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(searchImages(full, keyword));
    } else if (file.toLowerCase().includes(keyword.toLowerCase())) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

console.log('Gokyo images in images/:');
console.log(searchImages('images', 'gokyo').slice(0, 30));

console.log('Gokyo images in Trek Images/:');
console.log(searchImages('Trek Images', 'gokyo').slice(0, 30));
