const fs = require('fs');

const pages = [
  'everest-region-treks/index.html',
  'trek/everest-base-camp-trek/index.html',
  'trek/mera-peak-climbing/index.html'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const hasMega = text.includes('tab-everest');
    console.log(`Page "${p}" has tab-everest: ${hasMega}`);
  }
}

