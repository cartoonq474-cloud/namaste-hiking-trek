const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d4913d2a-6e4e-415a-ad99-baf20a459e6e';
const outDesktop = path.join(brainDir, 'chola_itinerary_hash_view.png');

try {
  execSync(`"${chromePath}" --headless --disable-gpu --virtual-time-budget=5000 --screenshot="${outDesktop}" --window-size=1400,1000 "http://127.0.0.1:8080/trek/everest-base-camp-with-cho-la-pass-trek/index.html#section-itinerary"`);
  console.log(`Saved screenshot, size: ${fs.statSync(outDesktop).size} bytes`);
} catch (err) {
  console.error('Error:', err.message);
}
