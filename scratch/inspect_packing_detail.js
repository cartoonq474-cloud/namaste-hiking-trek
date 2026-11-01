const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sPack = html.indexOf('id="section-packing"');
const sNext = html.indexOf('id="section-details"');
const secPack = html.substring(sPack, sNext);

// Find headings, checklist counters, categories
const cats = [];
const reg = /<h3[^>]*>([\s\S]*?)<\/h3>/gi;
let m;
while ((m = reg.exec(secPack)) !== null) {
  cats.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Categories / h3 in packing:');
console.log(cats);

const checklistItems = (secPack.match(/class="[^"]*packing-item[^"]*"/g) || []).length;
console.log('Number of packing-item elements:', checklistItems);

// Check first packing-item markup
const firstItem = secPack.indexOf('class="packing-item');
console.log('First packing item:');
console.log(secPack.substring(firstItem, firstItem + 500));

