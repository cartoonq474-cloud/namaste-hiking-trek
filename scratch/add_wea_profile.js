const fs = require('fs');
let code = fs.readFileSync('js/weather-visualizer.js', 'utf8');

if (!code.includes('"everest-view":')) {
  const everestWeather = `  "everest-view": [
    { label: "Day 1 (Phakding 2610 m)", min: -2, max: 14 },
    { label: "Day 2 (Namche Bazaar 3440 m)", min: -6, max: 10 },
    { label: "Day 3 (Namche Acclimatization 3440 m)", min: -6, max: 10 },
    { label: "Day 4 (Everest View Hotel 3880 m)", min: -8, max: 8 },
    { label: "Day 5 (Phakding 2610 m)", min: -2, max: 14 },
    { label: "Day 6 (Lukla 2860 m)", min: -3, max: 13 },
    { label: "Day 7 (Kathmandu 1400 m)", min: 5, max: 20 }
  ],
`;
  code = code.replace('const trekDailyWeather = {', 'const trekDailyWeather = {\n' + everestWeather);
  fs.writeFileSync('js/weather-visualizer.js', code, 'utf8');
  console.log('Added everest-view to trekDailyWeather in weather-visualizer.js successfully!');
} else {
  console.log('everest-view already exists in weather-visualizer.js');
}
