const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const regex = /<div class="detail-accordion-card" id="([^"]+)">[\s\S]*?<div class="detail-badge-pill">([^<]+)<\/div>[\s\S]*?<h3 class="detail-title">([^<]+)<\/h3>[\s\S]*?<div class="detail-text-body">([\s\S]*?)<\/div>/gi;

let match;
let count = 0;
while ((match = regex.exec(html)) !== null) {
  count++;
  const id = match[1];
  const badge = match[2].trim();
  const title = match[3].trim();
  const bodyText = match[4].replace(/<[^>]+>/g, '').trim();
  const wordCount = bodyText.split(/\s+/).length;
  console.log(`\n[${count}] ID: ${id} | Badge: "${badge}"`);
  console.log(`Title: ${title}`);
  console.log(`Words: ${wordCount} words`);
  console.log(`Snippet: ${bodyText.substring(0, 120)}...`);
}
