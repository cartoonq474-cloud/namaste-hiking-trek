const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const idx = html.indexOf('How high are Everest Base Camp and Kala Patthar?');
console.log('Index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 200, idx + 400));
}

