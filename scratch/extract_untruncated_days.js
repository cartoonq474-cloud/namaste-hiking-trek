const fs = require('fs');

const content = fs.readFileSync('C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/.system_generated/steps/119/content.md', 'utf8');

// Find all matches for "itinerary_day":(\d+)
const dayRegex = /"itinerary_day":\s*(\d+)[\s\S]*?"itinerary_title":\s*"([^"]+)"[\s\S]*?"itinerary_description":\s*"([^"]+)"/g;

let days = [];
let match;
while ((match = dayRegex.exec(content)) !== null) {
  const dayNum = parseInt(match[1]);
  // clean unicode escapes in title and description
  const title = match[2].replace(/\\u[\dA-F]{4}/gi, (m) => String.fromCharCode(parseInt(m.replace(/\\u/g, ''), 16))).replace(/\\"/g, '"');
  const desc = match[3].replace(/\\u[\dA-F]{4}/gi, (m) => String.fromCharCode(parseInt(m.replace(/\\u/g, ''), 16))).replace(/\\"/g, '"').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Look ahead for additional properties like altitude, duration, meals, accommodation
  const chunkAhead = content.slice(match.index, match.index + 2000);
  
  days.push({
    day: dayNum,
    title,
    desc,
    rawSnippet: chunkAhead.slice(0, 500)
  });
  if (days.length === 16) break;
}

console.log('Extracted days count:', days.length);
days.forEach(d => {
  console.log(`\n========================================`);
  console.log(`DAY ${d.day}: ${d.title}`);
  console.log(`DESC: ${d.desc}`);
});

fs.writeFileSync('scratch/competitor_16_days_full.json', JSON.stringify(days, null, 2));
