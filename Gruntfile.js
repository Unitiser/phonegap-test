module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    wiredep: {

      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'www/**/*.html',   // .html support...
          'www/js/**/*.js',
        ],

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });

  // Load wiredep
  grunt.loadNpmTasks('grunt-wiredep');




  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};