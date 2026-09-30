const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const checks = [
  'ebc-highlights-section',
  'ebc-highlights-title',
  'Stand at Everest Base Camp at',
  'Climb Kala Patthar for the classic Everest view',
  'Fly into Lukla, the gateway to the Everest region',
  'Cross suspension bridges over the Dudh Koshi',
  'Enter Sagarmatha National Park',
  'Acclimatize around Namche Bazaar',
  'Experience Sherpa culture in the Khumbu',
  'Visit Tengboche Monastery beneath Ama Dablam',
  'Walk through forests and into the alpine zone',
  'See Ama Dablam and the Himalayan giants from changing perspectives',
  'Walk beside the Khumbu Glacier',
  'Stay in mountain teahouses',
  'Look for Himalayan wildlife',
  'Experience the quiet moments between the major landmarks',
  'Complete the journey safely as a team',
  'ebc-glance-box',
  'At a glance: the highlights you will experience',
  'why-book-container'
];

let allPassed = true;
checks.forEach(check => {
  const found = content.includes(check);
  console.log(`[${found ? 'PASS' : 'FAIL'}] ${check}`);
  if (!found) allPassed = false;
});

console.log('All checks passed:', allPassed);
