const fs = require('fs');
const content = fs.readFileSync('C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/.system_generated/steps/119/content.md', 'utf8');

console.log('File length:', content.length);

const marker = '"@type":"TouristTrip"';
const idx = content.indexOf(marker);
console.log('TouristTrip index:', idx);

if (idx !== -1) {
  const start = content.lastIndexOf('<script', idx);
  const end = content.indexOf('</script>', idx);
  const jsonStr = content.slice(start, end).replace(/<script[^>]*>/, '').trim();
  try {
    const data = JSON.parse(jsonStr);
    console.log('Trip:', data.name, 'Duration:', data.duration);
    fs.writeFileSync('scratch/competitor_itinerary.json', JSON.stringify(data.itinerary, null, 2));
    console.log('Saved competitor itinerary with', data.itinerary.length, 'days!');
  } catch (e) {
    console.log('Error parsing JSON:', e.message);
  }
}

// Also let's extract the HTML text of the itinerary section to see full day descriptions (since JSON-LD descriptions were truncated with ellipsis "...")
const itinIdx = content.indexOf('id="itinerary"');
console.log('HTML itinerary section index:', itinIdx);
if (itinIdx !== -1) {
  const chunk = content.slice(itinIdx, itinIdx + 40000);
  fs.writeFileSync('scratch/competitor_html_itin.txt', chunk);
  console.log('Saved HTML itinerary chunk');
}
