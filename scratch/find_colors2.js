const fs = require('fs');

const cssContent = fs.readFileSync('index.css', 'utf8');

// Find color variables
const rootMatch = cssContent.match(/:root\s*\{[\s\S]*?\}/);
if (rootMatch) {
  console.log('CSS :root variables in index.css:');
  console.log(rootMatch[0].split('\n').filter(l => l.includes('--color-')).join('\n'));
}

// Find colors in EBC
const ebcContent = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const ebcColors = [...ebcContent.matchAll(/(#[0-9a-fA-F]{3,8}|var\(--color-[^)]+\))/g)].map(m => m[1]);
const colorCounts = {};
ebcColors.forEach(c => { colorCounts[c] = (colorCounts[c] || 0) + 1; });
console.log('\nTop 20 colors/vars used in EBC:');
console.log(Object.entries(colorCounts).sort((a,b) => b[1] - a[1]).slice(0, 25));
