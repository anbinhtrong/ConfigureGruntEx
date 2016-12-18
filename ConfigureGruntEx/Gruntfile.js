module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // copy: {
        //     dist: {                
        //         src: 'src/js/*',//'src/js/<%= pkg.main %>',
        //         dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
        //     }
        // }
        uglify: {
            build: {
                files:{
                    'dist/out.min.js': ['src/js/firstController.js', 'src/js/secondController.js']    
                }                
            }
        },
        concat: {
            dist:{
                src: ['src/js/firstController.js', 'src/js/secondController.js'],
                dest: 'dist/merge.js'
            }
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['uglify', 'concat']);    
};
