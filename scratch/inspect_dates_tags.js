const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s4 = html.indexOf('id="section-dates"');
const s5 = html.indexOf('id="section-packing"');
const sec4 = html.substring(s4, s5);

console.log('sec4 length:', sec4.length);
// print lines with class or tag
const lines = sec4.split('\n').filter(l => l.includes('class=') || l.includes('<div') || l.includes('<table') || l.includes('<tr'));
console.log('Sample structure lines:');
console.log(lines.slice(0, 40).join('\n'));

