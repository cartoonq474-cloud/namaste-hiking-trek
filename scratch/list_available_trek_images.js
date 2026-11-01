const fs = require('fs');
const path = require('path');

const treksDir = 'images/treks';
const slugs = fs.readdirSync(treksDir).filter(f => fs.statSync(path.join(treksDir, f)).isDirectory());

slugs.forEach(slug => {
  const files = fs.readdirSync(path.join(treksDir, slug));
  console.log(`\n=== ${slug} (${files.length} photos) ===`);
  files.forEach(f => console.log(`  ${f}`));
});
