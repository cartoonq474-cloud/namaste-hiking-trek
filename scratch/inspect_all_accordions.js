const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<!-- Item (\d+): ([^>]+) -->[\s\S]*?<div class="detail-accordion-card" data-detail-id="([^"]+)">[\s\S]*?<h4 class="detail-accordion-title">([^<]+)<\/h4>/g;
let match;
const items = [];
while ((match = regex.exec(html)) !== null) {
  items.push({
    itemNum: match[1],
    commentTitle: match[2].trim(),
    detailId: match[3],
    title: match[4].trim(),
    index: match.index
  });
}

console.log('Found accordion items:', items.length);
items.forEach(it => {
  console.log(`Item ${it.itemNum} [id="${it.detailId}"]: ${it.title} (comment: ${it.commentTitle})`);
});
