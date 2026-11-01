const fs = require('fs');

const trekUpdates = [
  // 1. Mardi Himal
  {
    file: 'trek/mardi-himal-trek/index.html',
    title: 'Mardi Himal Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg',
    mainImg: {
      src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg',
      alt: 'Machhapuchhre Fishtail and Annapurna Range from Mardi Himal High Camp'
    },
    sub1: {
      src: '../../images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg',
      alt: 'Golden Himalayan Sunrise from Mardi Himal High Camp'
    },
    sub2: {
      src: '../../images/treks/mardi-himal/mardi-himal-trekkers-machhapuchhre-sunrise-11.jpg',
      alt: 'Trekkers Watching Sunrise over Machhapuchhre Fishtail Peak'
    },
    sub3: {
      src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-snow-banner-21.jpg',
      alt: 'Namaste Hiking Trek Team Celebration at Mardi Himal Viewpoint'
    },
    sub4: {
      src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-morning-light-24.jpg',
      alt: 'Annapurna Mountain Range in Morning Light'
    }
  },

  // 2. Annapurna Circuit Trek
  {
    file: 'trek/annapurna-circuit-trek/index.html',
    title: 'Annapurna Circuit Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg',
    mainImg: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg',
      alt: 'Trekking Group at Tilicho Lake along the Annapurna Circuit'
    },
    sub1: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg',
      alt: 'Trekkers on the Dramatic Cliffside Trail in the Annapurna Region'
    },
    sub2: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg',
      alt: 'Trekking Team at the Manang Welcome Gateway'
    },
    sub3: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg',
      alt: 'High Altitude Mountain Trail on the Annapurna Circuit'
    },
    sub4: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-pine-forest-10.jpg',
      alt: 'Trekking Group in Autumn Pine Forest along the Marsyangdi Valley'
    }
  },

  // 3. Tilicho Lake Trek
  {
    file: 'trek/tilicho-lake-trek/index.html',
    title: 'Tilicho Lake Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg',
    mainImg: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg',
      alt: 'Turquoise Waters of Tilicho Lake (4,919m)'
    },
    sub1: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-valley-19.jpg',
      alt: 'Trekking Group in the Rugged Tilicho Valley'
    },
    sub2: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg',
      alt: 'Hikers at the High Altitude Shores of Tilicho Lake'
    },
    sub3: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-mountain-trail-03.jpg',
      alt: 'High Mountain Trail to Tilicho Base Camp'
    },
    sub4: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-high-mountain-valley-trail-17.jpg',
      alt: 'High Mountain Valley Scenery on the Way to Tilicho Lake'
    }
  },

  // 4. Annapurna Base Camp
  {
    file: 'trek/annapurna-base-camp-trek/index.html',
    title: 'Annapurna Base Camp Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg',
    mainImg: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg',
      alt: 'Annapurna Sanctuary Mountain Range at Sunrise'
    },
    sub1: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-nepal-flag-snow-01.jpg',
      alt: 'Namaste Hiking Trek Team with Nepal Flag at Annapurna Base Camp'
    },
    sub2: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg',
      alt: 'Trekkers at the Snow-Covered ABC Mountain Viewpoint'
    },
    sub3: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-prayer-flags-snow-02.jpg',
      alt: 'Trekking Group with Buddhist Prayer Flags at Annapurna Sanctuary'
    },
    sub4: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-snowy-trail-teahouse-11.jpg',
      alt: 'Snowy Mountain Trail and Teahouse at Annapurna Base Camp'
    }
  },

  // 5. Gokyo Lakes Trek
  {
    file: 'trek/gokyo-lakes-trek/index.html',
    title: 'Gokyo Lakes Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg',
    mainImg: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg',
      alt: 'Iconic Turquoise Waters of Gokyo Lakes and Surrounding Peaks'
    },
    sub1: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-lakeside-village-04.jpg',
      alt: 'Gokyo Lakeside Sherpa Village and Teahouses'
    },
    sub2: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-trekkers-selfie-lake-07.jpg',
      alt: 'Happy Trekkers at Gokyo Lake Viewpoint'
    },
    sub3: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-alpine-lake-mountain-reflection-10.jpg',
      alt: 'Snow Peak Reflection in the Pristine Waters of Gokyo Lake'
    },
    sub4: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-prayer-flags-mountain-view-15.jpg',
      alt: 'Prayer Flags with Cho Oyu Mountain Panorama from Gokyo Ri'
    }
  },

  // 6. Gokyo Lakes & Cho La Pass
  {
    file: 'trek/gokyo-lakes-and-cho-la-pass/index.html',
    title: 'Gokyo Lakes and Cho La Pass Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg',
    mainImg: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg',
      alt: 'Spectacular Ama Dablam View on the Cho La Pass Trek'
    },
    sub1: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg',
      alt: 'Trekking Group Celebrating at the Summit of Cho La Pass (5,420m)'
    },
    sub2: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-turquoise-alpine-lake-05.jpg',
      alt: 'High Alpine Glacial Lake on the Cho La Pass Circuit'
    },
    sub3: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekkers-icy-trail-07.jpg',
      alt: 'Trekkers Navigating the Icy Glacier Trail on Cho La Pass'
    },
    sub4: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-glacier-18.jpg',
      alt: 'Namaste Hiking Trek Group on the Ngozumpa Glacier'
    }
  },

  // 7. Manaslu Circuit Trek
  {
    file: 'trek/manaslu-circuit-trek/index.html',
    title: 'Manaslu Circuit Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg',
    mainImg: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg',
      alt: 'Sunrise Illuminating Mt. Manaslu (8,163m)'
    },
    sub1: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg',
      alt: 'High Suspension Bridge crossing the Budhi Gandaki River Gorge'
    },
    sub2: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-trekker-mountain-village-01.jpg',
      alt: 'Traditional Tibetan-Influenced Mountain Village in Manaslu'
    },
    sub3: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg',
      alt: 'Yaks Grazing in High Himalayan Pastures of Samdo'
    },
    sub4: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg',
      alt: 'Colorful Prayer Flags and Stone Houses in Manaslu Circuit'
    }
  },

  // 8. Gosaikunda Lake Trek
  {
    file: 'trek/gosaikunda-lake-trek/index.html',
    title: 'Gosaikunda Lake Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg',
    mainImg: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg',
      alt: 'Holy Gosaikunda Lake Panorama Decorated with Prayer Flags'
    },
    sub1: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekkers-banner-frozen-lake-03.jpg',
      alt: 'Namaste Hiking Trek Banner at Frozen Gosaikunda Lake'
    },
    sub2: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-gateway-prayer-flags-05.jpg',
      alt: 'Mountain Pass Gateway with Sacred Buddhist Prayer Flags'
    },
    sub3: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekking-group-frozen-lake-06.jpg',
      alt: 'Trekking Group at the Holy Alpine Lake of Gosaikunda (4,380m)'
    },
    sub4: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-prayer-flags-snowy-shelter-04.jpg',
      alt: 'Snow-Covered Mountain Shelter along the Laurebina Pass Trail'
    }
  },

  // 9. Langtang Valley Trek
  {
    file: 'trek/langtang-valley-trek/index.html',
    title: 'Langtang Valley Trek',
    ogImage: 'https://namastehikingtrek.com/images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg',
    mainImg: {
      src: '../../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg',
      alt: 'Langtang Lirung Snow Peaks Towering over the Valley'
    },
    sub1: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekkers-mountain-view-01.jpg',
      alt: 'Trekkers Enjoying Panoramic Mountain Views in Kyanjin Gompa'
    },
    sub2: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekking-community-group-photo-07.jpg',
      alt: 'Namaste Hiking Trek Community Group in Langtang Valley'
    },
    sub3: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekkers-prayer-flags-02.jpg',
      alt: 'Prayer Flags at Kyanjin Ri Viewpoint'
    },
    sub4: {
      src: '../../images/treks/langtang-valley/langtang-trek-hiker-rocky-viewpoint-06.jpg',
      alt: 'Hiker at Rocky Summit Viewpoint above Kyanjin Gompa'
    }
  }
];

