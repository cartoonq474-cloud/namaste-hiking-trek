const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sAlt = html.indexOf('id="section-altitude-profile"');
const rest = html.substring(sAlt);

const sections = [];
const reg = /<section\s+id="([^"]+)"[^>]*>/gi;
let m;
while ((m = reg.exec(rest)) !== null) {
  sections.push(m[1]);
}
console.log('Remaining sections:');
console.log(sections);
