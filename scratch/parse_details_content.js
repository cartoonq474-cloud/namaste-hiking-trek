const fs = require('fs');

const userContent = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

// Function to extract text between two markers
function getBetween(content, startMarker, endMarker) {
  const s = content.indexOf(startMarker);
  if (s === -1) {
    console.error('Marker not found:', startMarker);
    return '';
  }
  const e = endMarker ? content.indexOf(endMarker, s + startMarker.length) : content.length;
  if (e === -1) {
    console.error('End marker not found:', endMarker);
    return '';
  }
  return content.slice(s, e).trim();
}

console.log('Testing Details extraction points:');
const t1 = getBetween(userContent, 'Hotel and teahouse expectations', 'Bathrooms and washing facilities');
console.log('Topic 1 length:', t1.length);
const t2 = getBetween(userContent, 'Bathrooms and washing facilities', 'Electricity, charging and Wi-Fi');
console.log('Topic 2 length:', t2.length);
const t3 = getBetween(userContent, 'Electricity, charging and Wi-Fi', 'Meals, menus and package coverage');
console.log('Topic 3 length:', t3.length);
const t4 = getBetween(userContent, 'Meals, menus and package coverage', 'Eating before and during a high-pass day');
console.log('Topic 4 length:', t4.length);
const t5 = getBetween(userContent, 'Eating before and during a high-pass day', 'Safe drinking water and hydration');
console.log('Topic 5 length:', t5.length);
const t6 = getBetween(userContent, 'Safe drinking water and hydration', 'Difficulty, fitness and acclimatization');
console.log('Topic 6 length:', t6.length);
const t7 = getBetween(userContent, 'Walking demands and previous experience', 'Prepare before departure');
console.log('Topic 7 length:', t7.length);
const t8 = getBetween(userContent, 'Prepare before departure', 'Acclimatization, elevation science and rest');
console.log('Topic 8 length:', t8.length);
const t9 = getBetween(userContent, 'Acclimatization, elevation science and rest', 'Three passes terrain and practical demands');
console.log('Topic 9 length:', t9.length);
const t10 = getBetween(userContent, 'Three passes terrain and practical demands', 'Go/no-go decisions and turnaround management');
console.log('Topic 10 length:', t10.length);
const t11 = getBetween(userContent, 'Go/no-go decisions and turnaround management', 'Best time to go and mountain weather');
console.log('Topic 11 length:', t11.length);
const t12 = getBetween(userContent, 'Best time to go and mountain weather', 'Route alternatives and traveler suitability');
console.log('Topic 12 length:', t12.length);
const t13 = getBetween(userContent, 'Route alternatives and traveler suitability', 'Beginners, families and older trekkers');
console.log('Topic 13 length:', t13.length);
const t14 = getBetween(userContent, 'Beginners, families and older trekkers', 'Flights, permits and transport logistics');
console.log('Topic 14 length:', t14.length);
const t15 = getBetween(userContent, 'Flights, permits and transport logistics', 'Permits, registrations and guide arrangements');
console.log('Topic 15 length:', t15.length);
const t16 = getBetween(userContent, 'Permits, registrations and guide arrangements', 'Guide support, porter baggage and responsible trekking');
console.log('Topic 16 length:', t16.length);
const t17 = getBetween(userContent, 'Guide support, porter baggage and responsible trekking', 'Sherpa culture and religious sites');
console.log('Topic 17 length:', t17.length);
const t18 = getBetween(userContent, 'Sherpa culture and religious sites', 'Safety, emergency response and insurance');
console.log('Topic 18 length:', t18.length);
const t19 = getBetween(userContent, 'Safety, emergency response and insurance', 'Insurance for the actual altitude and activity');
console.log('Topic 19 length:', t19.length);
const t20 = getBetween(userContent, 'Insurance for the actual altitude and activity', 'Cost, money and booking preparation');
console.log('Topic 20 length:', t20.length);
const t21 = getBetween(userContent, 'Cost, money and booking preparation', 'Altitude profile of the 21-day itinerary');
console.log('Topic 21 length:', t21.length);

