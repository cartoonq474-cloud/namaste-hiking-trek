const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Find all occurrences of "EBC" or "Everest Base Camp" in gokyo
const lines = gokyo.split('\n');
console.log('=== LINES MENTIONING EBC OR EVEREST BASE CAMP ===');
lines.forEach((line, index) => {
  if (/\b(ebc|everest base camp)\b/i.test(line)) {
    // Show line if not just a comparison
    console.log(`L${index + 1}: ${line.trim().slice(0, 150)}`);
  }
});
