'use strict';

const fs = require('fs');

fs.writeFileSync('/tmp/mergedMap.csv', '', 'utf-8');
fs.writeFileSync(
  './circleci/build.txt',
  [
    'node scripts/create.js --target=a',
    'node scripts/create.js --target=b',
    'node scripts/create.js --target=c',
  ].join('\n'),
  'utf-8'
);
