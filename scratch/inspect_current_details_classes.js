const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-details"');
const eIdx = mardi.indexOf('id="section-altitude-profile"');
const currentDetails = mardi.slice(sIdx, eIdx);

const classes = [...currentDetails.matchAll(/class=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Classes in current details:', [...new Set(classes.flatMap(c => c.split(/\s+/)))]);
console.log('\nFirst 800 chars of current details:');
console.log(currentDetails.slice(0, 800));
