const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
console.log('Includes altitude-visualizer.js:', html.includes('altitude-visualizer.js'));
console.log('Includes weather-visualizer:', html.includes('weather-visualizer'));
console.log('altitude-chart-wrapper occurrences:');
console.log(html.match(/altitude-chart-wrapper/g));
console.log('All scripts in ebc:');
const reg = /<script[\s\S]*?<\/script>/gi;
let m;
while ((m = reg.exec(html)) !== null) {
  if (m[0].includes('src=')) console.log(m[0]);
}

