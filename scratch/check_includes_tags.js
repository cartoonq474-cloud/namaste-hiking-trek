const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const divOpens = (html.match(/<div/g) || []).length;
const divCloses = (html.match(/<\/div>/g) || []).length;
console.log(`Global <div>: opens=${divOpens}, closes=${divCloses}, diff=${divOpens - divCloses}`);
