const fs = require('fs');
const path = require('path');

const dir = path.join('images', 'treks', 'mera-peak');
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  console.log(`Found ${files.length} images in ${dir}:`);
  files.forEach(f => console.log(' - ' + f));
} else {
  console.log('Dir does not exist:', dir);
}

