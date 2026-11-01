const fs = require('fs');

// Helper to replace image in file if found
function updateFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  replacements.forEach(({ match, src, alt }) => {
    // Search for img tag containing the match
    const regex = new RegExp(`(<img[^>]+src=["'])[^"']*unsplash[^"']*([^>]*alt=["'][^"']*${match}[^"']*["'][^>]*)>`, 'gi');
    const regexAltFirst = new RegExp(`(<img[^>]+alt=["'][^"']*${match}[^"']*["'][^>]*src=["'])[^"']*unsplash[^"']*([^>]*>)`, 'gi');
    
    if (regex.test(content)) {
      content = content.replace(regex, `$1${src}$2>`);
      count++;
    } else if (regexAltFirst.test(content)) {
      content = content.replace(regexAltFirst, `$1${src}$2`);
      count++;
    }
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${filePath}: replaced ${count} images`);
}

// 1. nepal-trekking-packages/index.html
updateFile('nepal-trekking-packages/index.html', [
  { match: 'Everest Base Camp Trek', src: '../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg' },
  { match: 'Annapurna Circuit Trek', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg' },
  { match: 'Langtang Valley Trek', src: '../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg' },
  { match: 'Manaslu Circuit Trek', src: '../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg' },
  { match: 'Gokyo Lakes & Cho La Pass', src: '../images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg' },
  { match: 'Annapurna Base Camp \\(ABC\\)', src: '../images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg' },
  { match: 'Everest Three Passes Trek', src: '../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg' },
  { match: 'Gokyo Lakes Trek', src: '../images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg' },
  { match: 'Everest View Trek', src: '../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg' },
  { match: 'Everest Base Camp via Gokyo Lakes', src: '../images/treks/gokyo-lakes/gokyo-trek-alpine-lake-mountain-reflection-10.jpg' },
  { match: 'Mardi Himal Trek', src: '../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg' },
  { match: 'Annapurna Sanctuary Trek', src: '../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg' },
  { match: 'Tilicho Lake Trek', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg' },
  { match: 'Poon Hill & ABC Trek', src: '../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-nepal-flag-snow-01.jpg' },
  { match: 'Gosaikunda Lake Trek', src: '../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg' },
  { match: 'Langtang Gosaikunda Trek', src: '../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekkers-banner-frozen-lake-03.jpg' },
  { match: 'Manaslu Tsum Valley Trek', src: '../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg' }
]);

// 2. nepal-trekking-packages.html
updateFile('nepal-trekking-packages.html', [
  { match: 'Everest Base Camp Trek', src: 'images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg' },
  { match: 'Annapurna Circuit Trek', src: 'images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg' },
  { match: 'Langtang Valley Trek', src: 'images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg' },
  { match: 'Manaslu Circuit Trek', src: 'images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg' },
  { match: 'Gokyo Lakes & Cho La Pass', src: 'images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg' },
  { match: 'Annapurna Base Camp \\(ABC\\)', src: 'images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg' },
  { match: 'Everest Three Passes Trek', src: 'images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg' },
  { match: 'Gokyo Lakes Trek', src: 'images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg' },
  { match: 'Everest View Trek', src: 'images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg' },
  { match: 'Everest Base Camp via Gokyo Lakes', src: 'images/treks/gokyo-lakes/gokyo-trek-alpine-lake-mountain-reflection-10.jpg' },
  { match: 'Mardi Himal Trek', src: 'images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg' },
  { match: 'Annapurna Sanctuary Trek', src: 'images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg' },
  { match: 'Tilicho Lake Trek', src: 'images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg' },
  { match: 'Poon Hill & ABC Trek', src: 'images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-nepal-flag-snow-01.jpg' },
  { match: 'Gosaikunda Lake Trek', src: 'images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg' },
  { match: 'Langtang Gosaikunda Trek', src: 'images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekkers-banner-frozen-lake-03.jpg' },
  { match: 'Manaslu Tsum Valley Trek', src: 'images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg' }
]);

// 3. everest-region-treks/index.html
updateFile('everest-region-treks/index.html', [
  { match: 'Everest Base Camp Trek', src: '../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg' },
  { match: 'Gokyo Lakes Trek', src: '../images/treks/gokyo-lakes/gokyo-trek-turquoise-lake-panorama-13.jpg' },
  { match: 'Everest Three Passes Trek', src: '../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg' },
  { match: 'Cho La Pass Trek', src: '../images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg' },
  { match: 'Everest View Trek', src: '../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg' },
  { match: 'Alpine Lakes Lovers', src: '../images/treks/gokyo-lakes/gokyo-trek-alpine-lake-mountain-reflection-10.jpg' },
  { match: 'Experienced Trekkers', src: '../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekkers-icy-trail-07.jpg' }
]);

// 4. annapurna-region-treks/index.html
updateFile('annapurna-region-treks/index.html', [
  { match: 'Annapurna Base Camp Trek', src: '../images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg' },
  { match: 'Annapurna Circuit Trek', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg' },
  { match: 'Mardi Himal Trek', src: '../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg' },
  { match: 'Tilicho Lake & Circuit', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg' },
  { match: 'Alpine Sanctuary Lovers', src: '../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg' },
  { match: 'High Pass Challengers', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg' },
  { match: 'Short Trip Travelers', src: '../images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg' }
]);

// 5. manaslu-region-treks/index.html
updateFile('manaslu-region-treks/index.html', [
  { match: 'Manaslu Circuit Trek', src: '../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg' },
  { match: 'Manaslu & Tsum Valley Combo', src: '../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg' },
  { match: 'Short Manaslu Circuit', src: '../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg' },
  { match: 'Wilderness Enthusiasts', src: '../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg' },
  { match: 'Off-the-Beaten-Path Trekkers', src: '../images/treks/manaslu-circuit/manaslu-circuit-trekker-mountain-village-01.jpg' }
]);

// 6. langtang-region-treks/index.html
updateFile('langtang-region-treks/index.html', [
  { match: 'Langtang Valley Trek', src: '../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg' },
  { match: 'Gosaikunda Sacred Lakes Trek', src: '../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg' },
  { match: 'Langtang & Gosaikunda Pass', src: '../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-gateway-prayer-flags-05.jpg' },
  { match: 'Peaceful Nature Lovers', src: '../images/treks/langtang-valley/langtang-trek-trekkers-mountain-view-01.jpg' },
  { match: 'Sacred Lakes Pilgrims', src: '../images/treks/gosaikunda-lake/gosaikunda-lake-trek-trekkers-banner-frozen-lake-03.jpg' }
]);

// 7. trekking-regions-nepal/index.html
updateFile('trekking-regions-nepal/index.html', [
  { match: 'Everest Khumbu Region', src: '../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg' },
  { match: 'Annapurna Region', src: '../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg' },
  { match: 'Langtang Valley', src: '../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg' },
  { match: 'Manaslu Circuit Region', src: '../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg' }
]);

// 8. restricted-area-treks-nepal/index.html
updateFile('restricted-area-treks-nepal/index.html', [
  { match: 'Manaslu Circuit Trek', src: '../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg' }
]);
