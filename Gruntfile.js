'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'dist'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            },
        },
        compass: {
            dist: {
                options:{
                    sassDir: 'src/css',
                    cssDir: 'dist/css',
                    generatedImagesDir: 'src/img/generated',
                    imagesDir: 'src/img',
                    httpGeneratedImagesPath:'../img/generated',
                    noLineComments: true
                }
            }
        },
        copy: {
            img: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src/img',
                    dest: 'dist/img',
                    src: [
                        '**/*.{ico,png,jpg,gif,webp}'
                    ]
                }]
            },
            template: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src/template',
                    dest: 'dist/template',
                    src: [
                        '*.html'
                    ]
                }]
            },
        },
        watch: {
            files: [
                'src/css/*.*',
                'src/img/*.*',
                'src/js/*.*',
                'src/template/*.*'
            ],
            tasks: [
                'uglify',
                'compass',
                'copy:template'
            ],
            options: {
                livereload: {
                    port: 35729,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.registerTask('default', [
        'clean',
        'uglify',
        'compass',
        'copy:template',
        'copy:img',
        'connect:server',
        'watch'
    ]);

};
