const fs = require('fs');

const src = fs.readFileSync('scratch/full_parity_ready.html', 'utf8');
fs.writeFileSync('trek/everest-view-trek/index.html', src, 'utf8');
console.log('Successfully written to trek/everest-view-trek/index.html! Length:', src.length);
