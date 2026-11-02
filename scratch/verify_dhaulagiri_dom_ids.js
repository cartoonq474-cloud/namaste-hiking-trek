const fs = require('fs');
const html = fs.readFileSync('trek/dhaulagiri-circuit-trek/index.html', 'utf8');
const idRegex = /\sid="([^"]+)"/g;
let match;
const ids = {};
const duplicates = [];
while ((match = idRegex.exec(html)) !== null) {
  const id = match[1];
  if (ids[id]) {
    duplicates.push(id);
  } else {
    ids[id] = 1;
  }
}
console.log('Total unique IDs:', Object.keys(ids).length);
console.log('Duplicates count:', duplicates.length);
if (duplicates.length > 0) {
  console.log('Duplicate IDs found:', duplicates);
  process.exit(1);
} else {
  console.log('PASS: 0 duplicate DOM IDs found on the page!');
}
