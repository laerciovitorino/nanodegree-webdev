module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'resources/images/',
          dest: 'resources/images/'
        }]
      }
    }

  });

  grunt.registerTask('default', ['responsive_images']);
}
