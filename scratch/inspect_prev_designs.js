const fs = require('fs');
const { execSync } = require('child_process');

// Let's inspect git commits that worked on video reviews and customer reviews
const log = execSync('git log -n 15 --oneline', { encoding: 'utf8' });
console.log('Recent 15 commits:\n', log);

// Let's check scratch/s9_dump.html which was dumped before our last edit
if (fs.existsSync('scratch/s9_dump.html')) {
  const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');
  console.log('\n--- S9 Video Reviews (first 2500 chars) ---');
  const vidMatch = s9.match(/<div id="video-reviews"[\s\S]*?(?=<div id="customer-reviews")/);
  if (vidMatch) {
    console.log(vidMatch[0].substring(0, 2500));
  }
  
  console.log('\n--- S9 Customer Reviews (first 2500 chars) ---');
  const custMatch = s9.match(/<div id="customer-reviews"[\s\S]*?(?=<div id="platform-reviews")/);
  if (custMatch) {
    console.log(custMatch[0].substring(0, 2500));
  }
}
