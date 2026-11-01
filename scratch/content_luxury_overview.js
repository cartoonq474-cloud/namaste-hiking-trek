// Module 1: Overview, Key Facts, Highlights, Stage Table, Why Book

const heroContent = {
  title: "Everest Base Camp Luxury Trek",
  lead: "Follow the Khumbu trail to Everest Base Camp and Kala Patthar with upgraded accommodation where available, coordinated trekking support and planned helicopter transfers. This 12-day draft flies to Lukla, walks to Base Camp, descends to Pheriche after Kala Patthar, and plans a helicopter return to Kathmandu.",
  duration: "12 Days",
  altitude: "5,545 m",
  grade: "Demanding High-Altitude",
  activity: "Lodge Trek & Helicopter Transfer"
};

const keyFactsTable = `
<table class="key-facts-table">
  <thead>
    <tr>
      <th>Trip Fact</th>
      <th>This Source Itinerary</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Duration</td><td>12 calendar days, Kathmandu arrival to departure</td></tr>
    <tr><td>Mountain walking/hiking days</td><td>9 scheduled days, Days 2–10; includes two acclimatization hikes</td></tr>
    <tr><td>Acclimatization</td><td>Namche on Day 4 and Dingboche on Day 7</td></tr>
    <tr><td>Main objectives</td><td>Everest Base Camp and Kala Patthar</td></tr>
    <tr><td>Base Camp</td><td>Approximately 5,364 m</td></tr>
    <tr><td>Highest viewpoint</td><td>Kala Patthar, approximately 5,545 m</td></tr>
    <tr><td>Highest overnight stop</td><td>Gorak Shep, approximately 5,164 m</td></tr>
    <tr><td>Walking approach</td><td>Lukla → Phakding → Namche → Tengboche → Dingboche → Lobuche → Gorak Shep</td></tr>
    <tr><td>Planned inbound flight</td><td>Helicopter from Kathmandu to Lukla on Day 2</td></tr>
    <tr><td>Planned return</td><td>Helicopter from Pheriche toward Kathmandu on Day 11</td></tr>
    <tr><td>Accommodation</td><td>Higher-category Kathmandu hotel and upgraded mountain lodges where available</td></tr>
    <tr><td>Difficulty</td><td>Demanding high-altitude trek; comfort upgrades do not remove the walking/altitude challenge</td></tr>
    <tr><td>Private or shared flights</td><td>Must be specified in the quotation</td></tr>
    <tr><td>Price</td><td>No fixed package price supplied; dated quotation required</td></tr>
  </tbody>
</table>
`;

const keyFactsGrid = `
<div class="key-facts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
  <div class="fact-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;">
    <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    </div>
    <div>
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
      <strong style="display: block; font-size: 1rem; color: var(--color-primary-navy);">12 Calendar Days</strong>
      <span style="font-size: 0.8rem; color: var(--color-neutral-600);">9 Mountain Walking Days</span>
    </div>
  </div>

  <div class="fact-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;">
    <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22"/></svg>
    </div>
    <div>
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
      <strong style="display: block; font-size: 1rem; color: var(--color-primary-navy);">5,545 m (18,192 ft)</strong>
      <span style="font-size: 0.8rem; color: var(--color-neutral-600);">Kala Patthar Viewpoint</span>
    </div>
  </div>

  <div class="fact-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;">
    <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5c0 5 5 13 5 13s5-8 5-13a5 5 0 0 0-5-5z"/><circle cx="12" cy="7" r="2"/></svg>
    </div>
    <div>
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-neutral-500); font-weight: 700;">Main Objective</span>
      <strong style="display: block; font-size: 1rem; color: var(--color-primary-navy);">Everest Base Camp</strong>
      <span style="font-size: 0.8rem; color: var(--color-neutral-600);">5,364 m (17,598 ft)</span>
    </div>
  </div>

  <div class="fact-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;">
    <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </div>
    <div>
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-neutral-500); font-weight: 700;">Heli Transfers</span>
      <strong style="display: block; font-size: 1rem; color: var(--color-primary-navy);">KTM-Lukla & Pheriche-KTM</strong>
      <span style="font-size: 0.8rem; color: var(--color-neutral-600);">Fly direct into Khumbu</span>
    </div>
  </div>
</div>
`;

