const fs = require('fs');

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
    name: "Mera Peak Climbing Trek (18 Days)",
    points: ${JSON.stringify(meraAltPoints, null, 6)}
  },
  "mera-peak": {
    name: "Mera Peak Climbing Trek (18 Days)",
    points: ${JSON.stringify(meraAltPoints, null, 6)}
  },
`;

altJs = altJs.replace('const trekAltitudeProfiles = {', 'const trekAltitudeProfiles = {\n' + meraAltEntry);
fs.writeFileSync('js/altitude-visualizer.js', altJs, 'utf8');
console.log('Successfully inserted mera_peak and mera-peak into trekAltitudeProfiles in js/altitude-visualizer.js!');

