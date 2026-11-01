const fs = require('fs');

const src = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/001abaa7-7ed0-4412-a430-1acab0c97bde/annapurna_circuit_map_1792813750160.jpg';
const dest = 'images/annapurna-circuit-trek-map.jpg';

fs.copyFileSync(src, dest);
console.log('Copied to images/annapurna-circuit-trek-map.jpg successfully!');
