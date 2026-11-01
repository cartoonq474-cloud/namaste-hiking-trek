const fs = require('fs');
const s3 = fs.readFileSync('scratch/verify_stage3_includes_dates_packing.js', 'utf8');
const lines = s3.split('\n');
console.log(lines.slice(20, 60).join('\n'));
