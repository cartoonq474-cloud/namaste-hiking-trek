const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');
console.log('Content length:', content.length);

// Look for days in content.md
const lines = content.split('\n');
const dayLines = [];
lines.forEach((l, idx) => {
  if (l.match(/Day\s*\d+/i) || l.includes('Tilicho') || l.includes('Thorong')) {
    if (l.length < 200) {
      dayLines.push(`${idx}: ${l.trim()}`);
    }
  }
});
console.log('Sample matched lines:');
console.log(dayLines.slice(0, 40).join('\n'));
