const fs = require('fs');

let sidebar = fs.readFileSync('scratch/orig_sidebar_and_bottom.html', 'utf8');

// Replace the closing block
const badBlock = `            </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </main>`;

const fixedBlock = `            </div>
        </div>
      </div>
    </section>
  </article>
  </main>`;

if (sidebar.includes(badBlock)) {
  sidebar = sidebar.replace(badBlock, fixedBlock);
  console.log('Fixed bad closing block in sidebar!');
  fs.writeFileSync('scratch/orig_sidebar_and_bottom.html', sidebar, 'utf8');
} else {
  console.log('Bad block not matched exactly, inspecting lines around </main>');
  const mainIndex = sidebar.indexOf('</main>');
  console.log(sidebar.slice(mainIndex - 150, mainIndex + 20));
}
