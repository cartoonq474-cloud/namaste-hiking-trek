const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

function getAccordionCard(content, titleTerm) {
  const lines = content.split('\n');
  let cardLines = [];
  let recording = false;
  let openCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('class="detail-accordion-card"') && lines.slice(i, i+15).some(x => x.includes(titleTerm))) {
      recording = true;
    }
    if (recording) {
      cardLines.push(l);
      const openDivs = (l.match(/<div(\s|>)/g) || []).length;
      const closeDivs = (l.match(/<\/div>/g) || []).length;
      openCount += (openDivs - closeDivs);
      if (openCount === 0 && cardLines.length > 2) {
        break;
      }
    }
  }
  return cardLines.join('\n');
}

console.log('--- EVT Item 1 (Accommodation) length:', getAccordionCard(evt, 'Accommodation Along the Trail').length);
console.log('--- EBC Item 1 (Accommodation) length:', getAccordionCard(ebc, 'Accommodation for the Everest Base Camp Trek').length);

console.log('--- EVT Item 2 (Food) length:', getAccordionCard(evt, 'Available Food').length);
console.log('--- EBC Item 2 (Food) length:', getAccordionCard(ebc, 'Available Food').length);

console.log('--- EVT Item 3 (Best Time) length:', getAccordionCard(evt, 'Best Time').length);
console.log('--- EBC Item 3 (Best Time) length:', getAccordionCard(ebc, 'Best time').length);
