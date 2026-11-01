const fs = require('fs');

let html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. Update OG and Twitter image meta tags
html = html.replace(
  /<meta property="og:image" content="[^"]*"/i,
  '<meta property="og:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg"'
);
html = html.replace(
  /<meta name="twitter:image" content="[^"]*"/i,
  '<meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg"'
);

// 2. Update Hero Collage Gallery (5 photos)
const oldGalleryPattern = /<div class="trek-gallery-collage">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
const newGalleryHtml = `<div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg" alt="Everest Base Camp Trek Panoramic Mountain View with Trekkers">
          <!-- TripAdvisor Travelers' Choice Badge -->
          <div class="trek-gallery-badge">
            <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center;">
              <svg class="icon-svg icon-sm icon-svg-fill" style="stroke: none; fill: white;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div class="trek-gallery-badge-text">
              <span>Travelers' Choice</span>
              <span>Best of the Best 2026</span>
            </div>
          </div>
        </div>
        
        <!-- Grid Items (Right 2x2 Columns) -->
        <div class="trek-gallery-sub">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg" alt="Trekking Group on Suspension Bridge in Sagarmatha National Park">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg" alt="Namaste Hiking Trek Team Celebration at Everest Base Camp">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg" alt="Tengboche Monastery with Himalayan Peaks">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-yak-mountain-view-15.jpg" alt="Himalayan Yak on the Everest Base Camp Trail">
        </div>
      </div>
    </div>`;

html = html.replace(oldGalleryPattern, newGalleryHtml);

// 3. Update Itinerary photos with authentic photos
// Let's replace key Unsplash images in the itinerary with matching authentic photos
const ebcReplacements = [
  // Day 2 (Lukla to Phakding)
  {
    target: 'src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=400&q=80" alt="Dudh Koshi Bridge"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg" alt="Crossing the Dudh Koshi Suspension Bridge on EBC Trek"'
  },
  // Day 3 (Phakding to Namche)
  {
    target: 'src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80" alt="Sherpa Pine Forest path"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-stupa-village-05.jpg" alt="Sherpa Stupa and Village on the trail to Namche Bazaar"'
  },
  // Day 4 (Acclimatization in Namche)
  {
    target: 'src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" alt="Peaks above Namche"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-view-10.jpg" alt="Trekkers taking in mountain views above Namche Bazaar"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80" alt="Thamserku Peak"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-lodge-08.jpg" alt="Sherpa mountain village lodge in the Khumbu"'
  },
  // Day 5 (Namche to Tengboche)
  {
    target: 'src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" alt="Tengboche Monastery"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg" alt="Tengboche Monastery courtyard with Namaste Hiking Trek group"'
  },
  // Day 6 (Tengboche to Dingboche)
  {
    target: 'src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80" alt="High Himalayan valley trail"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-yak-mountain-view-15.jpg" alt="Himalayan yak grazing with snow-capped peaks in the background"'
  },
  // Day 7 (Acclimatization in Dingboche)
  {
    target: 'src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80" alt="Nangkartshang Peak views"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-mountain-trail-view-12.jpg" alt="Nangkartshang acclimatization hike trail view toward Ama Dablam"'
  },
  // Day 8 (Dingboche to Lobuche)
  {
    target: 'src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80" alt="Thokla Pass Memorials"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-mountain-cairn-view-18.jpg" alt="Thokla Pass stone memorial cairns with prayer flags"'
  },
  // Day 9 (Lobuche to Gorak Shep and Kala Patthar)
  {
    target: 'src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80" alt="Kala Patthar panorama"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-high-mountain-sunrise-13.jpg" alt="Golden sunrise illuminating Everest and Pumori from Kala Patthar"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=400&q=80" alt="Pumori mountain close view"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-snow-peak-evening-17.jpg" alt="Majestic snow peak at sunset above Gorak Shep"'
  },
  // Day 10 (Gorak Shep to Everest Base Camp and Pheriche)
  {
    target: 'src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=400&q=80" alt="EBC Rock Sign"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-trail-monument-04.jpg" alt="Namaste Hiking Trek group at the Everest Base Camp landmark rock (5,364m)"'
  },
  {
    target: 'src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=400&q=80" alt="Khumbu Icefall close view"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg" alt="Team members gathered in celebration at Everest Base Camp"'
  },
  // Day 11 (Pheriche to Namche)
  {
    target: 'src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80" alt="Pangboche houses backdrop"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg" alt="Valley trail descent through alpine meadows toward Namche Bazaar"'
  },
  // Day 12 (Namche to Lukla)
  {
    target: 'src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80" alt="End of trek celebration"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-14.jpg" alt="Trekking crew and clients celebrating in the mountain village near Lukla"'
  },
  // Day 13 (Lukla to Kathmandu)
  {
    target: 'src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80" alt="Himalayas landscape flight"',
    replacement: 'src="../../images/treks/everest-base-camp/everest-base-camp-snow-peak-clouds-16.jpg" alt="Cloud-draped Himalayan mountain peaks viewed on the flight back"'
  }
];

let replacedCount = 0;
ebcReplacements.forEach(r => {
  if (html.includes(r.target)) {
    html = html.replace(r.target, r.replacement);
    replacedCount++;
  } else {
    console.warn('Target string not found:', r.target.substring(0, 60));
  }
});

console.log(`Replaced ${replacedCount} itinerary images with authentic EBC photos!`);

fs.writeFileSync('trek/everest-base-camp-trek/index.html', html, 'utf8');
console.log('Successfully updated trek/everest-base-camp-trek/index.html with authentic photos!');
