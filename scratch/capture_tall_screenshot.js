const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d4913d2a-6e4e-415a-ad99-baf20a459e6e';

const outItin = path.join(brainDir, 'chola_itinerary_screenshot.png');

try {
  // Use a tall window or scroll to itinerary
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outItin}" --window-size=1280,3000 http://127.0.0.1:8080/trek/everest-base-camp-with-cho-la-pass-trek/index.html`);
  console.log('Tall screenshot saved, size:', fs.statSync(outItin).size);
} catch (err) {
  console.error('Failed to capture tall screenshot:', err.message);
}
