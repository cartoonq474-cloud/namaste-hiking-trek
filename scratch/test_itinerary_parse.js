const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('scratch/parsed_user_content.json', 'utf8'));
const lines = parsed.itineraryText.split('\n');

const dayIndices = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().match(/^Day\s+\d+:/i)) {
    dayIndices.push(i);
  }
}

const dayObjects = [];
for (let i = 0; i < dayIndices.length; i++) {
  const start = dayIndices[i];
  const end = (i + 1 < dayIndices.length) ? dayIndices[i + 1] : lines.length;
  const chunk = lines.slice(start, end).map(l => l.trim()).filter(l => l.length > 0);
  
  const headerLine = chunk[0];
  const dayNumMatch = headerLine.match(/^Day\s+(\d+):\s*(.*)/i);
  const dayNum = parseInt(dayNumMatch[1], 10);
  const rawTitle = dayNumMatch[2];
  
  // parse metadata lines
  let maxElevation = '';
  let overnightElevation = '';
  let walkingDuration = '';
  let accommodation = '';
  const narrative = [];
  
  for (let j = 1; j < chunk.length; j++) {
    const l = chunk[j];
    if (l.toLowerCase().startsWith('maximum elevation:') || l.toLowerCase().startsWith('summit elevation:')) {
      maxElevation = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('overnight elevation:') || l.toLowerCase().startsWith('high camp elevation:') || l.toLowerCase().startsWith('elevation:')) {
      overnightElevation = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('walking duration:') || l.toLowerCase().startsWith('estimated climbing and descent time:') || l.toLowerCase().startsWith('activity:')) {
      walkingDuration = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('accommodation:')) {
      accommodation = l.split(':')[1].trim();
    } else {
      narrative.push(l);
    }
  }
  
  dayObjects.push({
    dayNum,
    rawTitle,
    maxElevation,
    overnightElevation,
    walkingDuration,
    accommodation,
    narrative
  });
}

console.log(`Parsed ${dayObjects.length} days successfully.`);
dayObjects.forEach(d => {
  console.log(`Day ${d.dayNum}: "${d.rawTitle}" | Elev: "${d.maxElevation || d.overnightElevation}" | Dur: "${d.walkingDuration}" | Paras: ${d.narrative.length}`);
});
