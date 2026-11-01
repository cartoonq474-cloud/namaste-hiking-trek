const fs = require('fs');
const path = require('path');

const imageMap = [
  {
    folder: 'Everest Base Camp',
    count: 18,
    primaryPage: 'trek/everest-base-camp-trek/index.html',
    relatedPages: ['trek/everest-view-trek/index.html', 'trek/everest-three-passes-trek/index.html']
  },
  {
    folder: 'Everest with Cho La Pass',
    count: 18,
    primaryPage: 'trek/gokyo-lakes-and-cho-la-pass/index.html',
    relatedPages: ['trek/everest-base-camp-via-gokyo-lakes/index.html']
  },
  {
    folder: 'Gokyo Trek',
    count: 15,
    primaryPage: 'trek/gokyo-lakes-trek/index.html',
    relatedPages: ['trek/everest-base-camp-via-gokyo-lakes/index.html']
  },
  {
    folder: 'Annapurna Base Camp',
    count: 11,
    primaryPage: 'trek/annapurna-base-camp/index.html',
    relatedPages: ['trek/annapurna-sanctuary-trek/index.html', 'trek/poon-hill-abc-trek/index.html']
  },
  {
    folder: 'Annapurna Circuit and Tilicho Lake',
    count: 19,
    primaryPage: 'trek/annapurna-circuit-trek/index.html',
    relatedPages: ['trek/tilicho-lake-trek/index.html']
  },
  {
    folder: 'Manaslu Circuit',
    count: 14,
    primaryPage: 'trek/manaslu-circuit-trek/index.html',
    relatedPages: ['trek/manaslu-tsum-valley-trek/index.html']
  },
  {
    folder: 'Mardi Himal',
    count: 32,
    primaryPage: 'trek/mardi-himal-trek/index.html',
    relatedPages: []
  },
  {
    folder: 'Gosaikunda Lake Trek',
    count: 10,
    primaryPage: 'trek/gosaikunda-lake-trek/index.html',
    relatedPages: ['trek/langtang-gosaikunda-trek/index.html']
  },
  {
    folder: 'Langtang Trek',
    count: 7,
    primaryPage: 'trek/langtang-valley-trek/index.html',
    relatedPages: ['trek/langtang-gosaikunda-trek/index.html']
  },
  {
    folder: 'Mera Peak',
    count: 12,
    primaryPage: 'peak-climbing-nepal/index.html',
    relatedPages: []
  }
];

const results = [];

imageMap.forEach(item => {
  const existsPrimary = fs.existsSync(item.primaryPage);
  let primaryUnsplash = 0;
  let primaryTotalImgs = 0;
  if (existsPrimary) {
    const html = fs.readFileSync(item.primaryPage, 'utf8');
    const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
    primaryTotalImgs = imgs.length;
    primaryUnsplash = imgs.filter(m => m[1].includes('unsplash.com')).length;
  }

  results.push({
    folder: item.folder,
    imageCount: item.count,
    primaryPage: item.primaryPage,
    existsPrimary,
    primaryTotalImgs,
    primaryUnsplash,
    relatedPages: item.relatedPages.filter(p => fs.existsSync(p))
  });
});

console.log(JSON.stringify(results, null, 2));
