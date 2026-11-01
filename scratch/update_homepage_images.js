const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  // 1. Destination Ticker - Everest Khumbu Region
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=600&q=80"\s+alt="Everest Khumbu Region"/g,
    replace: '<img loading="lazy" src="images/treks/everest-base-camp/everest-base-camp-mountain-panorama-11.jpg" alt="Everest Khumbu Region Trek with Namaste Hiking Trek"'
  },
  // 2. Destination Ticker - Annapurna Massif
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1502784444187-359ac186c5bb\?auto=format&fit=crop&w=600&q=80"\s+alt="Annapurna Massif"/g,
    replace: '<img loading="lazy" src="images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg" alt="Annapurna Massif Trek with Namaste Hiking Trek"'
  },
  // 3. Destination Ticker - Langtang Valley
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1486870591958-9b9d0d1dda99\?auto=format&fit=crop&w=600&q=80"\s+alt="Langtang Valley"/g,
    replace: '<img loading="lazy" src="images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg" alt="Langtang Valley Sacred Mountain Vista"'
  },
  // 4. Destination Ticker - Manaslu Circuit
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1519681393784-d120267933ba\?auto=format&fit=crop&w=600&q=80"\s+alt="Manaslu Circuit"/g,
    replace: '<img loading="lazy" src="images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Manaslu Circuit Mountain Village & Prayer Flags"'
  },

  // 5. Activity Card - Everest Base Camp Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=600&q=80"\s+alt="Everest Base Camp Trek"/,
    replace: '<img loading="lazy" src="images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg" alt="Everest Base Camp Trek Team Celebration with Namaste Hiking Trek"'
  },
  // 6. Activity Card - Annapurna Circuit Expedition
  {
    regex: /<img loading="lazy"\s+src="https:\/\/images\.unsplash\.com\/photo-1502784444187-359ac186c5bb\?auto=format&fit=crop&w=600&q=80"\s+alt="Annapurna Circuit Expedition"/,
    replace: '<img loading="lazy" src="images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg" alt="Annapurna Circuit & Tilicho Lake Trekking Expedition"'
  },
  // 7. Activity Card - Manaslu Circuit & Larke Pass
  {
    regex: /<img loading="lazy"\s+src="https:\/\/images\.unsplash\.com\/photo-1519681393784-d120267933ba\?auto=format&fit=crop&w=600&q=80"\s+alt="Manaslu Circuit & Larke Pass"/,
    replace: '<img loading="lazy" src="images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg" alt="Manaslu Circuit & Larke Pass Sunrise Vista"'
  },

  // 8. Exotic Trek Card - Everest Base Camp Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=800&q=80"\s+alt="Everest Base Camp Trek"/,
    replace: '<img loading="lazy" src="images/treks/everest-base-camp/everest-base-camp-mountain-panorama-11.jpg" alt="Everest Base Camp Trek Panoramic View"'
  },
  // 9. Exotic Trek Card - Annapurna Base Camp Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1502784444187-359ac186c5bb\?auto=format&fit=crop&w=800&q=80"\s+alt="Annapurna Base Camp Trek"/,
    replace: '<img loading="lazy" src="images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg" alt="Annapurna Base Camp Sanctuary Sunrise Panorama"'
  },
  // 10. Exotic Trek Card - Manaslu Circuit Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1519681393784-d120267933ba\?auto=format&fit=crop&w=800&q=80"\s+alt="Manaslu Circuit Trek"/,
    replace: '<img loading="lazy" src="images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg" alt="Manaslu Circuit Suspension Bridge & Gorge"'
  },
  // 11. Exotic Trek Card - Mardi Himal Ridge Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1464822759023-fed622ff2c3b\?auto=format&fit=crop&w=800&q=80"\s+alt="Mardi Himal Ridge Trek"/,
    replace: '<img loading="lazy" src="images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg" alt="Mardi Himal Ridge Trek with Machhapuchhre Fishtail View"'
  },
  // 12. Exotic Trek Card - Gokyo Lakes & Cho La Pass
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1506744038136-46273834b3fb\?auto=format&fit=crop&w=800&q=80"\s+alt="Gokyo Lakes & Cho La Pass"/,
    replace: '<img loading="lazy" src="images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg" alt="Gokyo Lakes & Cho La Pass View of Ama Dablam"'
  },
  // 13. Exotic Trek Card - Langtang Valley Trek
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1486870591958-9b9d0d1dda99\?auto=format&fit=crop&w=800&q=80"\s+alt="Langtang Valley Trek"/,
    replace: '<img loading="lazy" src="images/treks/langtang-valley/langtang-trek-trekkers-mountain-view-01.jpg" alt="Langtang Valley Trek with Panoramic Mountain View"'
  },

  // 14. Peak Climbing Card - Mera Peak Climbing
  {
    regex: /<img loading="lazy" src="https:\/\/images\.unsplash\.com\/photo-1519681393784-d120267933ba\?auto=format&fit=crop&w=800&q=80"\s+alt="Mera Peak Climbing"/,
    replace: '<img loading="lazy" src="images/treks/mera-peak/mera-peak-climbers-summit-banner-05.jpg" alt="Mera Peak 6,476m Summit Climbing Expedition"'
  },

  // 15. Newsletter Preview
  {
    regex: /<img src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=600&q=80"\s+alt="Namaste Hiking Trek Newsletter Preview"/,
    replace: '<img src="images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg" alt="Namaste Hiking Trek Newsletter Preview - High Camp Sunrise"'
  }
];

let replacedCount = 0;
replacements.forEach((r, idx) => {
  if (r.regex.test(html)) {
    html = html.replace(r.regex, r.replace);
    replacedCount++;
    console.log(`✓ Replacement ${idx + 1} succeeded`);
  } else {
    console.warn(`✗ Replacement ${idx + 1} pattern not found`);
  }
});

fs.writeFileSync('index.html', html, 'utf8');
console.log(`\nSuccessfully applied ${replacedCount} / ${replacements.length} image replacements to index.html`);
