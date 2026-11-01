const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

// Let's inspect the entire s9 code from line 1 of s9 to the end of customer reviews
const endOfCust = s9.indexOf('<div id="platform-reviews"');
const s9HeaderAndFirstTwoTabs = s9.substring(0, endOfCust);

fs.writeFileSync('scratch/s9_first_two_tabs.html', s9HeaderAndFirstTwoTabs);
console.log('Saved scratch/s9_first_two_tabs.html (length:', s9HeaderAndFirstTwoTabs.length, ')');
