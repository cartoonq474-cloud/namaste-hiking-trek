const fs = require('fs');

const overview = fs.readFileSync('scratch/ebc_overview.html', 'utf8');

const glanceIdx = overview.indexOf('ebc-glance-box');
if (glanceIdx !== -1) {
  console.log('--- GLANCE BOX SNIPPET ---');
  console.log(overview.slice(glanceIdx - 20, glanceIdx + 1200));
}

const highIdx = overview.indexOf('ebc-highlights-section');
if (highIdx !== -1) {
  console.log('\n--- HIGHLIGHTS SECTION SNIPPET ---');
  console.log(overview.slice(highIdx - 20, highIdx + 1500));
}
