const fs = require('fs');

const s9 = fs.readFileSync('scratch/restored_s9_section.html', 'utf8');

const vidMatch = s9.match(/<div id="video-reviews"[\s\S]*?(?=<div id="customer-reviews")/);
if (vidMatch) {
  const bgs = [...vidMatch[0].matchAll(/background-image:\s*url\('([^']+)'\)/g)].map(m => m[1]);
  console.log('Video card backgrounds in restored section:');
  bgs.forEach((bg, idx) => console.log(`  Card ${idx + 1}: ${bg}`));
}
