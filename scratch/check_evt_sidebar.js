const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sbarIdx = evt.indexOf('sidebar-booking-card');
console.log('sidebar-booking-card in EVT:', sbarIdx);
if (sbarIdx !== -1) {
  console.log(evt.slice(sbarIdx, sbarIdx + 1200));
}
