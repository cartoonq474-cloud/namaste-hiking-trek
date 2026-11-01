const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<section id="section-includes"');
const eIdx = evt.indexOf('</section>', sIdx) + 10;
const sec3 = evt.slice(sIdx, eIdx);

const incIdx = sec3.indexOf("What's Included in the 7-Day Package");
const excIdx = sec3.indexOf("What's Not Included");

const incChunk = sec3.slice(incIdx, excIdx);
const excChunk = sec3.slice(excIdx);

function extractItems(chunk) {
  const items = [];
  const regex = /<h4 class="inc-exc-title">([\s\S]*?)<\/h4>[\s\S]*?<p class="inc-exc-desc">([\s\S]*?)<\/p>/g;
  let m;
  while ((m = regex.exec(chunk)) !== null) {
    items.push({
      title: m[1].replace(/<[^>]+>/g, '').trim(),
      desc: m[2].replace(/<[^>]+>/g, '').trim()
    });
  }
  return items;
}

const incItems = extractItems(incChunk);
const excItems = extractItems(excChunk);

console.log('Includes items count:', incItems.length);
incItems.forEach((it, i) => console.log(`Inc ${i + 1}: ${it.title}`));

console.log('\nExcludes items count:', excItems.length);
excItems.forEach((it, i) => console.log(`Exc ${i + 1}: ${it.title}`));

fs.writeFileSync('scratch/evt_inc_items.json', JSON.stringify(incItems, null, 2), 'utf8');
fs.writeFileSync('scratch/evt_exc_items.json', JSON.stringify(excItems, null, 2), 'utf8');
