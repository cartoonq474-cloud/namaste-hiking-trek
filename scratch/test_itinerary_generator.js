const fs = require('fs');

const rawDays = JSON.parse(fs.readFileSync('scratch/parsed_itinerary_days.json', 'utf8'));
const images = fs.readdirSync('images/treks/everest-cho-la-pass');

const formattedDays = rawDays.map((d, index) => {
  const lines = d.text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  
  // Extract metadata lines
  let distance = '';
  let walking = '';
  let accommodation = '';
  let activity = '';
  let transfer = '';
  let flight = '';
  let altitudeInfo = [];
  let descLines = [];
  
  for (let line of lines) {
    if (line.toLowerCase().startsWith('distance:')) {
      distance = line.replace(/distance:\s*/i, '');
    } else if (line.toLowerCase().startsWith('walking:')) {
      walking = line.replace(/walking:\s*/i, '');
    } else if (line.toLowerCase().startsWith('accommodation:')) {
      accommodation = line.replace(/accommodation:\s*/i, '');
    } else if (line.toLowerCase().startsWith('activity:')) {
      activity = line.replace(/activity:\s*/i, '');
    } else if (line.toLowerCase().startsWith('transfer:')) {
      transfer = line.replace(/transfer:\s*/i, '');
    } else if (line.toLowerCase().startsWith('flight:')) {
      flight = line.replace(/flight:\s*/i, '');
    } else if (line.includes('Approximately') && (line.includes(' m') || line.includes('metres')) && !line.includes('The ') && !line.includes('Kongma La is')) {
      altitudeInfo.push(line);
    } else {
      descLines.push(line);
    }
  }

  // Determine subtitle from altitudeInfo or day title
  let subtitle = altitudeInfo.join(' · ');
  if (!subtitle) {
    if (d.dayNum === 1 || d.dayNum === 2 || d.dayNum === 19 || d.dayNum === 20 || d.dayNum === 21) {
      subtitle = 'Kathmandu – 1,355 m / 4,445 ft';
    }
  }

  // Replace altitude numbers in subtitle with <span data-altitude-m="...">
  subtitle = subtitle.replace(/(\d{1,2},\d{3})\s*m/g, (match, p1) => {
    const num = parseInt(p1.replace(',', ''), 10);
    const ft = Math.round(num * 3.28084);
    return `<span data-altitude-m="${num}">${num.toLocaleString()} m / ${ft.toLocaleString()} ft</span>`;
  });

  // Standardize Title
  let displayTitle = d.title.replace(/^Day \d+:\s*/i, '');
  // Capitalize title
  displayTitle = displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1);

  // Default metrics
  if (!distance && (d.dayNum === 1 || d.dayNum === 2 || d.dayNum === 20 || d.dayNum === 21)) {
    distance = 'City Transfer / Sightseeing';
  }
  if (!walking && transfer) {
    walking = transfer;
  }
  if (!walking && (d.dayNum === 1 || d.dayNum === 21)) {
    walking = 'Airport Transfer';
  }
  if (!accommodation) {
    accommodation = d.dayNum <= 2 || d.dayNum >= 19 ? 'Hotel in Kathmandu' : 'Mountain Teahouse';
  }

  // Determine meals
  let meals = 'Breakfast (B), Lunch (L), Dinner (D)';
  if (d.dayNum === 1) meals = 'Welcome Dinner (D)';
  else if (d.dayNum === 2) meals = 'Breakfast (B)';
  else if (d.dayNum === 19) meals = 'Breakfast (B) & Farewell Dinner (D)';
  else if (d.dayNum === 20) meals = 'Breakfast (B)';
  else if (d.dayNum === 21) meals = 'Breakfast (B)';

  // Determine overnight
  let overnight = 'Kathmandu';
  if (d.dayNum === 3) overnight = 'Phakding';
  else if (d.dayNum === 4 || d.dayNum === 5) overnight = 'Namche Bazaar';
  else if (d.dayNum === 6) overnight = 'Tengboche';
  else if (d.dayNum === 7 || d.dayNum === 8) overnight = 'Dingboche';
  else if (d.dayNum === 9) overnight = 'Chhukung';
  else if (d.dayNum === 10) overnight = 'Lobuche';
  else if (d.dayNum === 11) overnight = 'Gorak Shep';
  else if (d.dayNum === 12) overnight = 'Dzongla';
  else if (d.dayNum === 13) overnight = 'Thangnak (Dragnak)';
  else if (d.dayNum === 14 || d.dayNum === 15) overnight = 'Gokyo';
  else if (d.dayNum === 16) overnight = 'Lungden';
  else if (d.dayNum === 17) overnight = 'Namche Bazaar';
  else if (d.dayNum === 18) overnight = 'Lukla';

  // Group description lines into paragraphs and bullet lists
  let descHtml = '';
  let inList = false;

  for (let i = 0; i < descLines.length; i++) {
    const l = descLines[i];
    // Check if line is a bullet or short list item following a colon
    const isListItem = l.startsWith('•') || l.startsWith('-') || 
      (l.length < 35 && !l.endsWith('.') && !l.includes('The ') && !l.includes('This ') && !l.includes('Because '));

    if (isListItem) {
      if (!inList) {
        descHtml += '<ul style="margin: 10px 0 16px 20px; line-height: 1.6; color: var(--color-neutral-700); font-size: 0.98rem;">';
        inList = true;
      }
      const itemText = l.replace(/^[•\-]\s*/, '');
      descHtml += `<li>${itemText}</li>`;
    } else {
      if (inList) {
        descHtml += '</ul>';
        inList = false;
      }
      // Replace altitude values inside paragraph text
      let pText = l.replace(/(\d{1,2},\d{3})\s*(m|metres|meters)/gi, (match, p1) => {
        const num = parseInt(p1.replace(',', ''), 10);
        return `<span data-altitude-m="${num}">${num.toLocaleString()} m</span>`;
      });
      descHtml += `<p style="margin-bottom: 12px; line-height: 1.65; color: var(--color-neutral-700); font-size: 0.98rem;">${pText}</p>`;
    }
  }
  if (inList) {
    descHtml += '</ul>';
  }

  // Pick 2-4 images for photo grid
  const imgStartIndex = (index * 2) % images.length;
  const cardImages = [
    images[imgStartIndex],
    images[(imgStartIndex + 1) % images.length],
    images[(imgStartIndex + 2) % images.length],
    images[(imgStartIndex + 3) % images.length]
  ];

  return {
    dayNum: d.dayNum,
    displayTitle,
    subtitle,
    distance,
    walking,
    accommodation,
    activity,
    meals,
    overnight,
    descHtml,
    cardImages
  };
});

console.log('Processed', formattedDays.length, 'days.');
console.log('Sample Day 10:');
console.log(JSON.stringify(formattedDays[9], null, 2));

