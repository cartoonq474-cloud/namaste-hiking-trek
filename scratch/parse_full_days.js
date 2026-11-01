const fs = require('fs');

const content = fs.readFileSync('C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/.system_generated/steps/119/content.md', 'utf8');

const needle = '\\"itinerary\\":{\\"details\\":[';
const idx = content.indexOf(needle);
console.log('Needle index:', idx);

if (idx !== -1) {
  const start = idx + needle.length - 1; // starts at [
  let depth = 0;
  let inString = false;
  let end = -1;
  for (let i = start; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i-1] : '';
    if (ch === '"' && prev !== '\\') {
      inString = !inString;
    }
    if (!inString) {
      if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
  }
  console.log('Array end:', end);
  if (end !== -1) {
    const rawArray = content.slice(start, end);
    const jsonStr = rawArray.replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\u0026/g, '&');
    const parsed = JSON.parse(jsonStr);
    console.log('Successfully parsed full days:', parsed.length);
    fs.writeFileSync('scratch/competitor_16_days_full_untruncated.json', JSON.stringify(parsed, null, 2));
    
    parsed.forEach(p => {
      console.log(`\n========================================`);
      console.log(`DAY ${p.itinerary_day}: ${p.itinerary_title}`);
      console.log(`Route: ${p.origin} -> ${p.destination} | Duration: ${p.duration || 'N/A'}`);
      console.log(`Meals: ${p.meals} | Acc: ${p.accommodation}`);
      const cleanDesc = p.itinerary_description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log(`Desc: ${cleanDesc}`);
    });
  }
}
