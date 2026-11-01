const fs = require('fs');
const path = require('path');

const folderMap = {
  'Everest Base Camp': 'images/treks/everest-base-camp',
  'Mardi Himal': 'images/treks/mardi-himal',
  'Annapurna Circuit and Tilicho Lake': 'images/treks/annapurna-circuit',
  'Annapurna Base Camp': 'images/treks/annapurna-base-camp',
  'Gokyo Trek': 'images/treks/gokyo-lakes',
  'Everest with Cho La Pass': 'images/treks/everest-cho-la-pass',
  'Manaslu Circuit': 'images/treks/manaslu-circuit',
  'Gosaikunda Lake Trek': 'images/treks/gosaikunda-lake',
  'Langtang Trek': 'images/treks/langtang-valley',
  'Mera Peak': 'images/treks/mera-peak'
};

const srcBase = 'Trek Images';

let totalCopied = 0;

for (const [srcFolder, destFolder] of Object.entries(folderMap)) {
  const fullSrc = path.join(srcBase, srcFolder);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  const files = fs.readdirSync(fullSrc).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`Copying ${files.length} images from "${fullSrc}" to "${destFolder}"...`);

  files.forEach(file => {
    const srcPath = path.join(fullSrc, file);
    const destPath = path.join(destFolder, file);
    fs.copyFileSync(srcPath, destPath);
    totalCopied++;
  });
}

console.log(`\nSuccessfully copied all ${totalCopied} trek images to images/treks/!`);
