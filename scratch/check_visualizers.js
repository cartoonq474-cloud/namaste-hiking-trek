const fs = require('fs');

const weather = fs.readFileSync('js/weather-visualizer.js', 'utf8');
const altitude = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

console.log('weather keys:', weather.match(/[a-zA-Z0-9_-]+(?=\s*:\s*\{[\s\S]*?temperatures)/g));
console.log('altitude has gokyo:', altitude.includes('gokyo'));
