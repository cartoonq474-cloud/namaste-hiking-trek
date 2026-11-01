const fs = require('fs');
const path = require('path');

const cholaDir = path.join('Trek Images', 'Everest with Cho La Pass');
if (fs.existsSync(cholaDir)) {
  const files = fs.readdirSync(cholaDir);
  console.log(`Found ${files.length} images in Trek Images/Everest with Cho La Pass:`);
  files.forEach(f => console.log(' ', f));
} else {
  console.log('Folder not found');
}
