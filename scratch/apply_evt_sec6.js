const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

const startIdx = lines.findIndex(l => l.includes('id="section-details"'));
let commentStartIdx = startIdx;
while (commentStartIdx > 0 && lines[commentStartIdx - 1].includes('<!-- SECTION 6')) {
  commentStartIdx--;
}

const endIdx = lines.findIndex((l, i) => i > startIdx && (l.includes('id="section-altitude-profile"') || l.includes('id="section-weather"')));

console.log(`Replacing lines from ${commentStartIdx + 1} to ${endIdx}`);
console.log(`First line to replace: ${lines[commentStartIdx]}`);
console.log(`Last line to replace: ${lines[endIdx - 1]}`);
console.log(`Next line untouched: ${lines[endIdx]}`);

const beforeLines = lines.slice(0, commentStartIdx);
const afterLines = lines.slice(endIdx);

const sec6Content = fs.readFileSync('scratch/evt_section6_upgraded.html', 'utf8').trimEnd();

const newContent = beforeLines.join('\n') + '\n' + sec6Content + '\n\n' + afterLines.join('\n');

// Validation checks
const openDiv = (newContent.match(/<div(\s|>)/gi) || []).length;
const closeDiv = (newContent.match(/<\/div>/gi) || []).length;
const openSec = (newContent.match(/<section(\s|>)/gi) || []).length;
const closeSec = (newContent.match(/<\/section>/gi) || []).length;

console.log(`New content tag balance:`);
console.log(`  Divs: open=${openDiv}, close=${closeDiv}, diff=${openDiv - closeDiv}`);
console.log(`  Sections: open=${openSec}, close=${closeSec}, diff=${openSec - closeSec}`);

// Check emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const hasEmoji = emojiRegex.test(newContent);
console.log(`Contains emojis: ${hasEmoji}`);

if (openDiv === closeDiv && openSec === closeSec && !hasEmoji) {
  fs.writeFileSync('trek/everest-view-trek/index.html', newContent, 'utf8');
  console.log('Successfully updated trek/everest-view-trek/index.html!');
} else {
  console.error('Validation failed! Not writing to file.');
}
