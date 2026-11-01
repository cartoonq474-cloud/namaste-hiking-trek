const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const mainEnd = evt.indexOf('</main>');
console.log('--- Near end of main in EVT ---');
console.log(evt.slice(mainEnd - 2000, mainEnd));
