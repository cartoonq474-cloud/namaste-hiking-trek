const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('--- EVT subnav links ---');
const subnavMatch = evt.match(/<nav[^>]*class="[^"]*trek-subnav[^"]*"[^>]*>([\s\S]*?)<\/nav>/i) || evt.match(/id="trek-subnav"[^>]*>([\s\S]*?)<\/nav>/i);
if (subnavMatch) {
  const links = [...subnavMatch[1].matchAll(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi)];
  links.forEach(l => console.log('Link: ' + l[1] + ' -> ' + l[2].trim()));
} else {
  console.log('No subnav found with regex');
}

console.log('\n--- EVT All Sections with id and h2 ---');
const secRegex = /<section[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/section>/gi;
let m;
while ((m = secRegex.exec(evt)) !== null) {
  const id = m[1];
  const h2Match = m[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'NO H2';
  console.log(`id="${id}" | H2: "${h2}"`);
}

console.log('\n--- EBC All Sections with id and h2 ---');
while ((m = secRegex.exec(ebc)) !== null) {
  const id = m[1];
  const h2Match = m[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'NO H2';
  console.log(`id="${id}" | H2: "${h2}"`);
}

console.log('\n--- Check Hero quick highlights or Key Highlights on EVT vs EBC ---');
const heroEvt = evt.slice(0, 1500);
console.log('Any highlights in Hero or near Top?');
const topHighlights = [...evt.matchAll(/class="[^"]*highlight[^"]*"[^>]*>([\s\S]*?)<\//gi)];
console.log('Top highlight class occurrences:', topHighlights.length);
topHighlights.slice(0, 5).forEach((t, i) => console.log(i + ': ' + t[0].slice(0, 80)));
