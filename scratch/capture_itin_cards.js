const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d4913d2a-6e4e-415a-ad99-baf20a459e6e';
const outItin = path.join(brainDir, 'chola_itinerary_cards_view.png');

try {
  // Take screenshot with target element or scrolled window
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outItin}" --window-size=1280,1800 http://127.0.0.1:8080/trek/everest-base-camp-with-cho-la-pass-trek/index.html#section-itinerary`);
  console.log('Itinerary screenshot saved, size:', fs.statSync(outItin).size);
} catch (err) {
  console.error('Failed to capture itinerary screenshot:', err.message);
}
