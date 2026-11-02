// Module 11: Section 9 - Route Map & GPS Landmark Overview for Dhaulagiri Circuit Trek
function getMapSection() {
  return `
        <!-- Section 9: Route Map -->
        <section id="section-map" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Dhaulagiri Circuit Trek Map</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
          </div>

          <p style="font-size: 1.02rem; color: #475569; line-height: 1.65; margin-bottom: 24px;">
            The topographic route map below outlines the complete 20-day high-altitude circuit around Mount Dhaulagiri (8,167 m), beginning in the lower Myagdi Valley at Beni/Babiyachaur, ascending through Italian Base Camp and Glacier Camp to Dhaulagiri Base Camp (4,750 m), crossing French Pass (5,360 m) into Hidden Valley (5,200 m), and crossing Dhampus Pass (5,250 m) to exit at Jomsom.
          </p>

          <!-- Map Graphic Container -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="position: relative; background: #f8fafc; text-align: center; padding: 20px;">
              <img src="../../images/annapurna-circuit-trek-map.jpg" alt="Dhaulagiri Circuit Expedition Topographic Trail Map" style="max-width: 100%; height: auto; border-radius: 8px; display: block; margin: 0 auto;">
              <span style="display: block; margin-top: 10px; font-size: 0.85rem; color: #64748b;">Topographic Circuit Overview: Myagdi Valley, Dhaulagiri Massif, French Pass &amp; Kali Gandaki Corridor</span>
            </div>
          </div>

          <!-- GPS Waypoints & Key Landmarks Grid -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px;">Key Expedition Trailhead &amp; Summit Landmarks</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; font-size: 0.9rem;">
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">1. Beni &amp; Babiyachaur (836–970 m)</strong>
                <span style="color: #64748b;">Overland road gateway &amp; Myagdi foot trailhead</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">2. Dharapani &amp; Muri (1,560–1,850 m)</strong>
                <span style="color: #64748b;">Terraced Magar settlements; first views of Dhaulagiri</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">3. Boghara &amp; Dobang (2,080–2,520 m)</strong>
                <span style="color: #64748b;">Dense bamboo gorge; final village teahouse lodges</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">4. Choriban Khola (3,110 m)</strong>
                <span style="color: #64748b;">First supported tented campsite in upper canyon</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">5. Italian Base Camp (3,660 m)</strong>
                <span style="color: #64748b;">Amphitheater beneath Dhaulagiri West Face; rest day</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">6. Glacier Camp (4,200 m)</strong>
                <span style="color: #64748b;">Chhonbardan Glacier lateral moraine camp</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #059669; display: block;">7. Dhaulagiri Base Camp (4,750 m)</strong>
                <span style="color: #64748b;">Glacial basin beneath Dhaulagiri I; French Pass staging</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #dc2626; display: block;">8. French Pass Summit (5,360 m)</strong>
                <span style="color: #64748b;">Highest point of circuit; 360° Himalayan panorama</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">9. Hidden Valley Basin (5,200 m)</strong>
                <span style="color: #64748b;">Isolated high-altitude uninhabited desert camp</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #dc2626; display: block;">10. Dhampus Pass Summit (5,250 m)</strong>
                <span style="color: #64748b;">Second high pass; 1,570 m descent toward Yak Kharka</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">11. Jomsom (2,720 m)</strong>
                <span style="color: #64748b;">Kali Gandaki trail finish, airport &amp; celebratory feast</span>
              </div>
            </div>
          </div>
        </section>
`;
}

module.exports = { getMapSection };

