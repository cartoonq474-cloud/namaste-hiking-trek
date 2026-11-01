const fs = require('fs');
const js = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const keys = [...js.matchAll(/"([^"]+)":\s*\{\s*name:/g)].map(m => m[1]);
console.log('Keys in trekAltitudeProfiles:', keys);

