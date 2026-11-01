const fs = require('fs');

const icons = JSON.parse(fs.readFileSync('scratch/khopra_detail_icons.json', 'utf8'));
icons.forEach((item, idx) => {
  console.log(`${idx + 1}. [${item.id}] ${item.title}`);
});
