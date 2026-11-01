const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.sidebar-booking-card');
console.log('--- CSS FOR .sidebar-booking-card ---');
console.log(css.slice(pos, pos + 1200));
