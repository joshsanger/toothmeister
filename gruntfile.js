module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                compress: {
                    sequences: false
                }
            },
            build: {
                src: [
                    'js/lib/*.js',
                    '!src/js/*es6.js',
                    'src/js/es6-compiled.js'
                ],
                dest: './public_html/assets/js/main.min.js'
            }
        },
        concat : {
            basic : {
                src : [
                    'vendor/geekpower/procter-gamble-styling/css/reset.less',
                    'vendor/geekpower/procter-gamble-styling/css/global.less',
                    'vendor/geekpower/procter-gamble-styling/css/mixins.less',
                    'src/css/*.less',
                    '!src/css/staging.less'
                ],
                dest : 'src/css/staging.less'
            }
        },
        less: {
            options: {
                compress: true,
                banner : '@charset "UTF-8";'
            },
            build: {
                src: 'src/css/staging.less',
                dest: './public_html/assets/css/master.min.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'less']);
    grunt.registerTask('buildCss', ['concat', 'less']);
    grunt.registerTask('buildJs', ['uglify']);
};