const fs = require('fs');

const getSection7to12 = require('./gen_everest_section7_12');
const sec7_12 = getSection7to12();
const leftColEnd = sec7_12.indexOf('<!-- END LEFT COLUMN (8 cols) -->');
console.log('End of leftColContent:');
console.log(sec7_12.slice(leftColEnd - 300, leftColEnd + 50));

const sidebarAndBottom = fs.readFileSync('scratch/orig_sidebar_and_bottom.html', 'utf8');
console.log('\nStart of sidebarAndBottom:');
console.log(sidebarAndBottom.slice(0, 300));
