const fs = require('fs');

const origPath = 'trek/everest-view-trek/index.html';
const origContent = fs.readFileSync(origPath, 'utf8');
const newHighlights = fs.readFileSync('scratch/evt_highlights_upgraded.html', 'utf8').trim();

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

const lines = origContent.split('\n');

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- 1B: Distinct Highlights Section -->') || lines[i].includes('class="ebc-highlights-section"')) {
    if (startIndex === -1) startIndex = i;
  }
  if (lines[i].includes('class="ebc-glance-box"') || lines[i].includes('<!-- At a Glance: Feature Box -->')) {
    endIndex = i;
    break;
  }
}

// Find the closing </div> of ebc-highlights-section just before endIndex
let closeDivIndex = -1;
for (let i = endIndex - 1; i >= startIndex; i--) {
  if (lines[i].includes('</div>')) {
    closeDivIndex = i;
    break;
  }
}

console.log(`Target replacement lines: ${startIndex + 1} to ${closeDivIndex + 1}`);
console.log(`Line ${startIndex + 1}: ${lines[startIndex]}`);
console.log(`Line ${closeDivIndex + 1}: ${lines[closeDivIndex]}`);
console.log(`Next line ${closeDivIndex + 2}: ${lines[closeDivIndex + 1]}`);

const before = lines.slice(0, startIndex);
const after = lines.slice(closeDivIndex + 1);

const updatedContent = before.join('\n') + '\n' + newHighlights + '\n\n' + after.join('\n');

console.log('\nUpdated file check:');
const isBalanced = checkTags(updatedContent, 'Updated');

if (!isBalanced) {
  console.error('ERROR: Updated file has tag mismatches! Aborting.');
  process.exit(1);
}

fs.writeFileSync(origPath, updatedContent, 'utf8');
console.log('\nSUCCESS! trek/everest-view-trek/index.html updated successfully with upgraded Highlights!');
