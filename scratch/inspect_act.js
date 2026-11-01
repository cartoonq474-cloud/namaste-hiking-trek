const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/gi;
const sections = [];
let m;
while ((m = regex.exec(act)) !== null) {
  sections.push(m[1]);
}
console.log('ACT Sections:', sections);
console.log('ACT length:', act.length, 'lines:', act.split('\n').length);
