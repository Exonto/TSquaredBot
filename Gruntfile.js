module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    var config = require('./.screeps.json');

    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                password: config.password,
                branch: config.branch,
                ptr: config.ptr
            },
            dist: {
                src: ['dist/*.js',
                      'dist/empire/*.js',
                      'dist/role/*.js',
                      'dist/role/states/*.js',
                      'dist/defs/*.js',
                      'dist/memory/*.js']
            }
        }
    });
};
