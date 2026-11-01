const fs = require('fs');

const lines = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8').split('\n');

console.log('Total lines in trek/everest-view-trek/index.html:', lines.length);

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('id="section-overview"') || (line.includes('SECTION 1: OVERVIEW') && startLine === -1)) {
    if (startLine === -1) startLine = i; // 0-based
  }
  if (line.includes('SECTION 2: ITINERARY') || line.includes('id="section-itinerary"')) {
    if (endLine === -1) endLine = i;
  }
}

console.log('Detected start index:', startLine, 'Line', startLine + 1, ':', lines[startLine]);
console.log('Detected end index (itinerary start):', endLine, 'Line', endLine + 1, ':', lines[endLine]);

// Print 5 lines before and after startLine
console.log('\n--- AROUND START ---');
for (let i = Math.max(0, startLine - 3); i <= Math.min(lines.length - 1, startLine + 5); i++) {
  console.log((i + 1) + ': ' + lines[i]);
}

// Find the closing </section> just before endLine
let closeSecLine = -1;
for (let i = endLine - 1; i >= startLine; i--) {
  if (lines[i].includes('</section>')) {
    closeSecLine = i;
    break;
  }
}
console.log('\n--- AROUND CLOSE SECTION ---');
console.log('Closing </section> at line', closeSecLine + 1, ':', lines[closeSecLine]);
for (let i = Math.max(0, closeSecLine - 3); i <= Math.min(lines.length - 1, closeSecLine + 3); i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
