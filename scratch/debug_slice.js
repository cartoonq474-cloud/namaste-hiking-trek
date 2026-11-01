const fs = require('fs');

const origContent = fs.readFileSync('index.html', 'utf8');

const startMarker = '<!-- Section 3: Himalayan Trekking Experience Gallery -->';
const endMarker = '<!-- Section 4: Why Namaste Hiking Trek Redesign Section -->';

const startIndex = origContent.indexOf(startMarker);
const endIndex = origContent.indexOf(endMarker);

console.log('startIndex:', startIndex);
console.log('endIndex:', endIndex);
console.log('Length between them:', endIndex - startIndex);
console.log('Snippet between them:');
console.log(origContent.slice(startIndex, startIndex + 300));
console.log('--- and near end:');
console.log(origContent.slice(endIndex - 200, endIndex + 50));
