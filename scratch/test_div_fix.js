const fs = require('fs');
let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const target = `            </div>
            </div>

          </div>
        </div>

      </div>
    </section>`;

console.log('Target found:', html.includes(target));

const replacement = `            </div>

          </div>
        </div>
    </section>`;

const testHtml = html.replace(target, replacement);

const openDivs = (testHtml.match(/<div(\s+[^>]*)?>/gi) || []).length;
const closeDivs = (testHtml.match(/<\/div>/gi) || []).length;

console.log('With replacement: open divs =', openDivs, 'close divs =', closeDivs, 'diff =', openDivs - closeDivs);

