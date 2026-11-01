const fs = require('fs');

let altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const meraProfile = {
  name: "Mera Peak Climbing (18 Days)",
  points: [
    { day: "Day 1", spot: "Kathmandu", altitudeM: 1350, altitudeFt: 4429 },
    { day: "Day 2", spot: "Kathmandu Prep", altitudeM: 1350, altitudeFt: 4429 },
    { day: "Day 3", spot: "Chutanga (via Lukla)", altitudeM: 3450, altitudeFt: 11319 },
    { day: "Day 4", spot: "Thuli Kharka (via Zatrwa La)", altitudeM: 4300, altitudeFt: 14108 },
    { day: "Day 5", spot: "Kothe", altitudeM: 3600, altitudeFt: 11811 },
    { day: "Day 6", spot: "Thangnak", altitudeM: 4350, altitudeFt: 14272 },
    { day: "Day 7", spot: "Thangnak (Acclimatization)", altitudeM: 4350, altitudeFt: 14272 },
    { day: "Day 8", spot: "Khare", altitudeM: 5045, altitudeFt: 16552 },
    { day: "Day 9", spot: "Khare (Climbing Practice)", altitudeM: 5045, altitudeFt: 16552 },
    { day: "Day 10", spot: "Mera High Camp", altitudeM: 5780, altitudeFt: 18963 },
    { day: "Day 11", spot: "Mera Peak Summit", altitudeM: 6476, altitudeFt: 21247 },
    { day: "Day 12", spot: "Contingency Day (Khare)", altitudeM: 5045, altitudeFt: 16552 },
    { day: "Day 13", spot: "Kothe", altitudeM: 3600, altitudeFt: 11811 },
    { day: "Day 14", spot: "Thuli Kharka", altitudeM: 4250, altitudeFt: 13944 },
    { day: "Day 15", spot: "Lukla (via Zatrwa La)", altitudeM: 2850, altitudeFt: 9350 },
    { day: "Day 16", spot: "Kathmandu", altitudeM: 1350, altitudeFt: 4429 },
    { day: "Day 17", spot: "Kathmandu (Buffer)", altitudeM: 1350, altitudeFt: 4429 },
    { day: "Day 18", spot: "Departure", altitudeM: 1350, altitudeFt: 4429 }
  ]
};

const jsonStr = JSON.stringify(meraProfile, null, 4);

// Replace "mera_peak": { ... }
const regexMeraPeakUnderscore = /"mera_peak":\s*\{[\s\S]*?\n\s*\}/;
if (regexMeraPeakUnderscore.test(altJs)) {
  altJs = altJs.replace(regexMeraPeakUnderscore, `"mera_peak": ` + jsonStr);
  console.log('Replaced mera_peak in altitude-visualizer.js');
}

// Replace "mera-peak": { ... }
const regexMeraPeakHyphen = /"mera-peak":\s*\{[\s\S]*?\n\s*\}/;
if (regexMeraPeakHyphen.test(altJs)) {
  altJs = altJs.replace(regexMeraPeakHyphen, `"mera-peak": ` + jsonStr);
  console.log('Replaced mera-peak in altitude-visualizer.js');
}

fs.writeFileSync('js/altitude-visualizer.js', altJs, 'utf8');
console.log('Updated js/altitude-visualizer.js successfully.');
