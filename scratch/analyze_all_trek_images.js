const fs = require('fs');
const path = require('path');

const csv = fs.readFileSync('Trek Images/image-name-map.csv', 'utf8');
const lines = csv.split('\n').filter(l => l.trim().length > 0);

const data = [];
for (let i = 1; i < lines.length; i++) {
  // simple csv split handling quotes
  const matches = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
  if (!matches || matches.length < 5) continue;
  const trek = matches[0].replace(/^"|"$/g, '');
  const index = matches[1].replace(/^"|"$/g, '');
  const orig = matches[2].replace(/^"|"$/g, '');
  const optName = matches[3].replace(/^"|"$/g, '');
  const desc = matches[4].replace(/^"|"$/g, '');
  data.push({ trek, index, orig, optName, desc });
}

console.log(`Parsed ${data.length} image records from CSV.`);

// Group by trek
const byTrek = {};
data.forEach(d => {
  if (!byTrek[d.trek]) byTrek[d.trek] = [];
  byTrek[d.trek].push(d);
});

for (const [trek, imgs] of Object.entries(byTrek)) {
  console.log(`\n========================================`);
  console.log(`Trek: ${trek} (${imgs.length} images)`);
  console.log(`========================================`);
  imgs.forEach((img, idx) => {
    console.log(`  ${idx + 1}. [${img.optName}] -> ${img.desc}`);
  });
}
