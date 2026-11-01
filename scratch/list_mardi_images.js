const fs = require('fs');
const path = require('path');

const dir = 'images/treks/mardi-himal';
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  console.log(`Found ${files.length} images in ${dir}:`);
  files.forEach(f => console.log(' - ' + f));
} else {
  console.log('Dir does not exist:', dir);
}

const dir2 = 'Trek Images/Mardi Himal';
if (fs.existsSync(dir2)) {
  const files2 = fs.readdirSync(dir2);
  console.log(`Found ${files2.length} images in ${dir2}:`);
  files2.slice(0, 10).forEach(f => console.log(' - ' + f));
}
