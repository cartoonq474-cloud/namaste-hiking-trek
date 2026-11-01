const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// 1. Extract Section 5 from EBC
const ebcStart = ebc.indexOf('<section id="section-packing"');
const ebcEnd = ebc.indexOf('</section>', ebcStart) + 10;
const ebcPacking = ebc.slice(ebcStart, ebcEnd);

// 2. Extract Section 5 from EVT
const evtStart = evt.indexOf('<section id="section-packing"');
const evtEnd = evt.indexOf('</section>', evtStart) + 10;
const evtPacking = evt.slice(evtStart, evtEnd);

console.log('=== EBC PACKING SECTION LENGTH ===', ebcPacking.length);
fs.writeFileSync('scratch/ebc_packing_extracted.html', ebcPacking, 'utf8');

console.log('=== EVT PACKING SECTION LENGTH ===', evtPacking.length);
fs.writeFileSync('scratch/evt_packing_extracted.html', evtPacking, 'utf8');

console.log('\n--- EBC First 1500 chars ---');
console.log(ebcPacking.slice(0, 1500));

console.log('\n--- EVT First 1500 chars ---');
console.log(evtPacking.slice(0, 1500));
