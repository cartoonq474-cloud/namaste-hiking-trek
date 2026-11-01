const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexPath, 'utf8');
const lines = content.split('\n');

console.log('=== SECTION 9: reviews-section (lines 3284 to 3835) ===');
console.log('Length:', 3832 - 3284, 'lines');
// Check sample lines inside section 9
console.log('Start snippet:');
console.log(lines.slice(3283, 3350).join('\n'));
console.log('...\nMiddle/End snippet:');
console.log(lines.slice(3800, 3835).join('\n'));

console.log('\n=== SECTION 14: homepage-reviews (lines 4262 to 4719) ===');
console.log('Length:', 4719 - 4262, 'lines');
console.log('Start snippet:');
console.log(lines.slice(4261, 4320).join('\n'));
console.log('...\nMiddle/End snippet:');
console.log(lines.slice(4680, 4725).join('\n'));
