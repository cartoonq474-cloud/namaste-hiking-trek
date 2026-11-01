const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scratch/ebc_full_structure.json', 'utf8'));

for (const [id, sec] of Object.entries(data)) {
  console.log(`\n================== ${id} ==================`);
  console.log('Headings in EBC:');
  sec.headings.forEach(h => console.log('  ', h.replace(/\n\s*/g, ' ')));
  console.log('Classes in EBC:');
  console.log('  ', sec.classesSample.slice(0, 8).join(', '));
  console.log('First 300 chars:');
  console.log('  ', sec.first1000Chars.substring(0, 300).replace(/\n\s*/g, ' '));
}
