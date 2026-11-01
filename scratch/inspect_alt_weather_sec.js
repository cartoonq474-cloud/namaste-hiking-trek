const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const altSection = content.match(/<section id="section-altitude-profile"[\s\S]*?<\/section>/i);
if (altSection) {
  console.log('Altitude section HTML:');
  console.log(altSection[0]);
}

const weatherSection = content.match(/<section id="section-weather"[\s\S]*?<\/section>/i);
if (weatherSection) {
  console.log('\nWeather section HTML:');
  console.log(weatherSection[0]);
}
