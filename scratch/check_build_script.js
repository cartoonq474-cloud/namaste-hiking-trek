const fs = require('fs');
const content = fs.readFileSync('scratch/build_flagship_mardi_8d.js', 'utf8');

console.log('Script length:', content.length);
console.log(content.slice(0, 500));
