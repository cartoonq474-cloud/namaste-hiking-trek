const fs = require('fs');
const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const packIdx = chola.indexOf('id="section-packing"');
const packEnd = chola.indexOf('</section>', packIdx);
const packSection = chola.substring(packIdx, packEnd + 10);

console.log('Cho La Packing HTML length:', packSection.length);
const scriptMatches = packSection.match(/<script[\s\S]*?<\/script>/gi);
console.log('Scripts in packing section:', scriptMatches ? scriptMatches.length : 0);
if (scriptMatches) {
  scriptMatches.forEach(s => console.log('Script:', s));
}

// Check if there are onclick handlers
const onClicks = packSection.match(/onclick="[^"]*"/gi);
console.log('Onclicks in packing section:', onClicks ? onClicks.slice(0, 5) : 'None');
