var jsFiles = ['**/*.js', '!**/*.min.js', '!node_modules/**/*.js'];

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      dev: {
        src: ".env"
      }
    },

    jshint: {
      all: jsFiles
    },

    mochaTest: {
      unit: {
        src: ['test/unit/**/test-*.js']
      },
      system: {
        src: ['test/system/**/test-*.js']
      }
    },

    watch: {
      js: {
        files: jsFiles,
        tasks: ['jshint', 'mochaTest']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['env:dev', 'jshint', 'mochaTest:unit', 'concurrent']);
  grunt.registerTask('test', ['jshint', 'mochaTest']);

};