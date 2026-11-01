const fs = require('fs');

const trekData = [
  // 1. Everest Base Camp Trek
  {
    file: 'trek/everest-base-camp-trek/index.html',
    main: {
      src: '../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg',
      alt: 'Everest Base Camp Trek Panoramic Mountain View with Trekkers'
    },
    sub1: {
      src: '../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg',
      alt: 'Trekking Group on Suspension Bridge in Sagarmatha National Park'
    },
    sub2: {
      src: '../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg',
      alt: 'Namaste Hiking Trek Team Celebration at Everest Base Camp'
    },
    sub3: {
      src: '../../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg',
      alt: 'Tengboche Monastery with Himalayan Peaks'
    },
    sub4: {
      src: '../../images/treks/everest-base-camp/everest-base-camp-yak-mountain-view-15.jpg',
      alt: 'Himalayan Yak on the Everest Base Camp Trail'
    }
  },

  // 2. Mardi Himal Trek
  {
    file: 'trek/mardi-himal-trek/index.html',
    main: {
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

  // 3. Annapurna Circuit Trek
  {
    file: 'trek/annapurna-circuit-trek/index.html',
    main: {
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

  // 4. Tilicho Lake Trek
  {
    file: 'trek/tilicho-lake-trek/index.html',
    main: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg',
      alt: 'Tilicho Lake at 4,919m with Glacial Waters and Annapurna Peaks'
    },
    sub1: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg',
      alt: 'Trekkers Arriving at Pristine Turquoise Tilicho Lake'
    },
    sub2: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-valley-19.jpg',
      alt: 'Trekking Team in the Dramatic Tilicho Valley'
    },
    sub3: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg',
      alt: 'Trekkers Navigating the High Cliffside Trail toward Tilicho Base Camp'
    },
    sub4: {
      src: '../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-high-mountain-valley-trail-17.jpg',
      alt: 'High Himalayan Valley Trail on the Tilicho Lake Route'
    }
  },

  // 5. Annapurna Base Camp
  {
    file: 'trek/annapurna-base-camp/index.html',
    main: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg',
      alt: 'Golden Sunrise illuminating the Annapurna Mountain Range at Base Camp'
    },
    sub1: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-nepal-flag-snow-01.jpg',
      alt: 'Namaste Hiking Trek Team with Nepal Flag in Snow at ABC'
    },
    sub2: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg',
      alt: 'Trekkers at Himalayan Viewpoint gazing at Annapurna South'
    },
    sub3: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-snowy-trail-teahouse-11.jpg',
      alt: 'Snow-Covered Trail and Mountain Lodge in Annapurna Sanctuary'
    },
    sub4: {
      src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-prayer-flags-snow-02.jpg',
      alt: 'Trekking Group celebrating among Buddhist Prayer Flags at Base Camp'
    }
  },

  // 6. Gokyo Lakes Trek
  {
    file: 'trek/gokyo-lakes-trek/index.html',
    main: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg',
      alt: 'Turquoise Third Gokyo Lake Dudh Pokhari with Cho Oyu Backdrop'
    },
    sub1: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-lakeside-village-04.jpg',
      alt: 'Gokyo Lakeside Village nestled beside the Glacial Waters'
    },
    sub2: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-trekkers-selfie-lake-07.jpg',
      alt: 'Trekkers Celebrating beside the Turquoise Alpine Lake at Gokyo'
    },
    sub3: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-alpine-lake-mountain-reflection-10.jpg',
      alt: 'Mirror Mountain Reflections in Pristine Gokyo Lake'
    },
    sub4: {
      src: '../../images/treks/gokyo-lakes/gokyo-trek-glacier-mountain-view-01.jpg',
      alt: 'Ngozumpa Glacier and Himalayan Peaks viewed from Gokyo'
    }
  },

  // 7. Everest with Cho La Pass
  {
    file: 'trek/gokyo-lakes-and-cho-la-pass/index.html',
    main: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg',
      alt: 'Dramatic Vista of Ama Dablam and Everest Peaks from Cho La Route'
    },
    sub1: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg',
      alt: 'Trekking Group Celebrating on the 5,420m Summit of Cho La Pass'
    },
    sub2: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-turquoise-alpine-lake-05.jpg',
      alt: 'Turquoise High Alpine Lake along the Cho La Pass Crossing'
    },
    sub3: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekkers-icy-trail-07.jpg',
      alt: 'Trekkers Navigating the Glacial Snowfield on Cho La Pass'
    },
    sub4: {
      src: '../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-glacier-18.jpg',
      alt: 'Trekking Team Trekking across the Massive Ngozumpa Glacier'
    }
  },

  // 8. Manaslu Circuit Trek
  {
    file: 'trek/manaslu-circuit-trek/index.html',
    main: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg',
      alt: 'Golden Himalayan Sunrise lighting up Mount Manaslu 8,163m'
    },
    sub1: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg',
      alt: 'Deep River Gorge Suspension Bridge on the Manaslu Circuit'
    },
    sub2: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-trekker-mountain-village-01.jpg',
      alt: 'Trekker Walking through Traditional Himalayan Mountain Village'
    },
    sub3: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg',
      alt: 'Highland Yak Pasture under Towering Snow-Capped Peaks'
    },
    sub4: {
      src: '../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg',
      alt: 'Tibetan Buddhist Prayer Flags fluttering over Ancient Manaslu Village'
    }
  },

  // 9. Gosaikunda Lake Trek
  {
    file: 'trek/gosaikunda-lake-trek/index.html',
    main: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg',
      alt: 'Holy Gosaikunda Lake Panorama decorated with Buddhist Prayer Flags'
    },
    sub1: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekkers-banner-frozen-lake-03.jpg',
      alt: 'Trekkers holding Namaste Hiking Trek Banner at Sacred Gosaikunda'
    },
    sub2: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-gateway-prayer-flags-05.jpg',
      alt: 'Mountain Pass Gateway festooned with Colorful Prayer Flags'
    },
    sub3: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekking-group-frozen-lake-06.jpg',
      alt: 'Trekking Team standing above the Glacial Waters of Gosaikunda'
    },
    sub4: {
      src: '../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-prayer-flags-snowy-shelter-04.jpg',
      alt: 'High Altitude Mountain Shelter surrounded by Snow and Flags'
    }
  },

  // 10. Langtang Valley Trek
  {
    file: 'trek/langtang-valley-trek/index.html',
    main: {
      src: '../../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg',
      alt: 'Majestic Snow-Capped Peaks surrounding Kyanjin Gompa in Langtang'
    },
    sub1: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekkers-mountain-view-01.jpg',
      alt: 'Trekkers admiring the Panoramic Langtang Lirung Mountain Range'
    },
    sub2: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekking-community-group-photo-07.jpg',
      alt: 'Warm Cultural Welcome with Local Community in Langtang Valley'
    },
    sub3: {
      src: '../../images/treks/langtang-valley/langtang-trek-trekkers-prayer-flags-02.jpg',
      alt: 'Trekkers on High Viewpoint surrounded by Buddhist Prayer Flags'
    },
    sub4: {
      src: '../../images/treks/langtang-valley/langtang-trek-hiker-rocky-viewpoint-06.jpg',
      alt: 'Hiker standing on Rocky Ridge looking across Langtang National Park'
    }
  }
];

