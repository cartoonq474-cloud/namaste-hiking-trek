const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<nav[^>]*>([\s\S]*?)<\/nav>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null) {
  count++;
  console.log(`Nav ${count}:`, m[0].substring(0, 300));
}

const tabMatches = [...html.matchAll(/class="[^"]*(?:nav-tab|trek-tab|detail-nav|sticky-nav)[^"]*"/gi)];
tabMatches.forEach(tm => console.log('Found tab class:', tm[0]));
