const fs = require('fs');

const indexPath = 'index.html';
const content = fs.readFileSync(indexPath, 'utf8');

// 1. Locate Section 9: starts with '    <!-- Interactive 3-Tab Review Section' or '<section id="reviews-section"'
// and ends right before '    <!-- Section 3: Himalayan Trekking Experience Gallery -->'
const s9MarkerStart = '<!-- Interactive 3-Tab Review Section';
const s9MarkerEnd = '<!-- Section 3: Himalayan Trekking Experience Gallery -->';

const idxS9Start = content.indexOf(s9MarkerStart);
const idxS9End = content.indexOf(s9MarkerEnd);

if (idxS9Start === -1 || idxS9End === -1) {
  console.error('Error: Could not find S9 markers', { idxS9Start, idxS9End });
  process.exit(1);
}

// 2. Locate Section 14: starts with '    <!-- Section: Interactive Platform & Client Reviews Switcher -->'
// and ends right before '<!-- Section 4.5: Resources Related to Himalayan Trekking'
const s14MarkerStart = '<!-- Section: Interactive Platform & Client Reviews Switcher -->';
const s14MarkerEnd = '<!-- Section 4.5: Resources Related to Himalayan Trekking';

const idxS14Start = content.indexOf(s14MarkerStart);
const idxS14End = content.indexOf(s14MarkerEnd);

if (idxS14Start === -1 || idxS14End === -1) {
  console.error('Error: Could not find S14 markers', { idxS14Start, idxS14End });
  process.exit(1);
}

const masterSection = fs.readFileSync('scratch/master_review_section.html', 'utf8');

// Perform replacement
// First replace S14 with empty string
let newContent = content.substring(0, idxS14Start) + content.substring(idxS14End);

// Then replace S9 with masterSection
const newIdxS9Start = newContent.indexOf(s9MarkerStart);
const newIdxS9End = newContent.indexOf(s9MarkerEnd);

newContent = newContent.substring(0, newIdxS9Start) + masterSection + newContent.substring(newIdxS9End);

// Write to test file first
fs.writeFileSync('scratch/test_index.html', newContent);
console.log('Successfully written scratch/test_index.html, original length:', content.length, 'new length:', newContent.length);

// Audit test_index.html
const testMatches = [];
let pos = 0;
while (true) {
  const match = newContent.indexOf('<section', pos);
  if (match === -1) break;
  const tagEnd = newContent.indexOf('>', match);
  const tag = newContent.substring(match, tagEnd + 1);
  const lineNumber = newContent.substring(0, match).split('\n').length;
  const nextHeadingMatch = newContent.substring(match, match + 1500).match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/i);
  let heading = 'None';
  if (nextHeadingMatch) {
    heading = `<${nextHeadingMatch[1]}> ${nextHeadingMatch[2].replace(/\s+/g, ' ').trim().substring(0, 80)}`;
  }
  testMatches.push({ line: lineNumber, tag: tag.replace(/\s+/g, ' ').trim(), heading });
  pos = tagEnd + 1;
}

console.log('\n--- SECTIONS IN NEW TEST INDEX ---');
testMatches.forEach((m, idx) => {
  console.log(`${idx + 1}. Line ${m.line}: ${m.tag}\n   Heading: ${m.heading}\n`);
});
