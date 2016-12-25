module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'dist/out.min.js': ['src/js/firstController.js', 'src/js/secondController.js']
                }
            }
        },
        concat: {
            dist: {
                src: ['src/js/firstController.js', 'src/js/secondController.js'],
                dest: 'dist/merge.js'
            }
        },
        printConfig: {
            message: 'Hello world'
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('printConfig', function() {
        grunt.log.writeln(JSON.stringify(grunt.config(), null, 2));        
        //grunt.log.writeln('tam ' + new Date());
    });
    grunt.registerTask('default', ['uglify', 'concat']);

};

