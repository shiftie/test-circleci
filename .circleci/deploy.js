console.log(`
This will :
  - git checkout -- public/assets/src/css # removes compiled CSS @see commitDisted() in normandy
  - Commit local branch branch
  - Commit / Push to staging branch
  - Checks content is deployed in staging
  - Commit / Push to production
  - Rebase local branch & commit / push to origin
  - Update DB to reflect compiled pages
  - Send Slack message
with args: ${process.argv.slice(2)}`);
