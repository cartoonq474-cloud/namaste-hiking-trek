const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outPath = path.resolve(__dirname, 'mobile_header_screenshot.png');

try {
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outPath}" --window-size=375,667 http://127.0.0.1:8080/`);
  console.log('Mobile screenshot saved, size:', fs.statSync(outPath).size);
} catch (err) {
  console.error('Failed to capture screenshot:', err.message);
}
