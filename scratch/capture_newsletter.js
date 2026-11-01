const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outPath = path.resolve(__dirname, 'newsletter_screenshot.png');

try {
  // Use a puppeteer-like evaluation or scroll down to the newsletter section
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outPath}" --window-size=1280,1000 --run-all-compositor-stages-before-draw http://127.0.0.1:8080/#newsletter`);
  console.log('Newsletter screenshot saved, size:', fs.statSync(outPath).size);
} catch (err) {
  console.error('Failed to capture screenshot:', err.message);
}
