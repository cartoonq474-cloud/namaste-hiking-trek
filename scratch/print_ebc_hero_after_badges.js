const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('<span>reviews on <strong style="font-weight: 600; color: #0f172a;">TripAdvisor</strong></span>');
console.log(ebc.substring(p, p + 2500));
