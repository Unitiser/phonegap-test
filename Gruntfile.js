module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    injector: {
      options: {
        ignorePath: 'www/'
      },
      local_dependencies: {
        files: {
          'www/index.html': ['bower.json', 'www/app/**/*.js', 'www/css/*.css'],
        }
      }
    },
    shell: {
      phonegap: {
        command: 'phonegap serve',
        options: {
          stdout: true,
          stderr: true,
          async: true
        }
      },
      options: {
          failOnError: true
      }
    },
    waitServer: {
      server: {
        options: {
          url: 'http://localhost:3000'
        }
      },
    },
    open : {
      dev : {
        path: 'http://localhost:3000',
        app: 'google-chrome'
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['injector'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-wait-server');
  grunt.loadNpmTasks('grunt-open');



  // Default task(s).
  grunt.task.registerTask('serve', ['injector','shell:phonegap', 'waitServer', 'open', 'watch']);
  grunt.registerTask('default', ['serve']);


};