const fs = require('fs');

const text = fs.readFileSync('scratch/kanchenjunga_prompt.txt', 'utf8');

// Match lines that look like main section titles (lines with no period at end, or specific keywords)
const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

console.log('Total non-empty lines:', lines.length);

const sectionCandidates = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (
    line.length < 90 && 
    !line.endsWith('.') && 
    !line.endsWith(',') && 
    !line.startsWith('-') &&
    !line.includes('\t') &&
    !line.startsWith('Day ')
  ) {
    sectionCandidates.push({ lineNum: i + 1, text: line });
  }
}

console.log('Candidate Section Headers:');
sectionCandidates.forEach(s => console.log('  ' + s.text));
