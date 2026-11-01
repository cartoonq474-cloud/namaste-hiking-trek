const fs = require('fs');

const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

// Search for three passes or passes or e3p in altitude-visualizer.js
const regex = /(three[-_]passes|three[-_]high[-_]passes|e3p|kongma)/i;
const matches = altJs.match(regex);
console.log('Altitude visualizer has three passes match:', matches ? matches[0] : 'NONE');

// List trek keys defined in altitude-visualizer.js
const keys = [...altJs.matchAll(/([a-zA-Z0-9_-]+):\s*\{\s*name:/g)].map(m => m[1]);
console.log('Trek keys in altitude visualizer:', keys);

