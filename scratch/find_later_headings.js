const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

console.log('=== FINDING HEADINGS AFTER DAY 21 ===');
for (let i = 635; i < lines.length; i++) {
  const l = lines[i].trim();
  // Look for lines that look like headers (short, not ending in period, capitalized or special)
  if (l.length > 0 && l.length < 75 && !l.endsWith('.') && !l.endsWith(',') && !l.endsWith(';') && !l.startsWith('-') && !l.startsWith('•')) {
    console.log(`L${i+1}: ${l}`);
  }
}

