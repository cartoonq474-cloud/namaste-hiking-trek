const fs = require('fs');
const content = fs.readFileSync('scratch/build_manaslu.js', 'utf8');

const regex = /<svg([^>]*)>/g;
let m;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  const attrs = m[1];
  if (!attrs.includes('width') || !attrs.includes('height')) {
    count++;
    console.log('No width/height in build_manaslu.js:', m[0].substring(0, 100));
  }
}
console.log('Total missing in build_manaslu.js:', count);
