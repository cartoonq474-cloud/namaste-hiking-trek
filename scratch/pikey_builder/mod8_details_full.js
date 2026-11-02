// Module 8 Full: Section 6 - Essential Trip Logistics & Comprehensive Fitness / Difficulty Guide
const { getLineRange, linesToHtml } = require('./content_parser.js');
const { getDetailsSection: getBaseDetails } = require('./mod8_details.js');

function getDetailsSection() {
  // Get base 21 logistical accordions
  const baseHtml = getBaseDetails();

  // Parse user content on Difficulty, Fitness and Preparation (lines 783 to 1074)
  const diffHtml = linesToHtml(getLineRange(783, 1074));

  // Insert the detailed fitness & difficulty section right inside section-details
  const insertMarker = '</section>';
  const replacement = `
            <!-- Comprehensive Difficulty, Fitness & Preparation Guide -->
            <div style="margin-top: 40px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 20px;">
                <span class="pill pill-copper" style="margin-bottom: 8px;">Physical Readiness</span>
                <h3 style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin: 4px 0 0 0;">Difficulty, Fitness and Preparation Guide</h3>
              </div>
              <div class="user-content-block" style="font-size: 0.98rem; line-height: 1.7; color: #334155;">
                ${diffHtml}
              </div>
            </div>
          </div>
        </section>
`;

  return baseHtml.replace(insertMarker, replacement);
}

module.exports = { getDetailsSection };