const overviewContent = `
<div class="overview-section-body">
  <p>The Everest Base Camp Luxury Trek is designed for travelers who want to experience the legendary Everest Base Camp journey with a higher level of comfort, personalized service, and streamlined mountain logistics. The trek follows the celebrated trail through the Khumbu Valley, passing through Sherpa villages, Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorak Shep before reaching Everest Base Camp at 5,364 meters and Kala Patthar at approximately 5,545 meters.</p>
  
  <p>The experience combines the adventure of high-altitude trekking with upgraded services wherever the mountain environment allows. Premium accommodation in Kathmandu, higher-standard mountain lodges, private or small-group arrangements, professional trekking support, luggage assistance, and helicopter transportation can make the overall journey more comfortable and efficient than a conventional Everest Base Camp trek.</p>
  
  <p>Luxury, however, does not remove the physical demands of the Himalayas. The trek still involves long walking days, steep sections, changing weather, rugged terrain, and exposure to high altitude. The purpose of the luxury format is to improve the quality of accommodation, transportation, service, and recovery while preserving the authentic experience of trekking through the Everest region.</p>

  <h3 class="overview-subheading" style="color: var(--color-primary-navy); font-size: 1.4rem; margin: 32px 0 16px 0; border-left: 4px solid var(--color-copper-orange); padding-left: 12px; font-weight: 700;">What is the Everest Base Camp Luxury Trek?</h3>
  <p>The Everest Base Camp Luxury Trek is a premium trekking experience to the foot of Mount Everest with upgraded travel arrangements throughout the journey. It combines the essential route and landmarks of the classic Everest Base Camp trek with enhanced comfort and more personalized logistics.</p>
  <p>Instead of returning from Everest Base Camp by retracing the entire route on foot, a luxury itinerary can incorporate helicopter transportation for a faster and more convenient return. Accommodation can also be upgraded at locations where premium lodges are available, while private rooms, better dining facilities, hot showers, heating, and improved common areas may be available depending on the destination and lodge.</p>
  <p>The trek still includes the defining experiences that make Everest Base Camp famous: the flight into the high mountain region, the approach through the Khumbu Valley, acclimatization in Namche Bazaar and Dingboche, spectacular views of Everest and surrounding peaks, Tengboche Monastery, the Khumbu Glacier landscape, Everest Base Camp, and the panoramic Himalayan sunrise from Kala Patthar.</p>
  <p>This makes the package suitable for travelers who want the full Everest Base Camp trekking experience without choosing the most basic approach to accommodation and logistics.</p>

  <h3 class="overview-subheading" style="color: var(--color-primary-navy); font-size: 1.4rem; margin: 32px 0 16px 0; border-left: 4px solid var(--color-copper-orange); padding-left: 12px; font-weight: 700;">How does the luxury format differ from a classic EBC trek?</h3>
  <p>The principal difference is not the mountain destination. Both journeys are built around the same iconic Everest Base Camp route. The difference lies in the level of comfort, service, privacy, and transportation provided along the way.</p>
  <p>A standard Everest Base Camp trek generally uses conventional teahouse accommodation and focuses on practical trekking logistics. A luxury itinerary places additional attention on the quality of accommodation, room arrangements, dining, personal assistance, and transportation.</p>
  <p>The luxury experience can include:</p>
  <ul style="list-style-type: disc; margin-left: 24px; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 20px;">
    <li>Premium hotel accommodation in Kathmandu</li>
    <li>Better-standard mountain lodges where available</li>
    <li>Private rooms where available</li>
    <li>Attached bathrooms where available</li>
    <li>Hot showers at selected lodges</li>
    <li>Heated dining or common areas where available</li>
    <li>Better-organized meals and dining</li>
    <li>Private or small-group trekking</li>
    <li>Dedicated guide and porter support</li>
    <li>Professional luggage handling</li>
    <li>Helicopter transportation</li>
    <li>More efficient return arrangements</li>
    <li>Customized services and departure options</li>
  </ul>
  <p>The result is a trek that retains the physical and cultural character of the Everest region while providing greater comfort before, during, and after each trekking stage.</p>

  <h3 class="overview-subheading" style="color: var(--color-primary-navy); font-size: 1.4rem; margin: 32px 0 16px 0; border-left: 4px solid var(--color-copper-orange); padding-left: 12px; font-weight: 700;">What does luxury mean on the Everest trail?</h3>
  <p>Luxury in the Everest region is different from luxury in a city hotel or resort. The higher the trail climbs, the more limited the infrastructure becomes. Remote mountain settlements must operate with restricted supplies, difficult transportation, variable electricity, limited water resources, and challenging weather conditions.</p>
  <p>For that reason, luxury trekking should be understood as the highest practical standard of comfort and service available at each point of the route, rather than a promise of five-star facilities at every altitude.</p>
  <p>At lower elevations, travelers may enjoy premium lodges with more spacious rooms, private bathrooms, hot showers, heating, improved dining areas, and other upgraded facilities. As the route approaches Gorak Shep and Everest Base Camp, accommodation becomes more basic because of the extreme altitude and remote environment.</p>
  <p>A luxury trek therefore focuses on maximizing comfort wherever possible while setting realistic expectations for the high-altitude section.</p>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; margin: 20px 0;">
    <strong style="color: var(--color-primary-navy); font-size: 1.05rem; display: block; margin-bottom: 6px;">The Luxury Formula on Mount Everest:</strong>
    <span style="color: var(--color-copper-orange); font-weight: 700; font-size: 1.05rem;">Better Accommodation + Personalized Service + Efficient Logistics + Premium Transportation + Professional Trekking Support</span>
  </div>
  <p>This approach allows travelers to enjoy greater comfort without changing the character of the Everest Base Camp adventure.</p>

  <h3 class="overview-subheading" style="color: var(--color-primary-navy); font-size: 1.4rem; margin: 32px 0 16px 0; border-left: 4px solid var(--color-copper-orange); padding-left: 12px; font-weight: 700;">Is this trekking format right for you?</h3>
  <p>The luxury Everest Base Camp Trek is suited to travelers who want to trek to Everest Base Camp while placing greater importance on accommodation, service, privacy, and transportation.</p>
  <p>It is particularly appropriate for:</p>
  <ul style="list-style-type: disc; margin-left: 24px; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 20px;">
    <li>Couples seeking a private Himalayan adventure</li>
    <li>Travelers celebrating a special occasion (anniversary, honeymoon, milestone birthday)</li>
    <li>Families with appropriate fitness and altitude preparation</li>
    <li>Experienced trekkers who prefer greater comfort</li>
    <li>First-time high-altitude trekkers who want a more supported experience</li>
    <li>Private travelers who prefer personalized arrangements</li>
    <li>Small groups seeking a premium trekking experience</li>
    <li>Travelers with limited time who want helicopter-supported logistics</li>
  </ul>
  <p>The trek remains physically demanding for every traveler. The luxury format improves comfort and logistics, but it does not change the altitude, walking distance, terrain, or weather conditions encountered on the Everest Base Camp trail.</p>
  <p>For travelers who want to stand at Everest Base Camp, experience the Khumbu landscape, and reach Kala Patthar while enjoying upgraded services and more efficient transportation, the Everest Base Camp Luxury Trek provides a premium way to experience one of the world's most iconic Himalayan journeys.</p>
</div>
`;

