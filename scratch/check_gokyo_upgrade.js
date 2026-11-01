const fs = require('fs');

const js = fs.readFileSync('scratch/apply_gokyo_itinerary_upgrade.js', 'utf8');
const lines = js.split(/\r?\n/);
console.log(lines.slice(35, 120).join('\n'));
