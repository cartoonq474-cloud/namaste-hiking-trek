const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Check guides in #section-details
const guideTitles = [];
const guideRegex = /<h3 class="guide-card-title">([^<]+)<\/h3>/g;
let m;
while ((m = guideRegex.exec(content)) !== null) {
  guideTitles.push(m[1].trim());
}
console.log('Current Guide titles in section-details (count: ' + guideTitles.length + '):');
guideTitles.forEach((t, i) => console.log(`  ${i+1}. ${t}`));

// Check itinerary days in section-itinerary
const itineraryDays = [];
const itRegex = /<div class="itinerary-header[^>]*>[\s\S]*?<span class="itinerary-day-badge">([^<]+)<\/span>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g;
while ((m = itRegex.exec(content)) !== null) {
  itineraryDays.push(`${m[1]}: ${m[2]}`);
}
console.log('\nCurrent Itinerary days (count: ' + itineraryDays.length + '):');
itineraryDays.forEach(d => console.log(`  ${d}`));

// Check hero facts
const factLabels = [];
const factRegex = /<span class="fact-label">([^<]+)<\/span>[\s\S]*?<span class="fact-value">([^<]+)<\/span>/g;
while ((m = factRegex.exec(content)) !== null) {
  factLabels.push(`${m[1]}: ${m[2].trim()}`);
}
console.log('\nCurrent Key Facts:');
factLabels.forEach(f => console.log(`  ${f}`));

// Check emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const linesWithEmoji = [];
content.split('\n').forEach((l, idx) => {
  if (emojiRegex.test(l)) {
    linesWithEmoji.push(idx + 1);
  }
});
console.log(`\nLines with emojis: ${linesWithEmoji.length} (showing first 10: ${linesWithEmoji.slice(0, 10).join(', ')})`);