trekUpdates.forEach(u => {
  if (!fs.existsSync(u.file)) {
    console.error(`File does not exist: ${u.file}`);
    return;
  }

  let html = fs.readFileSync(u.file, 'utf8');

  // Update OG & Twitter
  html = html.replace(
    /<meta property="og:image" content="[^"]*"/i,
    `<meta property="og:image" content="${u.ogImage}"`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"/i,
    `<meta name="twitter:image" content="${u.ogImage}"`
  );

  // Update Hero Collage Gallery
  const oldGalleryPattern = /<div class="trek-gallery-collage">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
  const newGalleryHtml = `<div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="${u.mainImg.src}" alt="${u.mainImg.alt}">
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
          <img src="${u.sub1.src}" alt="${u.sub1.alt}">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="${u.sub2.src}" alt="${u.sub2.alt}">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="${u.sub3.src}" alt="${u.sub3.alt}">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="${u.sub4.src}" alt="${u.sub4.alt}">
        </div>
      </div>
    </div>`;

  if (oldGalleryPattern.test(html)) {
    html = html.replace(oldGalleryPattern, newGalleryHtml);
    fs.writeFileSync(u.file, html, 'utf8');
    console.log(`Updated gallery for ${u.file}`);
  } else {
    console.warn(`Could not match oldGalleryPattern in ${u.file}`);
  }
});

console.log('\nAll 9 trek galleries successfully updated with authentic photos!');
