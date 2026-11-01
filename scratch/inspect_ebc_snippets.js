const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function inspectSnippet(title, needle) {
  const idx = ebc.indexOf(needle);
  console.log(`\n========================================`);
  console.log(`SNIPPET: ${title} (needle: "${needle}")`);
  console.log(`========================================`);
  if (idx !== -1) {
    console.log(ebc.slice(idx - 50, idx + 800));
  } else {
    console.log('NOT FOUND');
  }
}

inspectSnippet('Why Book With Us', 'Why Book the Everest Base Camp Trek');
inspectSnippet('Not Satisfied With Itinerary', 'Not satisfied with this Itinerary');
inspectSnippet('What Excludes', 'What Excludes in this Everest Base Camp');
inspectSnippet('You Might Also Like', 'you-might-like-section');
