const fs = require('fs');

let html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('Original length:', html.length);

// 1. Update Title and Meta tags in <head>
html = html.replace(
  '<title>Annapurna Circuit Trek (14 Days) — Namaste Hiking Trek</title>',
  '<title>Annapurna Circuit Trek (16 Days) — Namaste Hiking Trek</title>'
);

html = html.replace(
  '<meta name="description" content="Embark on the classic 14-day Annapurna Circuit Trek across Thorong La Pass (5,416m). Linking Marsyangdi and Kali Gandaki valleys, Manang, Muktinath, Tatopani hot springs & Poon Hill. $1,199.">',
  '<meta name="description" content="Embark on the classic 16-day Annapurna Circuit Trek across Thorong La Pass (5,416m). Features Kathmandu UNESCO sightseeing, Jagat, Manang, Muktinath, Jomsom flight, Pokhara & buffer day. $1,199.">'
);

// 2. Update JSON-LD Schema
const oldLdRegex = /<script type="application\/ld\+json">[\s\S]*?<\/script>/;
const newJsonLd = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/annapurna-circuit-trek/#trip",
        "name": "Annapurna Circuit Trek (16 Days)",
        "description": "Embark on a classic 16-day trek looping around the massive Annapurna massif, crossing Thorong La Pass (5,416m), exploring Kathmandu UNESCO sites, Jagat, Manang, Muktinath, Jomsom mountain flight, and Pokhara.",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Adventure Travelers"],
        "duration": "P16D",
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Welcome to Kathmandu & Trek Preparation (1,300m)" },
          { "@type": "TouristTrip", "name": "Day 2: Cultural Sightseeing in Kathmandu Valley & Final Trek Preparation (1,300m)" },
          { "@type": "TouristTrip", "name": "Day 3: Scenic Overland Drive from Kathmandu to Jagat via Besisahar (1,300m)" },
          { "@type": "TouristTrip", "name": "Day 4: Trek from Jagat to Dharapani via Tal (1,860m)" },
          { "@type": "TouristTrip", "name": "Day 5: Trek from Dharapani to Chame (2,670m)" },
          { "@type": "TouristTrip", "name": "Day 6: Trek from Chame to Upper Pisang (3,300m)" },
          { "@type": "TouristTrip", "name": "Day 7: Trek from Upper Pisang to Manang via High Route (3,540m)" },
          { "@type": "TouristTrip", "name": "Day 8: Vital Acclimatization & Exploration Day in Manang (3,540m)" },
          { "@type": "TouristTrip", "name": "Day 9: Trek from Manang to Yak Kharka (4,050m)" },
          { "@type": "TouristTrip", "name": "Day 10: Trek from Yak Kharka to Thorong Phedi or High Camp (4,450m)" },
          { "@type": "TouristTrip", "name": "Day 11: Cross Thorong La Pass (5,416m) & Descend to Sacred Muktinath (3,800m)" },
          { "@type": "TouristTrip", "name": "Day 12: Explore Muktinath Temple & Trek to Jomsom via Kagbeni (2,720m)" },
          { "@type": "TouristTrip", "name": "Day 13: Scenic Mountain Flight from Jomsom to Pokhara & Lakeside Relaxation (820m)" },
          { "@type": "TouristTrip", "name": "Day 14: Scenic Overland Drive from Pokhara back to Kathmandu (1,300m)" },
          { "@type": "TouristTrip", "name": "Day 15: Leisure & Buffer Contingency Day in Kathmandu (1,300m)" },
          { "@type": "TouristTrip", "name": "Day 16: Final Departure from Kathmandu (Farewell, Nepal!)" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "1199",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/annapurna-circuit-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/annapurna-circuit-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
          { "@type": "ListItem", "position": 3, "name": "Annapurna Circuit Trek (16 Days)", "item": "https://namastehikingtrek.com/trek/annapurna-circuit-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/annapurna-circuit-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How difficult is the 16-Day Annapurna Circuit Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Annapurna Circuit Trek is rated challenging due to high altitude (crossing Thorong La Pass at 5,416m / 17,769ft) and 5 to 7 hours of daily hiking. Technical mountaineering skills are not required, but good cardiovascular stamina, endurance, and proper acclimatization are essential."
            }
          },
          {
            "@type": "Question",
            "name": "What permits are required for the Annapurna Circuit Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two official permits are mandatory: the Annapurna Conservation Area Project (ACAP) Entry Permit and the Trekkers' Information Management System (TIMS) Card. Both permits are completely arranged and included in our package."
            }
          },
          {
            "@type": "Question",
            "name": "Why is the 16-day itinerary recommended over shorter options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 16-day itinerary includes dedicated cultural sightseeing in Kathmandu, gradual pedestrian acclimatization walking from Jagat through Tal and Dharapani (avoiding an exhausting 11-hour rough road drive directly to Chame), a scenic mountain flight from Jomsom to Pokhara, and a crucial buffer day in Kathmandu to safeguard against mountain flight delays."
            }
          }
        ]
      }
    ]
  }
  </script>`;

html = html.replace(oldLdRegex, newJsonLd);

// 3. Update Hero Section & Trip Facts
html = html.replace(
  'Our 14-day itinerary combines progressive acclimatization, authentic Tibetan-Buddhist and Thakali cultural immersion, scenic road-supported staging to Chame, and complete safety monitoring with certified guides.',
  'Our 16-day itinerary combines progressive acclimatization walking from Jagat, dedicated Kathmandu UNESCO cultural sightseeing, authentic Tibetan-Buddhist and Thakali cultural immersion, the Thorong La crossing (5,416m), a scenic mountain flight from Jomsom to Pokhara, and a built-in Kathmandu contingency buffer day.'
);

html = html.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">14 days</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">16 days</span>'
);

html = html.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD & Coach / Flight</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD, Coach & Flight</span>'
);

// 4. Replace Entire Section 2: Itinerary
const itinStartMarker = '<!-- Section 2: Itinerary -->';
const itinEndMarker = '<!-- Section 3: Includes & Excludes -->';
const startIdx = html.indexOf(itinStartMarker);
const endIdx = html.indexOf(itinEndMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newItin = fs.readFileSync('scratch/generated_16_day_itin.html', 'utf8') + '\n\n          ';
  html = html.slice(0, startIdx) + newItin + html.slice(endIdx);
  console.log('Successfully replaced Section 2 with 16-day itinerary!');
} else {
  console.error('Could not find itinerary section boundaries!');
  process.exit(1);
}

// 5. Update Section 3: Includes & Excludes
html = html.replace(
  'Transparency is our core principle. Here is the comprehensive breakdown of everything included in our 14-day Annapurna Circuit package and what personal expenses you should plan for.',
  'Transparency is our core principle. Here is the comprehensive breakdown of everything included in our 16-day Annapurna Circuit package and what personal expenses you should plan for.'
);

html = html.replace(
  '<span><strong>City Hotels:</strong> 2 nights 3-star hotel in Kathmandu (Thamel) and 1 night hotel in Pokhara (Lakeside) with breakfast.</span>',
  '<span><strong>City Hotels:</strong> 4 nights 3-star hotel in Kathmandu (Thamel) and 1 night 3-star hotel in Pokhara (Lakeside) on twin-sharing basis with breakfast.</span>'
);

// Add flight and tour to inclusions if not present
if (!html.includes('Domestic Scheduled Flight:')) {
  html = html.replace(
    '<span><strong>All Ground Transportation:</strong> Private overland 4WD vehicle Kathmandu to Chame, Nayapul to Pokhara, and return transfer to Kathmandu.</span>',
    `<span><strong>Domestic Scheduled Flight:</strong> Scenic mountain flight ticket from Jomsom to Pokhara with airport departure taxes and transfers.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Kathmandu UNESCO Heritage Tour:</strong> Guided cultural sightseeing of Swayambhunath (Monkey Temple), Pashupatinath, and Durbar Square by private vehicle with a licensed cultural guide.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>All Ground Transportation:</strong> Private overland 4WD vehicle Kathmandu to Jagat (via Besisahar), Pokhara hotel transfers, and scenic overland drive from Pokhara back to Kathmandu.</span>`
  );
}

// 6. Update Sticky Sidebar Pricing Widget
html = html.replace(
  '<a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">14 days trip</a>',
  '<a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">16 days trip</a>'
);

html = html.replace(
  /data-trek-title="Annapurna Circuit Trek \(14 Days\)"/g,
  'data-trek-title="Annapurna Circuit Trek (16 Days)"'
);

// 7. Update other text occurrences
html = html.replace(
  'The Annapurna Circuit traverses four distinct ethno-cultural zones within 14 days.',
  'The Annapurna Circuit traverses four distinct ethno-cultural zones within 16 days.'
);

html = html.replace(
  'planning%20the%2014-Day%20Annapurna%20Circuit%20Trek',
  'planning%20the%2016-Day%20Annapurna%20Circuit%20Trek'
);

html = html.replace(
  'interested%20in%20the%2014-Day%20Annapurna%20Circuit%20Trek',
  'interested%20in%20the%2016-Day%20Annapurna%20Circuit%20Trek'
);

html = html.replace(
  'private%2014-Day%20Annapurna%20Circuit%20departure',
  'private%2016-Day%20Annapurna%20Circuit%20departure'
);

// 8. Validate HTML structure & Div count
const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log('Resulting Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

if (openDivs !== closeDivs) {
  console.error('ERROR: Div mismatch! Will not overwrite file until resolved.');
  process.exit(1);
}

// Write the upgraded HTML back to trek/annapurna-circuit-trek/index.html
fs.writeFileSync('trek/annapurna-circuit-trek/index.html', html, 'utf8');
console.log('SUCCESS! Updated trek/annapurna-circuit-trek/index.html with the 16-day itinerary!');
