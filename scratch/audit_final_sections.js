const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Find all sections
const matches = [];
let pos = 0;
while (true) {
  const match = content.indexOf('<section', pos);
  if (match === -1) break;
  const tagEnd = content.indexOf('>', match);
  const tag = content.substring(match, tagEnd + 1);
  const lineNumber = content.substring(0, match).split('\n').length;
  const nextHeadingMatch = content.substring(match, match + 1500).match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/i);
  let heading = 'None';
  if (nextHeadingMatch) {
    heading = `<${nextHeadingMatch[1]}> ${nextHeadingMatch[2].replace(/\s+/g, ' ').trim().substring(0, 80)}`;
  }
  matches.push({ line: lineNumber, tag: tag.replace(/\s+/g, ' ').trim(), heading });
  pos = tagEnd + 1;
}

console.log('--- ALL SECTIONS IN INDEX.HTML NOW ---');
matches.forEach((m, idx) => {
  console.log(`${idx + 1}. Line ${m.line}: ${m.tag}\n   Heading: ${m.heading}\n`);
});
