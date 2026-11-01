const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = chromePaths.find(p => fs.existsSync(p));
const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d4913d2a-6e4e-415a-ad99-baf20a459e6e';

const outTop = path.join(brainDir, 'chola_page_hero_top.png');

if (browserPath) {
  try {
    execSync(`"${browserPath}" --headless --disable-gpu --screenshot="${outTop}" --window-size=1280,1000 http://127.0.0.1:8080/trek/everest-base-camp-with-cho-la-pass-trek/index.html`);
    console.log('Top screenshot saved, size:', fs.statSync(outTop).size);
  } catch (err) {
    console.error('Failed to capture top screenshot:', err.message);
  }
}
