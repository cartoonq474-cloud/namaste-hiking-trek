const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const regex = /<h3 class="detail-accordion-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="detail-accordion-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

let m;
let i = 1;
while ((m = regex.exec(evt)) !== null) {
  const title = m[1].trim();
  const body = m[2].trim();
  const text = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  console.log(`[Item ${i}] ${title}`);
  console.log(`  Length: ${text.length} chars | Words: ${text.split(' ').length}`);
  console.log(`  Sample: ${text.slice(0, 140)}...`);
  i++;
}
