const fs = require('fs');
const path = require('path');

const trekDir = 'trek';
if (fs.existsSync(trekDir)) {
  const treks = fs.readdirSync(trekDir);
  console.log(`Found ${treks.length} packages in trek/:`);
  treks.forEach(t => {
    const indexPath = path.join(trekDir, t, 'index.html');
    const hasIndex = fs.existsSync(indexPath);
    console.log(`  - ${t} (index.html: ${hasIndex})`);
  });
} else {
  console.log('trek directory does not exist');
}
