const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');
const s5 = html.indexOf('<!-- Section 5: Trip Details -->');
const s6 = html.indexOf('<!-- Section 6:');
const s5Text = html.substring(s5, s6);

const regex = /data-detail-id="([^"]+)"[\s\S]*?<h4 class="detail-accordion-title">([^<]+)<\/h4>/g;
let m;
const items = [];
while ((m = regex.exec(s5Text)) !== null) {
  items.push({ id: m[1], title: m[2].trim() });
}
console.log('Total items in Section 5:', items.length);
console.log(JSON.stringify(items, null, 2));
