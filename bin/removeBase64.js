const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const cachePath = path.resolve(__dirname, '../font-preload-cache.json');

const cache = JSON.parse(readFileSync(cachePath));

for (const fontMap of Object.values(cache.assets)) {
  Object.keys(fontMap)
    .filter((font) => font.startsWith('data:'))
    .forEach((font) => {
      delete fontMap[font];
    });
}

writeFileSync(cachePath, JSON.stringify(cache));
