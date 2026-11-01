const fs = require('fs');
const path = require('path');

const legacyDir = path.join('trek', 'mera-peak-climbing-trek');
if (fs.existsSync(legacyDir)) {
  fs.rmSync(legacyDir, { recursive: true, force: true });
  console.log(`Successfully removed legacy directory: ${legacyDir}`);
} else {
  console.log('Legacy directory already removed');
}
