'use strict';

const fs = require('fs');

fs.writeFileSync('/tmp/mergedMap.csv', '', 'utf-8');
fs.writeFileSync(
  '.circleci/build.txt',
  [
    'node scripts/create.js --target=a $(BUILD_PARAMS)',
    'node scripts/create.js --target=b $(BUILD_PARAMS)',
    'node scripts/create.js --target=c $(BUILD_PARAMS)',
  ].join('\n'),
  'utf-8'
);
