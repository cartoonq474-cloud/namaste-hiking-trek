const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

function getFunctionCode(name) {
  const regex = new RegExp(`function\\s+${name}\\s*\\([\\s\\S]*?\\n\\}`, 'g');
  const match = js.match(regex);
  if (match) {
    console.log(`\n================ FUNCTION: ${name} ================`);
    console.log(match[0].slice(0, 1500));
  } else {
    console.log(`Function ${name} not found by regex`);
  }
}

getFunctionCode('setupGearChecklist');
getFunctionCode('setupHimalayanReviews');
getFunctionCode('setupReadTracker');
getFunctionCode('setupDatesAndAvailability');
getFunctionCode('setupFaqSection');
