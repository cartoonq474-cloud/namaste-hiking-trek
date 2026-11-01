const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== EBC PAGE SECTIONS & ATTRIBUTES ===');
console.log('Title:', html.match(/<title>(.*?)<\/title>/)[1]);
console.log('Canonical:', html.match(/<link rel="canonical" href="(.*?)"/)[1]);

const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"[^>]*class="([^"]*)"/g)].map(m => ({ id: m[1], class: m[2] }));
console.log('Sections:', sections);

const trekDetailsWrapper = html.match(/data-trek-details-wrapper[^>]*data-trek-key="([^"]+)"/);
console.log('Trek details wrapper key:', trekDetailsWrapper ? trekDetailsWrapper[1] : 'None');

const altWrapper = html.match(/id="altitude-chart-wrapper"[^>]*data-trek-key="([^"]+)"/);
console.log('Altitude chart wrapper key:', altWrapper ? altWrapper[1] : 'None');

const weaWrapper = html.match(/id="weather-chart-wrapper"[^>]*data-trek-key="([^"]+)"/);
console.log('Weather chart wrapper key:', weaWrapper ? weaWrapper[1] : 'None');

const detailCards = [...html.matchAll(/class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"/g)].map(m => m[1]);
console.log('Detail card IDs in EBC (count: ' + detailCards.length + '):', detailCards);

const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Scripts:', scripts);

