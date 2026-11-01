const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const sec3 = html.substring(s3, s4);

const incTitles = [];
const reg = /<div class="inc-exc-card-title">([\s\S]*?)<\/div>/gi;
let m;
while ((m = reg.exec(sec3)) !== null) {
  incTitles.push(m[1].trim());
}
console.log('Includes/Excludes titles:');
console.log(incTitles);