const highlightsContent = `
<div class="highlights-container">
  <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6;">The Everest Base Camp Luxury Trek brings together the defining experiences of the Everest region with a higher level of comfort, personalized trekking support, and efficient mountain logistics. The journey is built around the classic approach to Everest Base Camp, but the experience is enhanced through premium accommodation where available, private or small-group arrangements, upgraded transportation, and carefully organized services throughout the trek. From the moment you leave Kathmandu, the itinerary combines dramatic Himalayan scenery, Sherpa culture, famous mountain settlements, Buddhist heritage, high-altitude trekking, and some of the most recognizable viewpoints in the Everest region.</p>

  <div class="highlights-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 32px;">
    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">✈</span> Planned helicopter arrival in Lukla
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Provides a private, scenic and flexible transition into the Khumbu, soaring over Kathmandu Valley and Himalayan foothills directly to 2,860m.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🏨</span> Better-standard mountain accommodation
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Prioritizes premium mountain lodges with spacious private rooms, improved bedding, attached bathrooms, and heated dining rooms wherever available.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🤝</span> Personalized trekking support
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Dedicated licensed Sherpa guide, attentive luggage coordination, flexible pacing, and seamless communication with lodge teams throughout.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🏔</span> Namche Bazaar and acclimatization
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">A full rest and exploration day in the vibrant Sherpa amphitheater at 3,440m with walks toward Everest View Hotel and panoramic vistas.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🏘</span> Sherpa villages and Himalayan culture
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Experience living heritage through Phakding, Khumjung, Pangboche and Dingboche, with stone houses, prayer wheels, and mani walls.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🛕</span> Tengboche Monastery & Buddhist heritage
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">The spiritual heart of the Khumbu at 3,860m, framed by fluttering prayer flags and jaw-dropping views of Ama Dablam and Everest.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">📐</span> Ama Dablam & changing mountain views
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">The 'Matterhorn of the Himalayas' accompanies your trail progression, joined by Nuptse, Lhotse, Thamserku, and Pumori.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🌾</span> Dingboche & the high Khumbu
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Second essential acclimatization base at 4,410m in a broad alpine valley, featuring Nangkartshang Peak viewpoint hike up to 4,700m.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🎯</span> Reach Everest Base Camp (5,364 m)
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Stand at the foot of the Khumbu Icefall, surrounded by the massive glaciers and mountain walls of the world's highest peak.</p>
    </div>

    <div class="highlight-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--color-copper-orange);">🌅</span> Kala Patthar & the Everest viewpoint (5,545 m)
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Pre-dawn climb to the highest point of the trek for the celebrated 360-degree sunrise panorama illuminating Everest, Nuptse, and Pumori.</p>
    </div>
  </div>

  <div style="background: #e6f7f0; border-left: 4px solid var(--color-copper-orange); border-radius: 0 10px 10px 0; padding: 18px 22px; margin-bottom: 28px;">
    <h4 style="color: var(--color-primary-navy); margin: 0 0 6px 0; font-size: 1.05rem; font-weight: 700;">Base Camp, Kala Patthar and Helicopter Return</h4>
    <p style="margin: 0; font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6;">Reaching Everest Base Camp is the central objective of the trek. After celebrating at Base Camp on Day 9 and ascending Kala Patthar for sunrise on Day 10, the itinerary descends to Pheriche (4,371m) for a well-deserved recovery night. On Day 11, a scenic helicopter transfer returns you directly to Kathmandu, bypassing 3–4 days of steep descent walking and offering an aerial retrospective over the entire Khumbu valley.</p>
  </div>

  <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700;">Highlights at a glance</h3>
  <table class="key-facts-table" style="margin-bottom: 32px;">
    <thead>
      <tr>
        <th>Experience</th>
        <th>Planned Day</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Kathmandu hotel arrival & luxury briefing</td><td>Day 1</td></tr>
      <tr><td>Helicopter to Lukla & Phakding walk</td><td>Day 2</td></tr>
      <tr><td>Namche Bazaar acclimatization</td><td>Day 4</td></tr>
      <tr><td>Tengboche Monastery</td><td>Day 5</td></tr>
      <tr><td>Dingboche acclimatization</td><td>Day 7</td></tr>
      <tr><td>Everest Base Camp (5,364 m)</td><td>Day 9</td></tr>
      <tr><td>Kala Patthar (5,545 m) & descent to Pheriche</td><td>Day 10</td></tr>
      <tr><td>Planned helicopter return to Kathmandu</td><td>Day 11</td></tr>
    </tbody>
  </table>
</div>
`;

