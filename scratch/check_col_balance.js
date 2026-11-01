const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const mainColStart = content.indexOf('<!-- Main Details Column (Sequential Sections) -->');
const sidebarStart = content.indexOf('<!-- Sticky Booking Sidebar Column -->');

const chunk = content.substring(mainColStart, sidebarStart);

const divOpens = (chunk.match(/<div/g) || []).length;
const divCloses = (chunk.match(/<\/div>/g) || []).length;
console.log(`Main Details Column: divOpens=${divOpens}, divCloses=${divCloses}, diff=${divOpens - divCloses}`);

const secOpens = (chunk.match(/<section/g) || []).length;
const secCloses = (chunk.match(/<\/section>/g) || []).length;
console.log(`Main Details Column: secOpens=${secOpens}, secCloses=${secCloses}, diff=${secOpens - secCloses}`);
