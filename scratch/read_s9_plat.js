const fs = require('fs');

const plat = fs.readFileSync('scratch/s9_platform.html', 'utf8');

console.log('--- Overview of s9_platform.html ---');
const lines = plat.split('\n');
console.log('Total lines:', lines.length);

// Print first 80 lines
console.log(lines.slice(0, 80).join('\n'));
