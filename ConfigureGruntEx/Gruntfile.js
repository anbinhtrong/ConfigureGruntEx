module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // configure jshint to validate js files
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                reporter: require('jshint-stylish') //// use jshint-stylish to make our errors look and read good
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);

};