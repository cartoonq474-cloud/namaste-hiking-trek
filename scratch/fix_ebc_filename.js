const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /images\/treks\/everest-base-camp\/everest-base-camp-mountain-panorama-11\.jpg/g,
  'images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed EBC filename in index.html');
