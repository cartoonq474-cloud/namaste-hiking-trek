const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexPath, 'utf8');

// Find all sections or major wrappers
const lines = content.split('\n');
console.log(`Total lines in index.html: ${lines.length}`);

// Let's inspect sections and their headings
const sectionRegex = /<section[\s\S]*?>/gi;
const matches = [];

let pos = 0;
while (true) {
  const match = content.indexOf('<section', pos);
  if (match === -1) break;
  const tagEnd = content.indexOf('>', match);
  const tag = content.substring(match, tagEnd + 1);
  
  // calculate line number
  const lineNumber = content.substring(0, match).split('\n').length;
  
  // find first heading after this section
  const nextHeadingMatch = content.substring(match, match + 1500).match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/i);
  let heading = 'None';
  if (nextHeadingMatch) {
    heading = `<${nextHeadingMatch[1]}> ${nextHeadingMatch[2].replace(/\s+/g, ' ').trim().substring(0, 80)}`;
  }

  // find closing tag or next section
  matches.push({
    line: lineNumber,
    tag: tag.replace(/\s+/g, ' ').trim(),
    heading
  });
  pos = tagEnd + 1;
}

console.log('\n--- HOMEPAGE SECTIONS IN ORDER ---');
matches.forEach((m, idx) => {
  console.log(`${idx + 1}. Line ${m.line}: ${m.tag}\n   Heading: ${m.heading}\n`);
});
