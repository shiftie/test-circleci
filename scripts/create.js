'use strict';

const fs = require('fs');
const glob = require('globby');
const mkdirp = require('mkdirp');
const argv = require('yargs').argv;
const distFolder = `dist`;

if (!argv.target) {
  console.log(glob.sync(`${distFolder}/**/*.html`));
} else {
  mkdirp.sync(distFolder);
  const content = fs.writeFileSync;
  fs.writeFileSync(
    `${distFolder}/${argv.target}.txt`,
    `file ${argv.target}`,
    `utf-8`
  );
}
