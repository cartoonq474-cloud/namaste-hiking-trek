const fs = require('fs');

const content = fs.readFileSync('trek/gokyo-lakes-and-cho-la-pass/index.html', 'utf8');
console.log('Total characters in gokyo-lakes-and-cho-la-pass:', content.length);
console.log('Lines:', content.split('\n').length);

const sections = [...content.matchAll(/<section[^>]*id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Sections with id:', sections);

const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, ' ');
console.log('H1:', h1);

const itineraryDays = [...content.matchAll(/class="itin-day-number">([\s\S]*?)<\/span>/g)].map(m => m[1].trim());
console.log('Itinerary days count:', itineraryDays.length);
console.log('Itinerary days sample:', itineraryDays.slice(0, 15));
