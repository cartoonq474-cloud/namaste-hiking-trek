const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const evIdx = about.indexOf('id="tab-everest"');
console.log(about.substring(evIdx, evIdx + 600));
