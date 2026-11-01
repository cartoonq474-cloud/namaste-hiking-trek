const fs = require('fs');

const file = 'trek/annapurna-circuit-trek-with-tilicho-lake/index.html';
const html = fs.readFileSync(file, 'utf8');

const emojiRegex = /[\p{Extended_Pictographic}]/gu;
const matches = [];
let match;

const lines = html.split('\n');
lines.forEach((line, idx) => {
  const lineMatches = line.match(emojiRegex);
  if (lineMatches) {
    matches.push({ line: idx + 1, emojis: lineMatches.join(', '), snippet: line.trim().substring(0, 80) });
  }
});

if (matches.length > 0) {
  console.log(`Found ${matches.length} lines with emojis:`);
  matches.forEach(m => console.log(`  L${m.line}: ${m.emojis} -> ${m.snippet}`));
} else {
  console.log('Zero cartoon/AI emojis found! Completely clean vector SVG implementation.');
}