function generateCleanGallery(t) {
  return `<!-- Multi-Image Collage Gallery -->
    <div class="container" style="margin-bottom: 24px;">
      <div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="${t.main.src}" alt="${t.main.alt}">
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
          <img src="${t.sub1.src}" alt="${t.sub1.alt}">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="${t.sub2.src}" alt="${t.sub2.alt}">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="${t.sub3.src}" alt="${t.sub3.alt}">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="${t.sub4.src}" alt="${t.sub4.alt}">
        </div>
      </div>
    </div>\n\n    `;
}

trekData.forEach(t => {
  let content = fs.readFileSync(t.file, 'utf8');
  const startStr = '<!-- Multi-Image Collage Gallery -->';
  const endStr = '<!-- Key Trip Facts Grid -->';
  const p1 = content.indexOf(startStr);
  const p2 = content.indexOf(endStr);
  if (p1 === -1 || p2 === -1) {
    console.error(`Boundary not found in ${t.file}`);
    return;
  }
  const cleanGalleryHtml = generateCleanGallery(t);
  const updatedContent = content.substring(0, p1) + cleanGalleryHtml + content.substring(p2);
  fs.writeFileSync(t.file, updatedContent, 'utf8');
  console.log(`✓ Updated ${t.file} with clean 5-photo gallery (orphan dummy images removed completely)`);
});
