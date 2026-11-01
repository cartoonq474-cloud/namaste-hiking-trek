const fs = require('fs');

const js = fs.readFileSync('scratch/upgrade_16_gokyo_guides.js', 'utf8');
const lines = js.split(/\r?\n/);
console.log(lines.slice(lines.length - 80).join('\n'));
