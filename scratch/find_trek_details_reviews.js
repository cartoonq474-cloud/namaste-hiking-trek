const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const lines = js.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('review-tab-btn') || line.includes('platform-sub-tab') || line.includes('video-review-modal')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
