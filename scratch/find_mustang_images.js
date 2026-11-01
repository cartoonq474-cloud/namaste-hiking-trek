const fs = require('fs');

function findImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = dir + '/' + file;
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(findImages(full));
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      if (/mustang|lo-manthang|jomsom|kagbeni|chhoser|muktinath/i.test(full)) {
        results.push(full);
      }
    }
  });
  return results;
}

const images = findImages('images');
console.log('Matching Mustang images:', images);

console.log('\nAll trek folders in images/treks:');
if (fs.existsSync('images/treks')) {
  console.log(fs.readdirSync('images/treks'));
}
