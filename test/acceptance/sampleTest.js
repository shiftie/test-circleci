'use strict';

const argv = require('yargs').argv;
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const expect = require('chai').expect;
const parallel = require('mocha.parallel');
const parallelize = argv.parallel !== undefined ? argv.parallel : false;

const flows = [
  'github nightmare',
  'circle ci',
  'react',
  'zendesk',
  'overwatch',
];

describe('Demo flows', function() {
  this.timeout(180000);

  const flowTests = () => {
    flows.forEach((flow, i) => {
      describe(flow, () => {
        it(`${flow} can be filled out`, function(done) {
          const nightmare = Nightmare({ show: true });

          this.timeout(50000);

          (async () => {
            nightmare
              .goto('https://duckduckgo.com')
              .type('#search_form_input_homepage', `${flow}`)
              .click('#search_button_homepage')
              .wait('#r1-0 a.result__a')
              .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
              .end()
              .then(link => {
                console.log(link);
                done();
              })
              .catch(error => {
                console.error('Search failed:', error);
                nightmare.end();
                done(new Error(error));
              });
          })();
        });
      });
    });
  };

  if (parallelize === true) {
    console.log('Running demoTest in parallel');
    parallel.limit(4);
    parallel(`Demo flows parallelization`, () => {
      flowTests();
    });
  } else {
    console.log('Running demoTest sequentially');
    flowTests();
  }
});
