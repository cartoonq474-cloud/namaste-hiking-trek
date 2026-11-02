// Module 4 Full: Section 2 - 9-Day Itinerary with All User Content
const { getLineRange, linesToHtml } = require('./content_parser.js');

function getItinerarySection() {
  const introHtml = linesToHtml(getLineRange(352, 443));

  // Extract individual days
  const day1Html = linesToHtml(getLineRange(443, 455));
  const day2Html = linesToHtml(getLineRange(455, 466));
  const day3Html = linesToHtml(getLineRange(466, 480));
  const day4Html = linesToHtml(getLineRange(480, 494));
  const day5Html = linesToHtml(getLineRange(494, 508));
  const day6Html = linesToHtml(getLineRange(508, 521));
  const day7Html = linesToHtml(getLineRange(521, 534));
  const day8Html = linesToHtml(getLineRange(534, 546));
  const day9Html = linesToHtml(getLineRange(546, 598));

  return `
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" class="trek-detail-section">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 24px; gap: 12px;">
            <h2 class="trek-section-title" style="margin-bottom: 0;">Pikey Peak Trek Itinerary: Day by Day Details</h2>
            <button id="toggle-all-itinerary" class="btn btn-sm btn-outline" style="border: 1px solid #cbd5e1; background: #ffffff; color: #475569; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 600;">Expand All Days</button>
          </div>

          <!-- Itinerary Introduction & User Summary -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 25px; font-size: 0.95rem; color: #475569; line-height: 1.7;">
            ${introHtml}
          </div>

          <!-- Day-by-Day Accordion Cards with Full User Content -->
          <div class="itinerary-accordion-group" style="display: flex; flex-direction: column; gap: 16px;">

            <!-- Day 1 -->
            <div class="itinerary-day-card active" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 1</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 1: Arrival in Kathmandu and trek preparation</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day1Html}
              </div>
            </div>

            <!-- Day 2 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 2</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 2: Scenic drive from Kathmandu to Dhap Bazaar</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day2Html}
              </div>
            </div>

            <!-- Day 3 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 3</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 3: Trek from Dhap Bazaar to Jhapre</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day3Html}
              </div>
            </div>

            <!-- Day 4 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 4</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 4: Trek from Jhapre to Pikey Peak Base Camp</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day4Html}
              </div>
            </div>

            <!-- Day 5 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #059669; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 5 &bull; SUMMIT</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 5: Sunrise ascent of Pikey Peak and trek to Jasmane Bhanjyang</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day5Html}
              </div>
            </div>

            <!-- Day 6 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 6</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 6: Trek from Jasmane Bhanjyang to Junbesi</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day6Html}
              </div>
            </div>

            <!-- Day 7 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 7</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 7: Trek from Junbesi to Phaplu</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day7Html}
              </div>
            </div>

            <!-- Day 8 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 8</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 8: Drive from Phaplu to Kathmandu</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day8Html}
              </div>
            </div>

            <!-- Day 9 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 9</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Day 9: Final departure from Kathmandu</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 18px 24px; border-top: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                ${day9Html}
              </div>
            </div>

          </div>
        </section>
`;
}

module.exports = { getItinerarySection };

