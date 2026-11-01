const fs = require('fs');

const weather = fs.readFileSync('js/weather-visualizer.js', 'utf8');
console.log(weather.slice(0, 800));
