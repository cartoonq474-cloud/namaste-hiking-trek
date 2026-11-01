const fs = require('fs');

const imgFiles = fs.readdirSync('images');
console.log('Video thumb images:', imgFiles.filter(f => f.includes('video') || f.includes('thumb') || f.includes('review')));
