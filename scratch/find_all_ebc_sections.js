const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let m;
console.log('--- ALL SECTIONS IN EBC ---');
while ((m = regex.exec(ebc)) !== null) {
  console.log('Section ID:', m[1]);
}

const waIdx = ebc.lastIndexOf('wa.me/9779800000000');
console.log('Last wa.me index in EBC:', waIdx);
if (waIdx !== -1) {
  console.log(ebc.slice(waIdx - 500, waIdx + 500));
}
