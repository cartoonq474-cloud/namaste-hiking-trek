const fs = require('fs');

const js = fs.readFileSync('scratch/upgrade_16_gokyo_guides.js', 'utf8');
console.log(js.substring(0, 2000));
