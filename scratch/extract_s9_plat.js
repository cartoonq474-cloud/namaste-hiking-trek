const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');
const platStart = s9.indexOf('<div id="platform-reviews"');
const s9Plat = s9.substring(platStart);

fs.writeFileSync('scratch/s9_platform.html', s9Plat);
console.log('Saved scratch/s9_platform.html (length:', s9Plat.length, ')');
