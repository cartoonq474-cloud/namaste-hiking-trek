const fs = require('fs');

const origPath = 'trek/everest-view-trek/index.html';
const origContent = fs.readFileSync(origPath, 'utf8');
const newSection1 = fs.readFileSync('scratch/evt_section1_upgraded.html', 'utf8').trim();

// Verify original tag balance
function checkTags(html, label) {
  const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'span', 'ul', 'li'];
  console.log(`--- Tag Balance for ${label} ---`);
  let balanced = true;
  for (const t of tags) {
    const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
    const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
    const ok = o === c;
    if (!ok) balanced = false;
    console.log(`${t.padEnd(8)}: open = ${o}, close = ${c} ${ok ? '[BALANCED]' : '[MISMATCH!]'}`);
  }
  return balanced;
}

console.log('Original file check:');
checkTags(origContent, 'Original');

// Find boundaries
const lines = origContent.split('\n');

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- Section 1: Overview -->') || lines[i].includes('<!-- SECTION 1: OVERVIEW -->')) {
    if (startIndex === -1) startIndex = i;
  }
  if (lines[i].includes('<!-- SECTION 2: ITINERARY -->')) {
    endIndex = i;
    break;
  }
}

// Find the closing </section> just before endIndex
let secCloseIndex = -1;
for (let i = endIndex - 1; i >= startIndex; i--) {
  if (lines[i].includes('</section>')) {
    secCloseIndex = i;
    break;
  }
}

console.log(`Target replacement lines: ${startIndex + 1} to ${secCloseIndex + 1}`);
console.log(`Line ${startIndex + 1}: ${lines[startIndex]}`);
console.log(`Line ${secCloseIndex + 1}: ${lines[secCloseIndex]}`);
console.log(`Next line ${secCloseIndex + 2}: ${lines[secCloseIndex + 1]}`);

// Splice lines
const before = lines.slice(0, startIndex);
const after = lines.slice(secCloseIndex + 1);

const updatedContent = before.join('\n') + '\n' + newSection1 + '\n\n' + after.join('\n');

console.log('\nUpdated file check:');
const isBalanced = checkTags(updatedContent, 'Updated');

if (!isBalanced) {
  console.error('ERROR: Updated file has tag mismatches! Aborting.');
  process.exit(1);
}

// Save backup just in case
fs.writeFileSync('trek/everest-view-trek/index.html.bak', origContent, 'utf8');

// Write updated content
fs.writeFileSync(origPath, updatedContent, 'utf8');
console.log('\nSUCCESS! trek/everest-view-trek/index.html updated successfully with Section 1!');
