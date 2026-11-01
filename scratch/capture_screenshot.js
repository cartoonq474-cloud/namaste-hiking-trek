const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = chromePaths.find(p => fs.existsSync(p));
const outPath = path.resolve(__dirname, 'header_screenshot.png');

if (browserPath) {
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --screenshot="${outPath}" --window-size=1280,800 http://127.0.0.1:8080/`);
    console.log('Screenshot saved, size:', fs.statSync(outPath).size);
  } catch (err) {
    console.error('Failed to capture screenshot:', err.message);
  }
}
