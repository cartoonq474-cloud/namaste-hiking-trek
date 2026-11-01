const fs = require('fs');

function inspectPageImages(pagePath) {
  const html = fs.readFileSync(pagePath, 'utf8');
  console.log(`\n========================================`);
  console.log(`Page: ${pagePath}`);
  console.log(`========================================`);
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  console.log(`Total <img> tags: ${imgMatches.length}`);
  imgMatches.forEach((m, i) => {
    const src = m[1];
    const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '';
    console.log(`  ${i + 1}. src="${src.substring(0, 70)}" alt="${alt}"`);
  });

  const bgMatches = [...html.matchAll(/background(?:-image)?:\s*url\((['"]?)([^'")]+)\1\)/gi)];
  if (bgMatches.length > 0) {
    console.log(`CSS Background images: ${bgMatches.length}`);
    bgMatches.forEach((m, i) => {
      console.log(`  ${i + 1}. url="${m[2].substring(0, 70)}"`);
    });
  }

  const ogMatch = html.match(/<meta property=["']og:image["'] content=["']([^"']+)["']/i);
  if (ogMatch) {
    console.log(`og:image: "${ogMatch[1].substring(0, 70)}"`);
  }
}

inspectPageImages('trek/everest-base-camp-trek/index.html');
inspectPageImages('trek/annapurna-base-camp/index.html');
inspectPageImages('trek/mardi-himal-trek/index.html');
