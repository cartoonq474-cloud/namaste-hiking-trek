const fs = require('fs');
const text = fs.readFileSync('scratch/user_mustang_content.txt', 'utf8');
const lines = text.split('\n');

const days = [];
let currentDay = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const match = line.match(/^Day\s+(\d+):\s*(.*)/i);
  if (match) {
    if (currentDay) {
      days.push(currentDay);
    }
    currentDay = {
      dayNum: parseInt(match[1]),
      title: match[2],
      startLine: i + 1,
      paragraphs: []
    };
  } else if (currentDay) {
    if (line.match(/^What the 17-day Upper Mustang Trek itinerary covers/i) ||
        line.match(/^Why the itinerary includes/i) ||
        (currentDay.dayNum === 17 && line.match(/^[A-Z][a-z]+.*:/) && !line.startsWith('Day'))) {
      days.push(currentDay);
      currentDay = null;
    } else if (line.length > 0) {
      currentDay.paragraphs.push(line);
    }
  }
}
if (currentDay) days.push(currentDay);

console.log('Found', days.length, 'days:');
days.forEach(d => {
  console.log(`Day ${d.dayNum}: ${d.title} (${d.paragraphs.length} paras)`);
});
