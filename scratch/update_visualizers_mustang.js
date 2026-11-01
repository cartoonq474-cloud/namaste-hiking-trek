const fs = require('fs');

// 1. Update altitude visualizer
let altContent = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const mustangAltProfile = `  "mustang": {
    name: "Upper Mustang Trek (17 Days)",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 2", spot: "Kathmandu Prep", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 3", spot: "Pokhara", altitudeM: 822, altitudeFt: 2697 },
      { day: "Day 4", spot: "Kagbeni (via Jomsom)", altitudeM: 2743, altitudeFt: 8999 },
      { day: "Day 5", spot: "Chele", altitudeM: 3050, altitudeFt: 10006 },
      { day: "Day 6", spot: "Gheling", altitudeM: 3570, altitudeFt: 11712 },
      { day: "Day 7", spot: "Charang", altitudeM: 3630, altitudeFt: 11909 },
      { day: "Day 8", spot: "Lo Manthang", altitudeM: 3840, altitudeFt: 12598 },
      { day: "Day 9", spot: "Namgyal & Tingkhar", altitudeM: 3920, altitudeFt: 12860 },
      { day: "Day 10", spot: "Drakmar", altitudeM: 3810, altitudeFt: 12500 },
      { day: "Day 11", spot: "Sangboche", altitudeM: 3800, altitudeFt: 12467 },
      { day: "Day 12", spot: "Chhusang", altitudeM: 2980, altitudeFt: 9776 },
      { day: "Day 13", spot: "Muktinath", altitudeM: 3710, altitudeFt: 12172 },
      { day: "Day 14", spot: "Jomsom", altitudeM: 2720, altitudeFt: 8924 },
      { day: "Day 15", spot: "Pokhara", altitudeM: 822, altitudeFt: 2697 },
      { day: "Day 16", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 17", spot: "Departure", altitudeM: 1355, altitudeFt: 4445 }
    ]
  },
  "upper-mustang": {
    name: "Upper Mustang Trek (17 Days)",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 2", spot: "Kathmandu Prep", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 3", spot: "Pokhara", altitudeM: 822, altitudeFt: 2697 },
      { day: "Day 4", spot: "Kagbeni (via Jomsom)", altitudeM: 2743, altitudeFt: 8999 },
      { day: "Day 5", spot: "Chele", altitudeM: 3050, altitudeFt: 10006 },
      { day: "Day 6", spot: "Gheling", altitudeM: 3570, altitudeFt: 11712 },
      { day: "Day 7", spot: "Charang", altitudeM: 3630, altitudeFt: 11909 },
      { day: "Day 8", spot: "Lo Manthang", altitudeM: 3840, altitudeFt: 12598 },
      { day: "Day 9", spot: "Namgyal & Tingkhar", altitudeM: 3920, altitudeFt: 12860 },
      { day: "Day 10", spot: "Drakmar", altitudeM: 3810, altitudeFt: 12500 },
      { day: "Day 11", spot: "Sangboche", altitudeM: 3800, altitudeFt: 12467 },
      { day: "Day 12", spot: "Chhusang", altitudeM: 2980, altitudeFt: 9776 },
      { day: "Day 13", spot: "Muktinath", altitudeM: 3710, altitudeFt: 12172 },
      { day: "Day 14", spot: "Jomsom", altitudeM: 2720, altitudeFt: 8924 },
      { day: "Day 15", spot: "Pokhara", altitudeM: 822, altitudeFt: 2697 },
      { day: "Day 16", spot: "Kathmandu", altitudeM: 1355, altitudeFt: 4445 },
      { day: "Day 17", spot: "Departure", altitudeM: 1355, altitudeFt: 4445 }
    ]
  },
`;

if (!altContent.includes('"upper-mustang"')) {
  altContent = altContent.replace('const trekAltitudeProfiles = {', 'const trekAltitudeProfiles = {\n' + mustangAltProfile);
  fs.writeFileSync('js/altitude-visualizer.js', altContent, 'utf8');
  console.log('Added mustang & upper-mustang to js/altitude-visualizer.js');
}

// 2. Update weather visualizer
let weathContent = fs.readFileSync('js/weather-visualizer.js', 'utf8');

const mustangWeatherProfile = `  "mustang": [
    { label: "Day 1 (Kathmandu 1355 m)", min: 5, max: 19 },
    { label: "Day 2 (Kathmandu Prep 1355 m)", min: 5, max: 19 },
    { label: "Day 3 (Pokhara 822 m)", min: 10, max: 24 },
    { label: "Day 4 (Kagbeni 2743 m)", min: 2, max: 16 },
    { label: "Day 5 (Chele 3050 m)", min: 0, max: 14 },
    { label: "Day 6 (Gheling 3570 m)", min: -4, max: 12 },
    { label: "Day 7 (Charang 3630 m)", min: -6, max: 11 },
    { label: "Day 8 (Lo Manthang 3840 m)", min: -8, max: 10 },
    { label: "Day 9 (Namgyal & Tingkhar 3920 m)", min: -8, max: 10 },
    { label: "Day 10 (Drakmar 3810 m)", min: -7, max: 11 },
    { label: "Day 11 (Sangboche 3800 m)", min: -7, max: 11 },
    { label: "Day 12 (Chhusang 2980 m)", min: 1, max: 15 },
    { label: "Day 13 (Muktinath 3710 m)", min: -5, max: 11 },
    { label: "Day 14 (Jomsom 2720 m)", min: 2, max: 16 },
    { label: "Day 15 (Pokhara 822 m)", min: 10, max: 24 },
    { label: "Day 16 (Kathmandu 1355 m)", min: 5, max: 19 },
    { label: "Day 17 (Departure 1355 m)", min: 5, max: 19 }
  ],
  "upper-mustang": [
    { label: "Day 1 (Kathmandu 1355 m)", min: 5, max: 19 },
    { label: "Day 2 (Kathmandu Prep 1355 m)", min: 5, max: 19 },
    { label: "Day 3 (Pokhara 822 m)", min: 10, max: 24 },
    { label: "Day 4 (Kagbeni 2743 m)", min: 2, max: 16 },
    { label: "Day 5 (Chele 3050 m)", min: 0, max: 14 },
    { label: "Day 6 (Gheling 3570 m)", min: -4, max: 12 },
    { label: "Day 7 (Charang 3630 m)", min: -6, max: 11 },
    { label: "Day 8 (Lo Manthang 3840 m)", min: -8, max: 10 },
    { label: "Day 9 (Namgyal & Tingkhar 3920 m)", min: -8, max: 10 },
    { label: "Day 10 (Drakmar 3810 m)", min: -7, max: 11 },
    { label: "Day 11 (Sangboche 3800 m)", min: -7, max: 11 },
    { label: "Day 12 (Chhusang 2980 m)", min: 1, max: 15 },
    { label: "Day 13 (Muktinath 3710 m)", min: -5, max: 11 },
    { label: "Day 14 (Jomsom 2720 m)", min: 2, max: 16 },
    { label: "Day 15 (Pokhara 822 m)", min: 10, max: 24 },
    { label: "Day 16 (Kathmandu 1355 m)", min: 5, max: 19 },
    { label: "Day 17 (Departure 1355 m)", min: 5, max: 19 }
  ],
`;

if (!weathContent.includes('"upper-mustang"')) {
  weathContent = weathContent.replace('const trekDailyWeather = {', 'const trekDailyWeather = {\n' + mustangWeatherProfile);
  fs.writeFileSync('js/weather-visualizer.js', weathContent, 'utf8');
  console.log('Added mustang & upper-mustang to js/weather-visualizer.js');
}
