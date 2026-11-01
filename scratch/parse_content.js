const fs = require('fs');

const raw = fs.readFileSync('scratch_last_user_prompt.txt', 'utf8');
const lines = raw.split(/\r?\n/);

console.log('Total lines in raw user prompt:', lines.length);

function getSection(startStr, endStr) {
  const startIdx = lines.findIndex(l => l.trim() === startStr);
  if (startIdx === -1) {
    console.error(`Start string not found: "${startStr}"`);
    return '';
  }
  let endIdx = lines.length;
  if (endStr) {
    const foundEnd = lines.findIndex((l, i) => i > startIdx && l.trim() === endStr);
    if (foundEnd !== -1) endIdx = foundEnd;
    else console.warn(`End string not found: "${endStr}"`);
  }
  return lines.slice(startIdx, endIdx).join('\n');
}

const parsed = {
  overviewText: getSection('Overview and key expedition facts', 'Mera Peak Climbing highlights'),
  highlightsText: getSection('Mera Peak Climbing highlights', 'Key trip facts and expedition overview'),
  tripFactsText: getSection('Key trip facts and expedition overview', 'Mera Peak Climbing duration and route summary'),
  stageSummaryText: getSection('Mera Peak Climbing duration and route summary', 'Mera Peak Climbing day-by-day overview'),
  dayOverviewTable: getSection('Mera Peak Climbing day-by-day overview', 'Day 1: arrival in Kathmandu and transfer to the hotel'),
  itineraryText: getSection('Day 1: arrival in Kathmandu and transfer to the hotel', 'Difficulty, fitness and preparation'),
  difficultyText: getSection('Difficulty, fitness and preparation', 'Best time and seasons'),
  seasonsText: getSection('Best time and seasons', 'Cost, inclusions, exclusions and booking terms'),
  costsText: getSection('Cost, inclusions, exclusions and booking terms', 'Climbing permits and required documents'),
  permitsText: getSection('Climbing permits and required documents', null)
};

for (const [k, v] of Object.entries(parsed)) {
  console.log(`Key "${k}": ${v.split('\n').length} lines, ${v.length} characters`);
}

fs.writeFileSync('scratch/parsed_user_content.json', JSON.stringify(parsed, null, 2), 'utf8');
console.log('Saved scratch/parsed_user_content.json');
