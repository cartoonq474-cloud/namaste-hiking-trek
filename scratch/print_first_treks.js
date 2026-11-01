const fs = require('fs');

const lines = fs.readFileSync('Trek Images/image-name-map.csv', 'utf8').split('\n').filter(l => l.trim().length > 0);
const treks = ['"Annapurna Base Camp"', '"Annapurna Circuit and Tilicho Lake"', '"Everest Base Camp"', '"Everest with Cho La Pass"'];

treks.forEach(t => {
  console.log(`\n========================================`);
  console.log(`Trek: ${t}`);
  console.log(`========================================`);
  lines.forEach(l => {
    if (l.startsWith(t)) {
      const parts = l.split(',');
      console.log(`  ${parts[1].replace(/"/g, '')}. [${parts[3].replace(/"/g, '')}] -> ${parts[4].replace(/"/g, '')}`);
    }
  });
});
