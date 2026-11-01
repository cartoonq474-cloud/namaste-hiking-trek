const fs = require('fs');

const hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');

const p = hub.indexOf('id="best-treks"');
const end = hub.indexOf('</section>', p);
const section = hub.substring(p, end);

const cards = [...section.matchAll(/<a\s+href="([^"]+)"[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
console.log('Cards in best-treks on hub:');
cards.forEach((c, i) => {
  console.log(`${i+1}. ${c[2].trim()} -> ${c[1]}`);
});
