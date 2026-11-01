const fs = require('fs');

let orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

// The exact stray block at char 384078:
const strayBlock = `            </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </main>`;

const cleanBlock = `            </div>
        </div>
      </div>
    </section>`;

if (orig.includes(strayBlock)) {
  orig = orig.replace(strayBlock, cleanBlock);
  console.log('Replaced stray block successfully!');
  fs.writeFileSync('scratch/original_git_everest_view_cleaned.html', orig, 'utf8');
} else {
  console.log('strayBlock not matched exactly!');
}
