const fs = require('fs');
const weaViz = fs.readFileSync('js/weather-visualizer.js', 'utf8');

const match = weaViz.match(/const trekDailyWeather = \{[\s\S]*?\n\};/);
if (match) {
  console.log('trekDailyWeather definition:');
  console.log(match[0].slice(0, 1000));
}
