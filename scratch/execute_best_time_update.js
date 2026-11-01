const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const origHtml = fs.readFileSync(filePath, 'utf8');

const item3HeaderIdx = origHtml.indexOf('<!-- Item 3: Best Time -->');
const item3ContentInnerStart = origHtml.indexOf('<div class="detail-accordion-content-inner">', item3HeaderIdx) + '<div class="detail-accordion-content-inner">'.length;
const item3ContentInnerEnd = origHtml.indexOf('</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Item 4:', item3ContentInnerStart);

if (item3HeaderIdx === -1 || item3ContentInnerStart === -1 || item3ContentInnerEnd === -1) {
  console.error('ERROR: Markers not found!');
  process.exit(1);
}

const newInnerContent = `\r\n` +
`                      <p>Spring and autumn are the main planning choices for the classic itinerary. Choose your dates around the experience you want, while allowing for conditions that vary by year and elevation.</p>\r\n` +
`\r\n` +
`                      <div class="guide-data-table-wrap" style="margin: 16px 0 24px 0;">\r\n` +
`                        <table class="guide-data-table">\r\n` +
`                          <thead>\r\n` +
`                            <tr>\r\n` +
`                              <th style="min-width: 140px;">Period</th>\r\n` +
`                              <th>Main appeal</th>\r\n` +
`                              <th>Main trade-off</th>\r\n` +
`                            </tr>\r\n` +
`                          </thead>\r\n` +
`                          <tbody>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>March–May</strong></td>\r\n` +
`                              <td>Spring landscapes, mountain views and expedition activity</td>\r\n` +
`                              <td>Cold upper elevations; busier spring departures; increasing cloud toward late May</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>June–August</strong></td>\r\n` +
`                              <td>Quieter trail and green lower valleys</td>\r\n` +
`                              <td>Monsoon cloud, rain and greater transport uncertainty</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>September–November</strong></td>\r\n` +
`                              <td>Autumn scenery and popular trekking conditions</td>\r\n` +
`                              <td>September can retain monsoon conditions; nights become colder toward November</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>December–February</strong></td>\r\n` +
`                              <td>Solitude and potential clear views</td>\r\n` +
`                              <td>Severe cold, snow or ice and reduced lodge/service choices</td>\r\n` +
`                            </tr>\r\n` +
`                          </tbody>\r\n` +
`                        </table>\r\n` +
`                      </div>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in March</h5>\r\n` +
`                      <p>March sits at the transition between winter and spring. Early March can still feel distinctly wintry in the upper Khumbu. You may encounter:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Cold mornings</li>\r\n` +
`                        <li>Snow on higher sections</li>\r\n` +
`                        <li>Frozen water</li>\r\n` +
`                        <li>Cold nights</li>\r\n` +
`                        <li>Fewer trekkers than later in spring</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>As the month progresses, conditions generally become more spring-like. The advantage is that the route can feel quieter than during the busiest part of April. The disadvantage is that you are accepting more cold and greater uncertainty about snow conditions.</p>\r\n` +
`                      <p>For experienced trekkers who do not mind cold mornings, March can be rewarding. For a first-time trekker who wants the most predictable spring conditions, later March or April is generally easier.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in April</h5>\r\n` +
`                      <p>April is one of the most popular periods for the trek. The higher mountain landscape is still very much winter-like, but the lower and middle sections of the route are entering a more comfortable spring period. You can expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Increasingly stable weather</li>\r\n` +
`                        <li>Longer daylight</li>\r\n` +
`                        <li>Good mountain visibility on many mornings</li>\r\n` +
`                        <li>Rhododendron flowering at lower elevations</li>\r\n` +
`                        <li>Busy trails</li>\r\n` +
`                        <li>Busy teahouses</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>April also overlaps with the main Everest climbing season, so you may encounter expedition activity in the upper Khumbu. That adds a unique dimension to the trip. You may see climbing teams preparing for their Everest summit attempts, particularly around Base Camp during the spring expedition period.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in May</h5>\r\n` +
`                      <p>May is often a very interesting month because you get a mixture of excellent conditions and increasing pre-monsoon weather. Early May can be particularly attractive. By late May, clouds can become more noticeable and weather becomes less predictable as the monsoon approaches.</p>\r\n` +
`                      <p>That does not mean May is a poor trekking month. It simply means: Early May is generally more predictable than late May. For photography, that distinction can matter. A clear morning followed by afternoon cloud is very different from an entire day of poor visibility.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in September</h5>\r\n` +
`                      <p>September is a transition month. Early September can still carry some residual monsoon influence. Late September can be much more attractive.</p>\r\n` +
`                      <p>This is why experienced trekkers often distinguish between: Early September and Late September rather than simply calling the entire month “autumn.” Late September can provide a very nice balance:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Green lower valleys</li>\r\n` +
`                        <li>Improving skies</li>\r\n` +
`                        <li>Increasingly stable weather</li>\r\n` +
`                        <li>Fewer people than October</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>But weather remains variable.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in October</h5>\r\n` +
`                      <p>October is arguably the classic month for the EBC trek. The monsoon has generally cleared. The air becomes clearer. The views can be exceptional. The temperatures are comfortable enough for daytime trekking in most sections, although high-altitude mornings and nights remain cold.</p>\r\n` +
`                      <p>This is the month many first-time trekkers imagine when they picture an Everest Base Camp journey. There is a downside: Everybody else knows it too. October is busy.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Makes October So Good?</h5>\r\n` +
`                      <p>The combination is difficult to beat:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Clearer skies</li>\r\n` +
`                        <li>Good mountain visibility</li>\r\n` +
`                        <li>Relatively stable weather</li>\r\n` +
`                        <li>Comfortable walking conditions</li>\r\n` +
`                        <li>Fully operational trekking infrastructure</li>\r\n` +
`                        <li>Long-established trekking season</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The trail is alive. Teahouses are active. Guides and porters are everywhere. The mountains are busy, but there is energy in that.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in November</h5>\r\n` +
`                      <p>November is another excellent month. The air can become even crisper as winter approaches, particularly later in the month. The trail often becomes somewhat quieter after the October rush. You can expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Clear mountain views</li>\r\n` +
`                        <li>Dry conditions</li>\r\n` +
`                        <li>Cold mornings</li>\r\n` +
`                        <li>Increasingly cold nights</li>\r\n` +
`                        <li>Fewer trekkers later in the month</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For trekkers who want a classic autumn experience but would rather avoid the busiest period, early to mid-November can be particularly attractive.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in December</h5>\r\n` +
`                      <p>December can provide exceptionally clear mountain views. The downside is temperature. You should expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Very cold mornings</li>\r\n` +
`                        <li>Cold evenings</li>\r\n` +
`                        <li>Freezing nights at high elevations</li>\r\n` +
`                        <li>Possible snow</li>\r\n` +
`                        <li>Fewer trekkers</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The reward is a much quieter trail. A clear winter morning at Kala Patthar can be extraordinary. But you must be comfortable with the cold.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in January</h5>\r\n` +
`                      <p>January is one of the coldest periods for the trek. The upper Khumbu becomes considerably more demanding. You may encounter:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Freezing temperatures</li>\r\n` +
`                        <li>Snow</li>\r\n` +
`                        <li>Icy trail sections</li>\r\n` +
`                        <li>Very cold teahouse rooms</li>\r\n` +
`                        <li>Shorter daylight</li>\r\n` +
`                        <li>Limited lodge availability in some areas</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The advantage is obvious if you dislike crowds: Very few trekkers compared with October.</p>\r\n` +
`                      <p>For an experienced cold-weather trekker properly equipped for winter, January can produce remarkable solitude. For a first-time trekker who dislikes freezing conditions, it is probably not the best introduction to Everest.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest Base Camp in February</h5>\r\n` +
`                      <p>February begins the transition toward spring. The upper Khumbu can still be very cold, but daylight starts becoming more favorable and conditions gradually shift. Late February can sometimes be an excellent compromise for trekkers who want:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Fewer people</li>\r\n` +
`                        <li>Cold but manageable conditions</li>\r\n` +
`                        <li>Good mountain visibility</li>\r\n` +
`                        <li>The beginning of spring's transition</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Again, weather changes from year to year. Do not use a historical temperature table as a guarantee for your exact departure.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for Fewer Crowds</h5>\r\n` +
`                      <p>If you dislike busy trails, avoid the core autumn and spring peak periods. Winter generally provides the greatest solitude, although cold and snow become much more significant. Monsoon can also be quiet, but the trade-off is wet-weather logistics and less reliable mountain visibility.</p>\r\n` +
`                      <p>For travelers looking for a middle ground, late September, late November or early December can sometimes provide a quieter experience than the busiest weeks while retaining relatively favorable conditions—but mountain weather varies from year to year.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for Photography</h5>\r\n` +
`                      <p>Photographers usually want three things:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Clear visibility</li>\r\n` +
`                        <li>Interesting light</li>\r\n` +
`                        <li>Changing landscapes</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Autumn is excellent for long-range mountain visibility, while spring adds flowering vegetation and the atmosphere of the Everest climbing season. The lower Khumbu is particularly interesting in spring because rhododendron forests add color around the trail toward Tengboche.</p>\r\n` +
`                      <p>For mountain photography, we recommend keeping your camera ready during the early morning. Ama Dablam, Everest, Lhotse and Nuptse can look completely different under changing light, and the quality of the scene is often as important as the month you choose.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for Sunrise at Kala Patthar</h5>\r\n` +
`                      <p>Kala Patthar is one of the key reasons trekkers choose the classic EBC itinerary. The summit provides the most recognizable direct view toward Everest from the trekking route. A sunrise ascent can be spectacular, but it also means starting very early in extremely cold and high-altitude conditions.</p>\r\n` +
`                      <p>A later climb can sometimes be more comfortable and may offer better conditions depending on the day's cloud pattern. There is no universal rule that says “sunrise is always best.”</p>\r\n` +
`                      <p>From a guiding perspective, the better approach is to evaluate weather, visibility, wind, temperature and group condition before deciding the timing. The mountain gets the final vote.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for the Everest Expedition Atmosphere</h5>\r\n` +
`                      <p>If seeing Everest Base Camp during the climbing season is important to you, spring is the obvious choice. The main Everest expedition season takes place in spring, and the Base Camp environment can therefore look dramatically different from an off-season visit. You may see expedition camps and support activity associated with attempts on Everest.</p>\r\n` +
`                      <p>This does not mean trekkers have access to climbing areas or may enter expedition camps freely. Base Camp is an active expedition environment during the season and should be treated accordingly. Nepal Tourism Board identifies spring and autumn as major mountaineering seasons in Nepal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for Rhododendron Flowers</h5>\r\n` +
`                      <p>March through May is the season to consider if you want to see the lower and middle elevations of the Everest trail with spring vegetation. Rhododendron is Nepal's national flower and can add significant color to the forests around the lower Khumbu and Tengboche region.</p>\r\n` +
`                      <p>The effect changes with altitude. Do not expect flowering landscapes near Everest Base Camp itself. By the time you reach Lobuche and Gorak Shep, you are in a completely different high-altitude environment dominated by rock, moraine and snow. The beauty of spring is therefore the transition from flowering lower forests to the high Himalayan landscape.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">When Should You Avoid the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>There is no month that automatically makes the Everest Base Camp Trek impossible. However, you should think carefully about your priorities before choosing:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Peak monsoon: if you have a fixed schedule and cannot tolerate transportation or weather disruptions.</li>\r\n` +
`                        <li>Deep winter: if you are not prepared for severe cold and potentially snowy conditions.</li>\r\n` +
`                        <li>Peak autumn: if crowded trails and busy teahouses would significantly reduce your enjoyment.</li>\r\n` +
`                        <li>Peak spring: if you want complete solitude rather than the active atmosphere of the Everest climbing season.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The right question is not:<br>\r\n` +
`                      “Which season is perfect?”<br>\r\n` +
`                      It is:<br>\r\n` +
`                      “Which combination of weather, crowds, temperature, scenery and logistics best matches the experience I want?”</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Best Time for Gokyo and Three Passes</h5>\r\n` +
`                      <p>For routes involving Cho La, Renjo La or Kongma La, weather matters even more. High-pass routes require more attention to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Snow</li>\r\n` +
`                        <li>Ice</li>\r\n` +
`                        <li>Visibility</li>\r\n` +
`                        <li>Wind</li>\r\n` +
`                        <li>Trail condition</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This is another reason the main trekking seasons are generally preferred for more technical high-altitude trekking routes.</p>\r\n` +
`                      <p>Nepal Tourism Board's Everest-region guidance specifically identifies winter as extreme at higher elevations and notes the importance of seasonal conditions in the region.</p>\r\n` +
`                      <p>Book earlier if you need particular lodges, a private guide or a busy departure date. Quiet periods can also mean fewer operating services. See the separate Weather section for the conditions you need to prepare for, and the Lukla section for flight uncertainty.</p>\r\n                    `;

const updatedHtml = origHtml.substring(0, item3ContentInnerStart) + newInnerContent + origHtml.substring(item3ContentInnerEnd);

fs.writeFileSync(filePath, updatedHtml, 'utf8');
console.log('Successfully updated Best Time accordion in', filePath);
