const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('scratch/parsed_user_content.json', 'utf8'));
const lines = parsed.itineraryText.split('\n');

function printDay(dayNum) {
  const start = lines.findIndex(l => l.trim().startsWith(`Day ${dayNum}:`));
  const end = lines.findIndex((l, i) => i > start && l.trim().match(/^Day \d+:/));
  console.log(`--- DAY ${dayNum} ---`);
  console.log(lines.slice(start, end !== -1 ? end : start + 15).join('\n'));
}

printDay(3);
printDay(4);
printDay(10);
printDay(11);
