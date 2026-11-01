const fs = require('fs');

const testImages = [
  'images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg',
  'images/treks/everest-base-camp/everest-base-camp-helicopter-scenic-flight-08.jpg',
  'images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg',
  'images/treks/everest-base-camp/everest-base-camp-high-mountain-sunrise-13.jpg',
  'images/treks/everest-base-camp/everest-base-camp-high-altitude-lodge-dining-10.jpg',
  'images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg',
  'images/treks/everest-base-camp/everest-base-camp-suspension-bridge-crossing-05.jpg'
];

testImages.forEach(img => {
  console.log(img, 'exists:', fs.existsSync(img));
});
