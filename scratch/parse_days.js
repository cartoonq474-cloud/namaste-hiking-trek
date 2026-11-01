const fs = require('fs');

const raw = fs.readFileSync('scratch/kanchenjunga_prompt.txt', 'utf8');
const lines = raw.split(/\r?\n/);

// 1. Parse Quick Reference Table (lines around 371 to 396)
const tableRows = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^Day\s+\d+\t/i)) {
    const parts = line.split('\t').map(p => p.trim());
    if (parts.length >= 5) {
      tableRows.push({
        day: parts[0],
        route: parts[1],
        elevation: parts[2],
        distance: parts[3],
        duration: parts[4]
      });
    }
  }
}
console.log('Parsed Quick Table Rows:', tableRows.length);

// 2. Parse Day-by-Day Detailed Itinerary (Days 1 to 26)
// Find lines matching ^Day (\d+):
const dayStarts = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^Day\s+(\d+):\s*(.*)$/i);
  if (m) {
    dayStarts.push({
      dayNum: parseInt(m[1]),
      title: m[2].trim(),
      lineIdx: i
    });
  }
}

// Limit to first 26 days (itinerary section)
const itineraryDays = dayStarts.filter(d => d.dayNum >= 1 && d.dayNum <= 26);
console.log('Found Itinerary Days:', itineraryDays.length);

const parsedDays = [];
for (let i = 0; i < itineraryDays.length; i++) {
  const current = itineraryDays[i];
  const startLine = current.lineIdx;
  let endLine = (i < itineraryDays.length - 1) ? itineraryDays[i + 1].lineIdx : lines.length;
  
  // For Day 26, end before "Important notes about the itinerary"
  if (current.dayNum === 26) {
    for (let j = startLine; j < lines.length; j++) {
      if (lines[j].match(/^Important notes about the itinerary/i)) {
        endLine = j;
        break;
      }
    }
  }

  const dayBlock = lines.slice(startLine + 1, endLine);
  const paragraphs = [];
  const bulletPoints = [];
  const notes = [];

  let inBullets = false;
  for (let j = 0; j < dayBlock.length; j++) {
    const l = dayBlock[j].trim();
    if (!l) continue;

    if (l.startsWith('-')) {
      bulletPoints.push(l.substring(1).trim());
    } else if (l.startsWith('Note:') || l.startsWith('Confirm the actual flight')) {
      notes.push(l);
    } else {
      // Normal narrative paragraph
      paragraphs.push(l);
    }
  }

  parsedDays.push({
    dayNum: current.dayNum,
    rawTitle: current.title,
    paragraphs,
    bulletPoints,
    notes
  });
}

fs.writeFileSync('scratch/kanchenjunga_days.json', JSON.stringify({
  quickTable: tableRows,
  days: parsedDays
}, null, 2), 'utf8');

console.log('Saved scratch/kanchenjunga_days.json successfully!');
