const fs = require('fs');
const path = require('path');

// Read 16 days data
const daysData = JSON.parse(fs.readFileSync('scratch/competitor_16_days_complete.json', 'utf8'));

// Authentic photos mapped to 16 days
const dayPhotos = [
  { img: "annapurna-circuit-tilicho-lake-trekking-group-autumn-forest-16.jpg", alt: "Arrival in Kathmandu and tour briefing" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg", alt: "Overland drive to Jagat via Besisahar along Marsyangdi River" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-forest-trail-02.jpg", alt: "Trek from Jagat to Dharapani crossing suspension bridges" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-mountain-trail-03.jpg", alt: "Trek through pine forests from Dharapani to Chame" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-pine-forest-10.jpg", alt: "Trek from Chame to Upper Pisang beneath Annapurna peaks" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg", alt: "Panoramic trail from Upper Pisang to Manang with Annapurna range views" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-mountain-view-05.jpg", alt: "Acclimatization day hike to Gangapurna Lake in Manang" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-steep-trail-06.jpg", alt: "Trek from Manang to Tilicho Base Camp via Khangsar village" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg", alt: "High altitude ascent to turquoise Tilicho Lake at 4919m" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-high-valley-07.jpg", alt: "Descent from Siri Kharka to Yak Kharka alpine pastures" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg", alt: "Trek from Yak Kharka to Thorong Phedi staging post" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-ridge-trail-09.jpg", alt: "Crossing Thorong La Pass at 5416m and descent to Muktinath" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-rocky-valley-12.jpg", alt: "Descent from sacred Muktinath temple to wind-carved Jomsom" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-mountain-valley-13.jpg", alt: "Mountain flight from Jomsom to Pokhara lakeside" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg", alt: "Scenic flight from Pokhara to Kathmandu and celebration" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-tilicho-valley-19.jpg", alt: "Farewell and international departure from Kathmandu airport" }
];

// Clean brand names in narrative texts
daysData.forEach(d => {
  d.description_text = d.description_text
    .replace(/Nepal Intrepid Treks/gi, 'Namaste Hiking Trek')
    .replace(/Intrepid Treks/gi, 'Namaste Hiking Trek');
    
  d.description_html = d.description_html
    .replace(/Nepal Intrepid Treks/gi, 'Namaste Hiking Trek')
    .replace(/Intrepid Treks/gi, 'Namaste Hiking Trek');
});

// Load header and footer from canonical template
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const headerStart = act.indexOf('<header class="main-header">');
const headerEnd = act.indexOf('</header>') + '</header>'.length;
const headerHtml = act.slice(headerStart, headerEnd);

const footerStart = act.indexOf('<footer class="site-footer">');
const footerEnd = act.indexOf('</footer>') + '</footer>'.length;
const footerHtml = act.slice(footerStart, footerEnd);

const bottomScripts = act.slice(footerEnd).trim();

console.log('Template parts loaded successfully.');
module.exports = {
  daysData,
  dayPhotos,
  headerHtml,
  footerHtml,
  bottomScripts
};
