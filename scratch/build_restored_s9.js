const fs = require('fs');

let s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

// Replace external unsplash video backgrounds with authentic local thumbnails
// Card 1: Angelina
s9 = s9.replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1534528741775-53994a69daeb\?auto=format&amp;fit=crop&amp;w=600&amp;q=80'\);"/g,
  `style="background-image: url('images/video-thumb-angelina.png');"`
).replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1534528741775-53994a69daeb\?auto=format&fit=crop&w=600&q=80'\);"/g,
  `style="background-image: url('images/video-thumb-angelina.png');"`
);

// Card 2: David
s9 = s9.replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d\?auto=format&amp;fit=crop&amp;w=600&amp;q=80'\);"/g,
  `style="background-image: url('images/video-thumb-david.png');"`
).replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d\?auto=format&fit=crop&w=600&q=80'\);"/g,
  `style="background-image: url('images/video-thumb-david.png');"`
);

// Card 3: Emma
s9 = s9.replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1517841905240-472988babdf9\?auto=format&amp;fit=crop&amp;w=600&amp;q=80'\);"/g,
  `style="background-image: url('images/video-thumb-emma.png');"`
).replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1517841905240-472988babdf9\?auto=format&fit=crop&w=600&q=80'\);"/g,
  `style="background-image: url('images/video-thumb-emma.png');"`
);

// Card 4: Chad
s9 = s9.replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1539571696357-5a69c17a67c6\?auto=format&amp;fit=crop&amp;w=600&amp;q=80'\);"/g,
  `style="background-image: url('images/video-thumb-chad.png');"`
).replace(
  /style="background-image:\s*url\('https:\/\/images\.unsplash\.com\/photo-1539571696357-5a69c17a67c6\?auto=format&fit=crop&w=600&q=80'\);"/g,
  `style="background-image: url('images/video-thumb-chad.png');"`
);

fs.writeFileSync('scratch/restored_s9_section.html', s9);
console.log('Saved scratch/restored_s9_section.html, length:', s9.length);
