const fs = require('fs');

let weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');

const meraWeather = [
  { label: "Day 1 (Kathmandu 1350m)", min: 5, max: 20 },
  { label: "Day 2 (Kathmandu 1350m)", min: 5, max: 20 },
  { label: "Day 3 (Chutanga 3450m)", min: -5, max: 10 },
  { label: "Day 4 (Thuli Kharka 4300m)", min: -12, max: 4 },
  { label: "Day 5 (Kothe 3600m)", min: -6, max: 9 },
  { label: "Day 6 (Thangnak 4350m)", min: -12, max: 5 },
  { label: "Day 7 (Thangnak 4350m)", min: -12, max: 5 },
  { label: "Day 8 (Khare 5045m)", min: -16, max: 2 },
  { label: "Day 9 (Khare Training 5045m)", min: -16, max: 2 },
  { label: "Day 10 (Mera High Camp 5780m)", min: -22, max: -5 },
  { label: "Day 11 (Mera Summit 6476m)", min: -28, max: -12 },
  { label: "Day 12 (Contingency Khare 5045m)", min: -16, max: 2 },
  { label: "Day 13 (Kothe 3600m)", min: -6, max: 9 },
  { label: "Day 14 (Thuli Kharka 4250m)", min: -11, max: 5 },
  { label: "Day 15 (Lukla 2850m)", min: -2, max: 13 },
  { label: "Day 16 (Kathmandu 1350m)", min: 5, max: 20 },
  { label: "Day 17 (Kathmandu Buffer 1350m)", min: 5, max: 20 },
  { label: "Day 18 (Kathmandu Departure 1350m)", min: 5, max: 20 }
];

const jsonStr = JSON.stringify(meraWeather, null, 4);

// Replace "mera_peak": [ ... ]
const regexMeraPeakUnderscore = /"mera_peak":\s*\[[\s\S]*?\n\s*\]/;
if (regexMeraPeakUnderscore.test(weaJs)) {
  weaJs = weaJs.replace(regexMeraPeakUnderscore, `"mera_peak": ` + jsonStr);
  console.log('Replaced mera_peak in weather-visualizer.js');
}

// Replace "mera-peak": [ ... ]
const regexMeraPeakHyphen = /"mera-peak":\s*\[[\s\S]*?\n\s*\]/;
if (regexMeraPeakHyphen.test(weaJs)) {
  weaJs = weaJs.replace(regexMeraPeakHyphen, `"mera-peak": ` + jsonStr);
  console.log('Replaced mera-peak in weather-visualizer.js');
}

fs.writeFileSync('js/weather-visualizer.js', weaJs, 'utf8');
console.log('Updated js/weather-visualizer.js successfully.');
