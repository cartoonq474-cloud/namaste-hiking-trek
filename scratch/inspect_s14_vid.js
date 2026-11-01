const fs = require('fs');

const s14 = fs.readFileSync('scratch/s14_dump.html', 'utf8');
const vidMatch = s14.match(/<div id="tab-video-reviews"[\s\S]*?(?=<\/section>)/);
if (vidMatch) {
  console.log('Video reviews in S14:');
  console.log(vidMatch[0]);
}
