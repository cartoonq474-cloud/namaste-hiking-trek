const fs = require('fs');

const data = require('./manaslu_data.js');
let html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const subTripArray = data.itinerary.map(d => ({
  "@type": "TouristTrip",
  "name": `Day ${d.day}: ${d.title}`
}));

const faqEntities = [
  {
    "@type": "Question",
    "name": "How difficult is the Manaslu Circuit Trek?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Manaslu Circuit Trek is rated as a challenging high-altitude trek due to sustained walking (5–8 hours daily), high elevation reaching 5,106 m (16,752 ft) at Larkya La Pass, and remote Himalayan terrain. Technical climbing skills are not required, but good cardiovascular endurance and leg conditioning are essential."
    }
  },
  {
    "@type": "Question",
    "name": "What permits are required for the Manaslu Circuit Trek?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Four official permits are required: the Manaslu Restricted Area Permit (RAP), the Manaslu Conservation Area Permit (MCAP), the Annapurna Conservation Area Permit (ACAP), and an agency-issued TIMS Card. A government-licensed trekking guide is mandatory under Nepal Tourism Board and immigration regulations."
    }
  },
  {
    "@type": "Question",
    "name": "Can I trek the Manaslu Circuit without a guide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Under current Nepal Tourism Board and Department of Immigration regulations, solo or independent trekking without a licensed guide is strictly prohibited in the Manaslu restricted area. Trekkers must travel with a registered Nepalese agency and a licensed guide."
    }
  },
  {
    "@type": "Question",
    "name": "How is acclimatization managed on this 14-day trek?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our 14-day itinerary includes two dedicated acclimatization stays: Samagaon at 3,530 m and Samdo at 3,860 m, both featuring active day hikes to higher elevation before crossing the 5,106 m Larkya La Pass."
    }
  }
];

const newSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/manaslu-circuit-trek/#trip",
      "name": "Manaslu Circuit Trek (14 Days)",
      "description": "Complete 14-day Manaslu Circuit Trek: circumnavigate Mount Manaslu (8,163m), cross Larkya La Pass (5,106m), explore remote Nubri monasteries, and trek Budhi Gandaki Valley.",
      "touristType": ["Hikers", "Trekking Enthusiasts"],
      "subTrip": subTripArray,
      "offers": {
        "@type": "Offer",
        "price": "1299",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/manaslu-circuit-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/manaslu-circuit-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Manaslu Circuit Trek", "item": "https://namastehikingtrek.com/trek/manaslu-circuit-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/manaslu-circuit-trek/#faq",
      "mainEntity": faqEntities
    }
  ]
};

const schemaTagOpen = '<script type="application/ld+json">';
const schemaTagClose = '</script>';
const startIdx = html.indexOf(schemaTagOpen);
const endIdx = html.indexOf(schemaTagClose, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `${schemaTagOpen}\n${JSON.stringify(newSchema, null, 2)}\n  `;
  html = html.substring(0, startIdx) + replacement + html.substring(endIdx);
  fs.writeFileSync('trek/manaslu-circuit-trek/index.html', html, 'utf8');
  console.log('Successfully updated JSON-LD schema in trek/manaslu-circuit-trek/index.html!');
} else {
  console.error('Failed to locate schema block!');
}
