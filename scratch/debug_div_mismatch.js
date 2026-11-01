const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

const origSlice = lines.slice(843, 1075).join('\n'); // 0-based lines 844 to 1075
const newSlice = fs.readFileSync('scratch/evt_highlights_upgraded.html', 'utf8');

function countDivs(str, label) {
  const o = (str.match(/<div[\s>]/gi) || []).length;
  const c = (str.match(/<\/div>/gi) || []).length;
  console.log(`${label}: open = ${o}, close = ${c}, diff = ${o - c}`);
}

countDivs(origSlice, 'Original slice (lines 844 to 1075)');
countDivs(newSlice, 'New slice (scratch/evt_highlights_upgraded.html)');

console.log('\n--- Lines 1070 to 1080 of original file ---');
for (let i = 1069; i < 1080; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
