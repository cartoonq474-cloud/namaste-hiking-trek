const fs = require('fs');
const txt = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const regex = /"([a-zA-Z0-9_-]+)":\s*\{\s*name:/g;
let m;
const keys = [];
while ((m = regex.exec(txt)) !== null) {
  keys.push(m[1]);
}
console.log('Altitude Visualizer keys:', keys);
