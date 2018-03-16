'use strict';

const fs = require('fs');
const glob = require('globby');
const mkdirp = require('mkdirp');
const argv = require('yargs').argv;
const distFolder = `dist`;

if (!!argv.target) {
  console.log(glob.sync(`${distFolder}/**/*.txt`));
} else {
  mkdirp.sync(distFolder);
  fs.writeFileSync(`${distFolder}/${target}.txt`, `file ${target}`, `utf-8`);
}
