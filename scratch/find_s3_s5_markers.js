const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const s5 = html.indexOf('id="section-packing"');

console.log('s3:', s3, 's4:', s4, 's5:', s5);
console.log('Before s3:');
console.log(html.substring(s3 - 100, s3 + 50));
console.log('Before s5:');
console.log(html.substring(s5 - 100, s5 + 50));

