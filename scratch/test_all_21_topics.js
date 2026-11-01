const fs = require('fs');

const userContent = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

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

const topics = [
  { id: 'accommodation', title: 'Hotel & Teahouse Expectations in the Khumbu', start: 'Hotel and teahouse expectations', end: 'Bathrooms and washing facilities' },
  { id: 'bathrooms-showers', title: 'Bathrooms, Washing Facilities & Hot Showers', start: 'Bathrooms and washing facilities', end: 'Electricity, charging and Wi-Fi' },
  { id: 'electricity-wifi', title: 'Electricity, Device Charging & Wi-Fi Connectivity', start: 'Electricity, charging and Wi-Fi', end: 'Meals, menus and package coverage' },
  { id: 'food', title: 'Meals, Menus & High-Altitude Mountain Food', start: 'Meals, menus and package coverage', end: 'Eating before and during a high-pass day' },
  { id: 'high-pass-nutrition', title: 'High-Pass Nutrition, Low Appetite & Energy Recovery', start: 'Eating before and during a high-pass day', end: 'Safe drinking water and hydration' },
  { id: 'safe-water', title: 'Safe Drinking Water, Hydration & Altitude Health', start: 'Safe drinking water and hydration', end: 'Difficulty, fitness and acclimatization' },
  { id: 'difficulty', title: 'Walking Demands, Terrain & Cumulative Fatigue', start: 'Walking demands and previous experience', end: 'Prepare before departure' },
  { id: 'training', title: '12-Week Physical Training Plan & Boot Testing', start: 'Prepare before departure', end: 'Namche and Dingboche acclimatization' },
  { id: 'acclimatization', title: 'Acclimatization Strategy & Sleeping Elevation Science', start: 'Namche and Dingboche acclimatization', end: 'The Three Passes, terrain and route decisions' },
  { id: 'three-passes-breakdown', title: 'The Three Passes: Kongma La, Cho La & Renjo La Breakdown', start: 'The Three Passes, terrain and route decisions', end: 'Deciding whether a crossing can proceed' },
  { id: 'go-no-go', title: 'Go / No-Go Decision Framework & Turnaround Management', start: 'Deciding whether a crossing can proceed', end: 'Best time and mountain weather' },
  { id: 'best-time', title: 'Best Seasons & High-Altitude Mountain Weather', start: 'Best time and mountain weather', end: 'Route alternatives and traveler suitability' },
  { id: 'route-alternatives', title: 'Route Alternatives, Reverse Circuit & Shorter Variations', start: 'Route alternatives and traveler suitability', end: 'Beginners, families and older trekkers' },
  { id: 'beginners-families', title: 'Beginners, Families & Older Trekkers Readiness', start: 'Beginners, families and older trekkers', end: 'Flights, permits and transport logistics' },
  { id: 'flight-lukla', title: 'Lukla Flights, Ramechhap Transfer & Baggage Allowances', start: 'Flights, permits and transport logistics', end: 'Permits, registrations and guide arrangements' },
  { id: 'permits', title: 'Permits, Registrations & National Park Regulations', start: 'Permits, registrations and guide arrangements', end: 'Guide support, porter baggage and responsible trekking' },
  { id: 'guide-support', title: 'Sherpa Guide Credentials, Support Team & Porter Welfare', start: 'Guide support, porter baggage and responsible trekking', end: 'Sherpa culture and religious sites' },
  { id: 'culture-heritage', title: 'Sherpa Culture, Sacred Sites & Responsible Trekking', start: 'Sherpa culture and religious sites', end: 'Safety, emergency response and insurance' },
  { id: 'emergency-evacuation', title: 'Emergency Response, AMS Assessment & Evacuation', start: 'Safety, emergency response and insurance', end: 'Insurance for the actual altitude and activity' },
  { id: 'insurance', title: 'Travel Insurance Requirements & High-Altitude Coverage', start: 'Insurance for the actual altitude and activity', end: 'Cost, money and booking preparation' },
  { id: 'cost-booking', title: 'Package Cost Factors, Cash Planning & Booking Confirmation', start: 'Cost, money and booking preparation', end: 'Altitude profile of the 21-day itinerary' }
];

console.log('Validating all 21 topics:');
topics.forEach((t, i) => {
  const text = getBetween(userContent, t.start, t.end);
  console.log(`${i+1}. [${t.id}] ${t.title} -> Length: ${text.length}`);
});

