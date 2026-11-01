const fs = require('fs');
const s = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');

// Regex for emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;
let matches = [];
let m;
while ((m = emojiRegex.exec(s)) !== null) {
  matches.push({ char: m[0], index: m.index });
}

console.log('Total emoji matches:', matches.length);
matches.forEach((item, idx) => {
  const lineNum = s.substring(0, item.index).split('\n').length;
  const line = s.split('\n')[lineNum - 1].trim();
  console.log(`${idx+1}: Line ${lineNum} -> [${item.char}] | ${line.substring(0, 100)}`);
});
