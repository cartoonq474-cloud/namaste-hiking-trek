const fs = require('fs');
let code = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

if (!code.includes('"everest-view":')) {
  const everestViewData = `  "everest-view": {
    name: "Everest View Trek",
    points: [
      { day: "Day 1", spot: "Lukla to Phakding", altitudeM: 2610, altitudeFt: 8563 },
      { day: "Day 2", spot: "Namche Bazaar", altitudeM: 3440, altitudeFt: 11286 },
      { day: "Day 3", spot: "Namche Bazaar (Acclimatization)", altitudeM: 3440, altitudeFt: 11286 },
      { day: "Day 4", spot: "Hotel Everest View", altitudeM: 3880, altitudeFt: 12730 },
      { day: "Day 5", spot: "Phakding", altitudeM: 2610, altitudeFt: 8563 },
      { day: "Day 6", spot: "Lukla", altitudeM: 2860, altitudeFt: 9383 },
      { day: "Day 7", spot: "Kathmandu", altitudeM: 1400, altitudeFt: 4593 }
    ]
  },
`;
  code = code.replace('"ebc":', everestViewData + '  "ebc":');
  fs.writeFileSync('js/altitude-visualizer.js', code, 'utf8');
  console.log('Added everest-view to altitude-visualizer.js successfully!');
} else {
  console.log('everest-view already exists in altitude-visualizer.js');
}
