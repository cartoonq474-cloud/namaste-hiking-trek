const fs = require('fs');

const raw = fs.readFileSync('scratch/user_mustang_content.txt', 'utf8');
const lines = raw.split(/\r?\n/);

console.log('Total lines in user content:', lines.length);

let headings = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  // Check if line looks like a major section heading
  if (line.length > 0 && line.length < 90) {
    // If followed by non-empty or empty line and looks like title
    const nextLine = lines[i+1] ? lines[i+1].trim() : '';
    if (
      line.startsWith('Upper Mustang') ||
      line.startsWith('Day ') ||
      line.startsWith('Classic ') ||
      line.startsWith('What ') ||
      line.startsWith('Why ') ||
      line.startsWith('How ') ||
      line.startsWith('Where ') ||
      line.startsWith('Is ') ||
      line.startsWith('Accommodation') ||
      line.startsWith('Meals') ||
      line.startsWith('Food') ||
      line.startsWith('Permits') ||
      line.startsWith('Difficulty') ||
      line.startsWith('Altitude') ||
      line.startsWith('Best ') ||
      line.startsWith('Packing') ||
      line.startsWith('Safety') ||
      line.startsWith('Route') ||
      line.startsWith('Lo Manthang') ||
      line.startsWith('Namgyal') ||
      line.startsWith('Drakmar') ||
      line.startsWith('Sangboche') ||
      line.startsWith('Chhusang') ||
      line.startsWith('Muktinath') ||
      line.startsWith('Jomsom') ||
      line.startsWith('Kagbeni') ||
      line.startsWith('Chele') ||
      line.startsWith('Gheling') ||
      line.startsWith('Charang')
    ) {
      headings.push({ lineNum: i + 1, text: line });
    }
  }
}

console.log('Detected potential headings count:', headings.length);
fs.writeFileSync('scratch/user_mustang_headings.json', JSON.stringify(headings, null, 2), 'utf8');

// Print first 40 headings
console.log('First 40 headings:');
headings.slice(0, 40).forEach(h => console.log(`  Line ${h.lineNum}: ${h.text}`));
