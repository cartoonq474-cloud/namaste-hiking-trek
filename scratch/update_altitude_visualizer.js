const fs = require('fs');

let altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const target = '"ebc_cho_la": {';
if (!altJs.includes(target)) {
  console.error('Target not found in altitude-visualizer.js');
  process.exit(1);
}

const threePassesProfile = `"three_passes": {
    name: "Everest Three High Passes Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 2", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 3", spot: "Phakding", altitudeM: 2650, altitudeFt: 8694 },
      { day: "Day 4", spot: "Namche Bazaar", altitudeM: 3443, altitudeFt: 11296 },
      { day: "Day 5", spot: "Everest View Hotel", altitudeM: 3880, altitudeFt: 12730 },
      { day: "Day 6", spot: "Tengboche", altitudeM: 3860, altitudeFt: 12664 },
      { day: "Day 7", spot: "Dingboche", altitudeM: 4450, altitudeFt: 14600 },
      { day: "Day 8", spot: "Nangkartshang Hill", altitudeM: 5100, altitudeFt: 16732 },
      { day: "Day 9", spot: "Chhukung", altitudeM: 4700, altitudeFt: 15420 },
      { day: "Day 10", spot: "Kongma La", altitudeM: 5535, altitudeFt: 18159 },
      { day: "Day 11", spot: "Everest Base Camp", altitudeM: 5364, altitudeFt: 17598 },
      { day: "Day 12", spot: "Kala Patthar", altitudeM: 5545, altitudeFt: 18192 },
      { day: "Day 13", spot: "Cho La Pass", altitudeM: 5420, altitudeFt: 17782 },
      { day: "Day 14", spot: "Gokyo Lakes", altitudeM: 4750, altitudeFt: 15584 },
      { day: "Day 15", spot: "Gokyo Ri", altitudeM: 5357, altitudeFt: 17575 },
      { day: "Day 16", spot: "Renjo La Pass", altitudeM: 5360, altitudeFt: 17585 },
      { day: "Day 17", spot: "Namche Bazaar", altitudeM: 3443, altitudeFt: 11296 },
      { day: "Day 18", spot: "Lukla", altitudeM: 2850, altitudeFt: 9350 },
      { day: "Day 19", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 20", spot: "Kathmandu (Buffer)", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 21", spot: "Final Departure", altitudeM: 1355, altitudeFt: 4445 }
    ]
  },
  "three-passes": {
    name: "Everest Three High Passes Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 2", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 3", spot: "Phakding", altitudeM: 2650, altitudeFt: 8694 },
      { day: "Day 4", spot: "Namche Bazaar", altitudeM: 3443, altitudeFt: 11296 },
      { day: "Day 5", spot: "Everest View Hotel", altitudeM: 3880, altitudeFt: 12730 },
      { day: "Day 6", spot: "Tengboche", altitudeM: 3860, altitudeFt: 12664 },
      { day: "Day 7", spot: "Dingboche", altitudeM: 4450, altitudeFt: 14600 },
      { day: "Day 8", spot: "Nangkartshang Hill", altitudeM: 5100, altitudeFt: 16732 },
      { day: "Day 9", spot: "Chhukung", altitudeM: 4700, altitudeFt: 15420 },
      { day: "Day 10", spot: "Kongma La", altitudeM: 5535, altitudeFt: 18159 },
      { day: "Day 11", spot: "Everest Base Camp", altitudeM: 5364, altitudeFt: 17598 },
      { day: "Day 12", spot: "Kala Patthar", altitudeM: 5545, altitudeFt: 18192 },
      { day: "Day 13", spot: "Cho La Pass", altitudeM: 5420, altitudeFt: 17782 },
      { day: "Day 14", spot: "Gokyo Lakes", altitudeM: 4750, altitudeFt: 15584 },
      { day: "Day 15", spot: "Gokyo Ri", altitudeM: 5357, altitudeFt: 17575 },
      { day: "Day 16", spot: "Renjo La Pass", altitudeM: 5360, altitudeFt: 17585 },
      { day: "Day 17", spot: "Namche Bazaar", altitudeM: 3443, altitudeFt: 11296 },
      { day: "Day 18", spot: "Lukla", altitudeM: 2850, altitudeFt: 9350 },
      { day: "Day 19", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 20", spot: "Kathmandu (Buffer)", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 21", spot: "Final Departure", altitudeM: 1355, altitudeFt: 4445 }
    ]
  },
  "ebc_cho_la": {`;

altJs = altJs.replace(target, threePassesProfile);
fs.writeFileSync('js/altitude-visualizer.js', altJs, 'utf8');
console.log('Successfully added three_passes profile to js/altitude-visualizer.js!');

