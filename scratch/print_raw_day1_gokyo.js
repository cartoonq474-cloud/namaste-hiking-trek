const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const d1 = gokyo.indexOf('data-day="1"');
const d2 = gokyo.indexOf('data-day="2"');
console.log('=== DAY 1 RAW GOKYO ===');
console.log(gokyo.slice(d1, d2));
