// Module 11: Section 9 - Route Map & GPS Landmark Overview
function getMapSection() {
  return `
        <!-- Section 9: Route Map -->
        <section id="section-map" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Pikey Peak Trek Map</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 24px;">
            The map below outlines the complete overland route from Kathmandu via the BP Highway to Dhap Bazaar, the circular ridge trail across Pikey Peak (4,065 m), the descent through Junbesi, and the vehicle pickup hub at Phaplu.
          </p>

          <!-- Map Graphic Container -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="position: relative; background: #f8fafc; text-align: center; padding: 20px;">
              <img src="../../images/ebc-map.png" alt="Pikey Peak Lower Everest Trekking Route Map" style="max-width: 100%; height: auto; border-radius: 8px; display: block; margin: 0 auto;">
              <span style="display: block; margin-top: 10px; font-size: 0.85rem; color: #64748b;">Topographic Trail Overview: Solukhumbu Lower Everest Circuit</span>
            </div>
          </div>

          <!-- GPS Waypoints & Key Landmarks Grid -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px;">Key Trailhead &amp; Summit Landmarks</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; font-size: 0.9rem;">
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">1. Kathmandu (1,400 m)</strong>
                <span style="color: #64748b;">Starting &amp; ending point; airport logistics</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">2. Dhap Bazaar (2,850 m)</strong>
                <span style="color: #64748b;">Overland trailhead; first mountain overnight</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">3. Jhapre (2,920 m)</strong>
                <span style="color: #64748b;">Historic Buddhist stupa, gompa &amp; apple orchards</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">4. Pikey Base Camp (3,640 m)</strong>
                <span style="color: #64748b;">Alpine yak pastures; pre-summit staging lodge</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #059669; display: block;">5. Pikey Peak Summit (4,065 m)</strong>
                <span style="color: #64748b;">360° panoramic sunrise over 6 eight-thousanders</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">6. Jasmane Bhanjyang (3,550 m)</strong>
                <span style="color: #64748b;">Scenic ridgeline descent and forested rest stop</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">7. Junbesi (2,700 m)</strong>
                <span style="color: #64748b;">Traditional Sherpa stone village &amp; Hillary school</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">8. Thupten Chholing (3,000 m)</strong>
                <span style="color: #64748b;">Sacred Nyingma monastery &amp; monastic community</span>
              </div>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block;">9. Phaplu (2,469 m)</strong>
                <span style="color: #64748b;">Valley trail exit hub; hospital &amp; road departure</span>
              </div>
            </div>
          </div>
        </section>
`;
}

module.exports = { getMapSection };

