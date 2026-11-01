const fs = require('fs');

// 1. Update altitude-visualizer.js
let altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const meraAltPoints = [
  { day: "Day 1", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
  { day: "Day 2", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
  { day: "Day 3", spot: "Paiya", altitudeM: 2730, altitudeFt: 8956 },
  { day: "Day 4", spot: "Pangkongma", altitudeM: 2846, altitudeFt: 9337 },
  { day: "Day 5", spot: "Nashing Dingma", altitudeM: 2360, altitudeFt: 7742 },
  { day: "Day 6", spot: "Chalem Kharka", altitudeM: 3600, altitudeFt: 11811 },
  { day: "Day 7", spot: "Chunbu Kharka", altitudeM: 4200, altitudeFt: 13779 },
  { day: "Day 8", spot: "Kothe", altitudeM: 3600, altitudeFt: 11811 },
  { day: "Day 9", spot: "Thangnak", altitudeM: 4356, altitudeFt: 14291 },
  { day: "Day 10", spot: "Charpate Viewpoint", altitudeM: 5000, altitudeFt: 16404 },
  { day: "Day 11", spot: "Khare Base Camp", altitudeM: 5045, altitudeFt: 16551 },
  { day: "Day 12", spot: "Khare Clinic", altitudeM: 5045, altitudeFt: 16551 },
  { day: "Day 13", spot: "Mera High Camp", altitudeM: 5780, altitudeFt: 18963 },
  { day: "Day 14", spot: "Mera Peak Summit", altitudeM: 6476, altitudeFt: 21247 },
  { day: "Day 15", spot: "Khare Reserve", altitudeM: 5045, altitudeFt: 16551 },
  { day: "Day 16", spot: "Kothe", altitudeM: 3600, altitudeFt: 11811 },
  { day: "Day 17", spot: "Lukla via Zatrwa La", altitudeM: 4610, altitudeFt: 15124 },
  { day: "Day 18", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 }
];

const meraAltEntry = `  "mera_peak": {
    name: "Mera Peak Climbing Trek",
    points: ${JSON.stringify(meraAltPoints, null, 6)}
  },
  "mera-peak": {
    name: "Mera Peak Climbing Trek",
    points: ${JSON.stringify(meraAltPoints, null, 6)}
  },
`;

if (!altJs.includes('"mera_peak"') && !altJs.includes('"mera-peak"')) {
  altJs = altJs.replace('const trekProfiles = {', 'const trekProfiles = {\n' + meraAltEntry);
  fs.writeFileSync('js/altitude-visualizer.js', altJs, 'utf8');
  console.log('Added mera_peak and mera-peak to altitude-visualizer.js!');
} else {
  console.log('mera_peak already present in altitude-visualizer.js');
}

// 2. Update weather-visualizer.js
let weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');

const meraWeaPoints = [
  { label: "Day 1 (Kathmandu 1355 m)", min: 5, max: 19 },
  { label: "Day 2 (Kathmandu 1355 m)", min: 5, max: 19 },
  { label: "Day 3 (Paiya 2730 m)", min: -4, max: 12 },
  { label: "Day 4 (Pangkongma 2846 m)", min: -5, max: 11 },
  { label: "Day 5 (Nashing Dingma 2360 m)", min: -2, max: 14 },
  { label: "Day 6 (Chalem Kharka 3600 m)", min: -8, max: 8 },
  { label: "Day 7 (Chunbu Kharka 4200 m)", min: -12, max: 5 },
  { label: "Day 8 (Kothe 3600 m)", min: -7, max: 9 },
  { label: "Day 9 (Thangnak 4356 m)", min: -14, max: 4 },
  { label: "Day 10 (Charpate 5000 m)", min: -18, max: 1 },
  { label: "Day 11 (Khare 5045 m)", min: -18, max: 2 },
  { label: "Day 12 (Khare Clinic 5045 m)", min: -18, max: 2 },
  { label: "Day 13 (High Camp 5780 m)", min: -24, max: -4 },
  { label: "Day 14 (Summit 6476 m)", min: -28, max: -8 },
  { label: "Day 15 (Khare Reserve 5045 m)", min: -18, max: 2 },
  { label: "Day 16 (Kothe 3600 m)", min: -7, max: 9 },
  { label: "Day 17 (Lukla 2850 m)", min: -6, max: 11 },
  { label: "Day 18 (Kathmandu 1355 m)", min: 5, max: 19 }
];

const meraWeaEntry = `  "mera_peak": ${JSON.stringify(meraWeaPoints, null, 4)},\n  "mera-peak": ${JSON.stringify(meraWeaPoints, null, 4)},\n`;

if (!weaJs.includes('"mera_peak"') && !weaJs.includes('"mera-peak"')) {
  weaJs = weaJs.replace('const trekDailyWeather = {', 'const trekDailyWeather = {\n' + meraWeaEntry);
  fs.writeFileSync('js/weather-visualizer.js', weaJs, 'utf8');
  console.log('Added mera_peak and mera-peak to weather-visualizer.js!');
} else {
  console.log('mera_peak already present in weather-visualizer.js');
}

