const fs = require('fs');

if (fs.existsSync('images/treks')) {
  console.log('Folders in images/treks:');
  fs.readdirSync('images/treks').forEach(f => console.log(' ', f));
} else {
  console.log('images/treks does not exist');
}
