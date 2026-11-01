const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const dayHeadings = [
  'Day 1: arrival in Kathmandu',
  'Day 2: Kathmandu sightseeing and trek preparation',
  'Day 3: fly to Lukla and trek to Phakding',
  'Day 4: Phakding to Namche Bazaar',
  'Day 5: acclimatization hike from Namche to the Everest View Hotel area',
  'Day 6: Namche Bazaar to Tengboche',
  'Day 7: Tengboche to Dingboche',
  'Day 8: Nangkartshang Hill hike and return to Dingboche',
  'Day 9: Dingboche to Chhukung',
  'Day 10: Chhukung to Lobuche via Kongma La Pass',
  'Day 11: Lobuche to Gorak Shep, Everest Base Camp and back to Gorak Shep',
  'Day 12: Kala Patthar and trek to Dzongla',
  'Day 13: Dzongla to Thangnak (Dragnak) via Cho La Pass',
  'Day 14: Thangnak (Dragnak) to Gokyo',
  'Day 15: Gokyo Ri and Gokyo Valley exploration',
  'Day 16: Gokyo to Lungden via Renjo La Pass',
  'Day 17: Lungden to Namche Bazaar',
  'Day 18: Namche Bazaar to Lukla',
  'Day 19: planned flight from Lukla and return to Kathmandu',
  'Day 20: leisure and recovery day in Kathmandu',
  'Day 21: final departure from Nepal',
  "What's included in the trek price?"
];

const daysData = [];

for (let i = 0; i < 21; i++) {
  const currentHeading = dayHeadings[i];
  const nextHeading = dayHeadings[i + 1];
  
  const sIdx = content.indexOf(currentHeading);
  const eIdx = content.indexOf(nextHeading, sIdx);
  
  if (sIdx === -1 || eIdx === -1) {
    console.error(`Error finding boundaries for Day ${i + 1}: ${currentHeading}`);
    continue;
  }
  
  const text = content.slice(sIdx + currentHeading.length, eIdx).trim();
  daysData.push({
    dayNum: i + 1,
    title: currentHeading,
    text: text
  });
}

console.log('Successfully parsed days:', daysData.length);
daysData.forEach(d => {
  console.log(`Day ${d.dayNum}: ${d.title} (text length: ${d.text.length})`);
});

fs.writeFileSync('scratch/parsed_itinerary_days.json', JSON.stringify(daysData, null, 2), 'utf8');