const whyBookContent = `
<div class="why-book-container">
  <div class="why-book-title-wrapper">
    <h2 class="why-book-title">Why Book the Everest Base Camp Luxury Trek with Namaste Hiking Trek?</h2>
  </div>
  
  <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
    Most operators in Kathmandu can get you to base camp. The difference is in what happens around the trek — before you arrive, during the harder days, and when something doesn’t go to plan. Ranked #2 out of more than 2,900 trekking agencies in Nepal on TripAdvisor, our luxury expeditions are managed by real local experts dedicated to personal comfort, uncompromised safety, and transparent operations.
  </p>

  <div class="why-book-grid">
    <!-- Card 1 -->
    <div class="why-book-card">
      <div class="why-book-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div class="why-book-card-content">
        <div class="why-book-card-title">Guides Who've Worked the Khumbu for 6 to 7 Years With Us</div>
        <p class="why-book-card-text">Not seasonal hires — seasoned high-altitude Sherpa leaders who know which luxury lodges offer the warmest hospitality, which days Tengboche puja is open, and how to calibrate your pace. Our guides carry pulse oximeters for twice-daily biometric screenings.</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="why-book-card">
      <div class="why-book-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <div class="why-book-card-content">
        <div class="why-book-card-title">Transparent Package Inclusions & Coordinated Logistics</div>
        <p class="why-book-card-text">Every luxury reservation is backed by transparent written agreements: guaranteed airport transfers, 5-star Kathmandu hotel nights, scheduled helicopter sectors (Kathmandu-Lukla and Pheriche-Kathmandu), dedicated porter service, full-board trail meals, and all official Sagarmatha park permits.</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="why-book-card">
      <div class="why-book-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </div>
      <div class="why-book-card-content">
        <div class="why-book-card-title">Complimentary Branded Waterproof Duffle Bag</div>
        <p class="why-book-card-text">Trekkers receive an 80–100L heavy-duty waterproof duffle bag for porter transport during the briefing in Kathmandu. This keeps your sleeping bag and clothing bone dry through mountain rain, river crossings, and cold high-altitude conditions.</p>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="why-book-card">
      <div class="why-book-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      </div>
      <div class="why-book-card-content">
        <div class="why-book-card-title">24/7 Mountain Tracking & Emergency Helicopter Coordination</div>
        <p class="why-book-card-text">Your safety is our absolute priority. In the event of severe Acute Mountain Sickness (AMS) or unexpected injury, our Kathmandu headquarters coordinates immediate satellite communication and helicopter rescue dispatch directly with your insurance provider.</p>
      </div>
    </div>
  </div>
</div>
`;

module.exports = {
  heroContent,
  keyFactsTable,
  keyFactsGrid,
  overviewContent,
  highlightsContent,
  whyBookContent
};
