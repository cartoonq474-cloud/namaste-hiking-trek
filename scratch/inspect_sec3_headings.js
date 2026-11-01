const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const sec3 = html.substring(s3, s4);

const headings = [];
const reg = /<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi;
let m;
while ((m = reg.exec(sec3)) !== null) {
  headings.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Headings in sec3:');
console.log(headings);

