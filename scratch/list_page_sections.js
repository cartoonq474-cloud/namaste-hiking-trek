const fs = require('fs');

const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// Find all sections with an id
const regex = /<section id="([^"]+)"[\s\S]*?(?:<h2[^>]*>([\s\S]*?)<\/h2>|<div class="details-main-title">([\s\S]*?)<\/div>)/gi;

let match;
let count = 0;
const sections = [];

while ((match = regex.exec(html)) !== null) {
  count++;
  const id = match[1];
  const title = (match[2] || match[3] || '').replace(/<[^>]+>/g, '').trim();
  sections.push({ num: count, id, title });
}

console.log(`Found ${sections.length} main content sections:\n`);
sections.forEach(s => {
  console.log(`${s.num}. ID: #${s.id}`);
  console.log(`   Title: "${s.title}"\n`);
});

// Also check the sub-nav tabs to see how they map
console.log('--- Sub-Nav Tabs ---');
const navRegex = /data-tab="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g;
let nMatch;
let nIdx = 0;
while ((nMatch = navRegex.exec(html)) !== null) {
  nIdx++;
  const tab = nMatch[1];
  const label = nMatch[2].replace(/<[^>]+>/g, '').trim();
  console.log(`Tab ${nIdx}: data-tab="${tab}" -> Label: "${label}"`);
}
