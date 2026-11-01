const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');
const start = html.indexOf('id="section-overview"');
const end = html.indexOf('id="section-itinerary"');
const sec1 = html.substring(start, end);

// Find all h2, h3, h4
const headings = [];
const regex = /<(h[2-4])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = regex.exec(sec1)) !== null) {
  headings.push({ tag: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() });
}
console.log('Headings in Section 1:');
console.log(headings);

// Check if there are tables, cards, etc.
console.log('Contains table:', sec1.includes('<table'));
console.log('Contains highlight-card or similar:', sec1.match(/class="[^"]*highlight[^"]*"/g));

