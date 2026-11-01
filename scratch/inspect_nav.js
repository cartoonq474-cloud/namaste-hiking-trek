const fs = require('fs');

const peakClimbing = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

// Find references to mera peak or packages
const matches = [...peakClimbing.matchAll(/mera-peak[^\"]*/gi)];
console.log('Matches for mera-peak in peak-climbing-nepal/index.html:');
matches.forEach(m => console.log(m[0]));
