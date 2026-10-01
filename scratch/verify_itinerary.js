const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const verificationItems = [
  'Day 1: Arrival at Tribhuvan International Airport in Kathmandu and transfer to hotel',
  'Day 2: Kathmandu to Lukla and Trek to Phakding',
  'Day 3: Phakding to Namche Bazaar',
  'Day 4: Acclimatization Day in Namche Bazaar',
  'Day 5: Namche Bazaar to Tengboche',
  'Day 6: Tengboche to Dingboche',
  'Day 7: Acclimatization Day in Dingboche',
  'Day 8: Dingboche to Lobuche',
  'Day 9: Lobuche to Gorak Shep and Kala Patthar',
  'Day 10: Gorak Shep to Everest Base Camp and Pheriche',
  'Day 11: Pheriche to Namche Bazaar',
  'Day 12: Namche Bazaar to Lukla',
  'Day 13: Lukla to Kathmandu',
  'Day 14: Final Departure',
  'Your Everest Base Camp adventure begins in Kathmandu',
  'Today you travel toward Lukla, the traditional gateway',
  'Today the Everest Base Camp trek becomes more demanding',
  'Today is an acclimatization day, but that does not mean doing nothing',
  'The route from Namche to Tengboche is one of the most scenic sections',
  'Today you move deeper into the high-altitude Everest region',
  'This is the second major acclimatization day',
  'The trail changes dramatically today. Leaving Dingboche',
  'This is one of the highest and most demanding days',
  'Today you reach the destination that gives the journey its name',
  'After spending the previous night considerably lower than Gorak Shep',
  'Today is the final walking day of the classic Everest Base Camp',
  'Your scheduled mountain flight takes you from Lukla back toward Kathmandu',
  'Your 14-day Everest Base Camp Trek concludes with your departure',
  'itinerary-photos-grid',
  'custom-trip-cta-card',
  'section-includes'
];

let allPassed = true;
verificationItems.forEach(item => {
  const passed = content.includes(item);
  console.log(`[${passed ? 'PASS' : 'FAIL'}] ${item.substring(0, 50)}...`);
  if (!passed) allPassed = false;
});

console.log('--- ALL PASSED:', allPassed, '---');

// Also check number of itinerary-card occurrences
const cardMatches = content.match(/class="itinerary-card/g) || [];
console.log('Total itinerary-card elements found:', cardMatches.length);
