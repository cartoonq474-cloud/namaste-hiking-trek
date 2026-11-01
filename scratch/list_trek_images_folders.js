const fs = require('fs');

if (fs.existsSync('Trek Images')) {
  console.log('Folders in Trek Images:');
  fs.readdirSync('Trek Images').forEach(f => console.log(' ', f));
} else {
  console.log('Trek Images folder not found');
}
