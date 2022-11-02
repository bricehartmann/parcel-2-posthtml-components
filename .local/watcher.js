const chokidar = require('chokidar');
const { closeSync, openSync, appendFileSync,statSync, truncateSync } = require('fs');

const WATCH_DIRECTORIES = ['src/layouts', 'src/components'];
const TOUCH_FILE = 'src/index.html';
const SYNC_DELAY_MS = 250;

console.log(`Watching additional directories for changes: ${WATCH_DIRECTORIES}`);

chokidar
    .watch(WATCH_DIRECTORIES, {
        persistent: true
    })
    .on('all', async (event, path) => {
        if (event === 'change') {
            const touch = path => {
                const time = new Date();
                try {
                    appendFileSync(TOUCH_FILE, "\n");
                    const stats = statSync(TOUCH_FILE);

                    if (stats.size > 1) {
                        setTimeout(() => truncateSync(TOUCH_FILE, stats.size - 1), SYNC_DELAY_MS);
                    }
                } catch (err) {
                    closeSync(openSync(path, 'w'));
                }
            };

            touch(TOUCH_FILE);
        }
    });
