const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1';
const destDir = path.resolve('images');

const imageMap = [
  { prefix: 'csr_relief_dist', dest: 'csr-relief-distribution.jpg' },
  { prefix: 'csr_relief_truck', dest: 'csr-flood-relief-mission.jpg' },
  { prefix: 'csr_digital_edu', dest: 'csr-digital-education.jpg' },
  { prefix: 'csr_school_supplies', dest: 'csr-school-supplies.jpg' },
  { prefix: 'csr_village_gather', dest: 'csr-community-gathering.jpg' }
];

const brainFiles = fs.readdirSync(srcDir);

imageMap.forEach(item => {
  const match = brainFiles.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
  if (match) {
    const srcPath = path.join(srcDir, match);
    const destPath = path.join(destDir, item.dest);
    fs.copyFileSync(srcPath, destPath);
    const stat = fs.statSync(destPath);
    console.log(`Copied ${match} -> images/${item.dest} (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`Could not find image with prefix: ${item.prefix}`);
  }
});
