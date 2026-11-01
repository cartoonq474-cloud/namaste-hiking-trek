const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const start = ebcHtml.indexOf('id="section-details"');
const end = ebcHtml.indexOf('id="section-altitude-profile"');
const sec = ebcHtml.substring(start, end);

const cardRegex = /<div class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"[^>]*>[\s\S]*?<div class="detail-icon-container">([\s\S]*?)<\/div>[\s\S]*?<h3 class="detail-accordion-title">([\s\S]*?)<\/h3>/g;

const items = [];
let m;
while ((m = cardRegex.exec(sec)) !== null) {
  items.push({
    id: m[1],
    title: m[3].replace(/<[^>]+>/g, '').trim(),
    iconSnippet: m[2].trim()
  });
}

console.log('Total extracted EBC cards:', items.length);
items.forEach((it, i) => {
  console.log(`${i + 1}. [${it.id}] ${it.title}`);
});

fs.writeFileSync('scratch/ebc_21_items.json', JSON.stringify(items, null, 2), 'utf8');
