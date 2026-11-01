const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const start = ebcHtml.indexOf('id="section-details"');
const end = ebcHtml.indexOf('id="section-altitude-profile"');

const sectionDetails = ebcHtml.substring(start, end);

console.log('EBC section-details length:', sectionDetails.length);
console.log('First 2500 characters of EBC section-details:\n');
console.log(sectionDetails.substring(0, 2500));
