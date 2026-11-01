const fs = require('fs');
const path = require('path');

const pageMapping = [
  // 1. Annapurna Circuit Trek
  {
    file: 'trek/annapurna-circuit-trek/index.html',
    imgDir: 'images/treks/annapurna-circuit'
  },
  // 2. Tilicho Lake Trek
  {
    file: 'trek/tilicho-lake-trek/index.html',
    imgDir: 'images/treks/annapurna-circuit'
  },
  // 3. Mardi Himal Trek
  {
    file: 'trek/mardi-himal-trek/index.html',
    imgDir: 'images/treks/mardi-himal'
  },
  // 4. Everest Base Camp Trek
  {
    file: 'trek/everest-base-camp-trek/index.html',
    imgDir: 'images/treks/everest-base-camp'
  },
  // 5. Everest with Cho La Pass
  {
    file: 'trek/gokyo-lakes-and-cho-la-pass/index.html',
    imgDir: 'images/treks/everest-cho-la-pass'
  },
  // 6. Gokyo Lakes Trek
  {
    file: 'trek/gokyo-lakes-trek/index.html',
    imgDir: 'images/treks/gokyo-lakes'
  },
  // 7. Manaslu Circuit Trek
  {
    file: 'trek/manaslu-circuit-trek/index.html',
    imgDir: 'images/treks/manaslu-circuit'
  },
  // 8. Annapurna Base Camp
  {
    file: 'trek/annapurna-base-camp-trek/index.html',
    imgDir: 'images/treks/annapurna-base-camp'
  },
  // 9. Gosaikunda Lake Trek
  {
    file: 'trek/gosaikunda-lake-trek/index.html',
    imgDir: 'images/treks/gosaikunda-lake'
  },
  // 10. Langtang Valley Trek
  {
    file: 'trek/langtang-valley-trek/index.html',
    imgDir: 'images/treks/langtang-valley'
  },
  // Secondary pages
  {
    file: 'trek/annapurna-sanctuary-trek/index.html',
    imgDir: 'images/treks/annapurna-base-camp'
  },
  {
    file: 'trek/poon-hill-abc-trek/index.html',
    imgDir: 'images/treks/annapurna-base-camp'
  },
  {
    file: 'trek/everest-view-trek/index.html',
    imgDir: 'images/treks/everest-base-camp'
  },
  {
    file: 'trek/everest-three-passes-trek/index.html',
    imgDir: 'images/treks/everest-cho-la-pass'
  },
  {
    file: 'trek/everest-base-camp-via-gokyo-lakes/index.html',
    imgDir: 'images/treks/gokyo-lakes'
  },
  {
    file: 'trek/manaslu-tsum-valley-trek/index.html',
    imgDir: 'images/treks/manaslu-circuit'
  },
  {
    file: 'trek/langtang-gosaikunda-trek/index.html',
    imgDir: 'images/treks/langtang-valley'
  }
];

function formatAlt(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/-\d+$/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

pageMapping.forEach(({ file, imgDir }) => {
  if (!fs.existsSync(file)) {
    console.log(`Skipping missing file: ${file}`);
    return;
  }
  let content = fs.readFileSync(file, 'utf8');
  const photos = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  if (photos.length === 0) {
    console.log(`No photos found in ${imgDir}`);
    return;
  }

  let slotIndex = 0;
  // Replace each itinerary-photo-wrapper that currently has an img
  content = content.replace(/<div class="itinerary-photo-wrapper">\s*<img[^>]+>\s*<\/div>/g, () => {
    const photo = photos[slotIndex % photos.length];
    const relPath = `../../${imgDir}/${photo}`;
    const alt = formatAlt(photo);
    slotIndex++;
    return `<div class="itinerary-photo-wrapper">\n                        <img loading="lazy" src="${relPath}" alt="${alt}">\n                      </div>`;
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✓ Updated ${file}: ${slotIndex} itinerary photos replaced with authentic images from ${imgDir}`);
});
