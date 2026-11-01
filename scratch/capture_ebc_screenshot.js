const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outPath = path.resolve(__dirname, 'ebc_header_screenshot.png');

try {
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outPath}" --window-size=1280,800 http://127.0.0.1:8080/trek/everest-base-camp-trek/`);
  console.log('EBC screenshot saved, size:', fs.statSync(outPath).size);
} catch (err) {
  console.error('Failed to capture screenshot:', err.message);
}
