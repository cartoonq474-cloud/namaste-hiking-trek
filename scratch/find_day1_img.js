const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const day1Idx = ebc.indexOf('<!-- Day 01');
const imgIdx = ebc.indexOf('<img', day1Idx);
console.log(ebc.substring(imgIdx - 200, imgIdx + 800));
