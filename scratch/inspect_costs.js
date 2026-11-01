const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('scratch/parsed_user_content.json', 'utf8'));
const lines = parsed.costsText.split('\n');

console.log('Total lines in costsText:', lines.length);

const headings = [];
for (let i = 0; i < lines.length; i++) {
  const l = lines[i].trim();
  if (l.length > 0 && l.length < 80 && !l.endsWith('.') && !l.endsWith(',')) {
    headings.push({ line: i, text: l });
  }
}

console.log(`Found ${headings.length} headings in costsText:`);
headings.forEach(h => console.log(h.text));

