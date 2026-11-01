const fs = require('fs');
const alt = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const gokyoMatch = alt.match(/gokyo[a-z_]*\s*:/i);
console.log('Gokyo dataset match:', gokyoMatch ? gokyoMatch[0] : 'NOT FOUND');
if (gokyoMatch) {
  const idx = alt.indexOf(gokyoMatch[0]);
  console.log(alt.slice(idx, idx + 800));
}
