const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

const startIdx = lines.findIndex(l => l.includes('<!-- SECTION 2: ITINERARY -->'));
const endIdx = lines.findIndex(l => l.includes('<!-- SECTION 3: INCLUDES & EXCLUDES -->'));

console.log(`Found startIdx: ${startIdx} (line ${startIdx + 1})`);
console.log(`Found endIdx: ${endIdx} (line ${endIdx + 1})`);

if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not find start or end marker!');
}

const beforeLines = lines.slice(0, startIdx);
const afterLines = lines.slice(endIdx);

const sec2Content = fs.readFileSync('scratch/evt_sec2_generated.html', 'utf8').trimEnd();

const newContent = beforeLines.join('\n') + '\n' + sec2Content + '\n\n        ' + afterLines.join('\n');

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
