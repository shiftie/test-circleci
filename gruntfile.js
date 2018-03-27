module.exports = function(grunt) {
  grunt.registerTask('zendesk-dist', 'Production build tasks', function() {
    console.log(`Running zendesk-dist with args: ${process.argv.slice(2)}`);
  });
};
