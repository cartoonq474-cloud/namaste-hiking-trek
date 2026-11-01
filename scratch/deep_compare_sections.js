const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evtHtml = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// List of all sections in EBC
const sectionIds = [
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing',
  'section-details',
  'section-altitude-profile',
  'section-weather',
  'section-map',
  'section-booking',
  'section-reviews',
  'section-faqs'
];

function getSectionSlice(html, secId, nextSecId) {
  const regex = new RegExp(`<section[^>]*id="${secId}"[\\s\\S]*?(?=<section[^>]*id="${nextSecId}"|<\\/main>|<footer|$)`, 'i');
  const match = html.match(regex);
  return match ? match[0] : null;
}


const report = {};

for (let i = 0; i < sectionIds.length; i++) {
  const id = sectionIds[i];
  const nextId = sectionIds[i + 1] || 'footer';

  // For EVT, altitude might be section-altitude or section-altitude-profile
  let evtId = id;
  if (id === 'section-altitude-profile' && !evtHtml.includes('id="section-altitude-profile"')) {
    evtId = 'section-altitude';
  }

  const ebcSlice = getSectionSlice(ebcHtml, id, nextId);
  const evtSlice = getSectionSlice(evtHtml, evtId, sectionIds[i + 1] || 'footer');

  report[id] = {
    ebcPresent: !!ebcSlice,
    evtPresent: !!evtSlice,
    ebcLength: ebcSlice ? ebcSlice.length : 0,
    evtLength: evtSlice ? evtSlice.length : 0,
    ebcTag: ebcSlice ? ebcSlice.match(/<section[^>]*>/)[0] : null,
    evtTag: evtSlice ? evtSlice.match(/<section[^>]*>/)[0] : null,
    ebcClasses: ebcSlice ? [...new Set([...ebcSlice.matchAll(/class="([^"]+)"/g)].map(m => m[1]))].slice(0, 8) : [],
    evtClasses: evtSlice ? [...new Set([...evtSlice.matchAll(/class="([^"]+)"/g)].map(m => m[1]))].slice(0, 8) : [],
    ebcHeadings: ebcSlice ? [...ebcSlice.matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(m => m[0].replace(/<[^>]+>/g, '').trim()).slice(0, 4) : [],
    evtHeadings: evtSlice ? [...evtSlice.matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(m => m[0].replace(/<[^>]+>/g, '').trim()).slice(0, 4) : []
  };
}

fs.writeFileSync('scratch/section_audit_comparison.json', JSON.stringify(report, null, 2), 'utf8');
console.log('Saved section audit comparison to scratch/section_audit_comparison.json');

// Let's print a quick summary
for (const [id, data] of Object.entries(report)) {
  console.log(`\n================== ${id} ==================`);
  console.log('EBC Heading:', data.ebcHeadings[0]);
  console.log('EVT Heading:', data.evtHeadings[0]);
  console.log('EBC tag:', data.ebcTag);
  console.log('EVT tag:', data.evtTag);
  console.log('EBC key classes:', data.ebcClasses.slice(0, 4));
  console.log('EVT key classes:', data.evtClasses.slice(0, 4));
}
