const fs = require('fs');

const file = 'peak-climbing-nepal/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Update og:image & add twitter:image if missing
html = html.replace(
  /<meta property="og:image"[^>]*>/i,
  `<meta property="og:image" content="https://namastehikingtrek.com/images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg">\n  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg">`
);

// 2. Update Mera Peak Climbing Expedition card image
html = html.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=800&q=80" alt="Mera Peak Climbing Expedition"/,
  `<img src="../images/treks/mera-peak/mera-peak-climbers-summit-banner-05.jpg" alt="Mera Peak Climbing Expedition with Namaste Hiking Trek Summit Team"`
);

// 3. Update First-Time Mountaineers image (features Mera Peak)
html = html.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1526772662000-3f88f10405ff\?auto=format&fit=crop&w=600&q=80" alt="First-Time Mountaineers"/,
  `<img src="../images/treks/mera-peak/mera-peak-climbers-sunrise-snowfield-10.jpg" alt="First-Time Mountaineers Climbing on Mera Peak Snowfield at Sunrise"`
);

// 4. Update 8,000m Panorama Seekers image (features Mera Peak summit)
html = html.replace(
  /<img src="https:\/\/images\.unsplash\.com\/photo-1506744038136-46273834b3fb\?auto=format&fit=crop&w=600&q=80" alt="8,000m Panorama Seekers"/,
  `<img src="../images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg" alt="8,000m Himalayan Mountain Panorama from Mera Peak Summit"`
);

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully updated peak-climbing-nepal/index.html with authentic Mera Peak images!');
