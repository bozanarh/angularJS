module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            ex1: {
                port: 8081,
                base: 'template/'
            },
            ex2: {
                port: 8081,
                base: 'angularScopes/'
            },
            ex3: {
                port: 8081,
                base: 'sticky/'
            },
            ex4: {
                port: 8081,
                base: 'watch/'
            },
            ex5: {
                port: 8081,
                base: 'grid/'
            },
            ex6: {
                port: 8081,
                base: 'eventHandling/'
            },
            ex7: {
                port: 8081,
                base: 'simplest_grid/'
            },
            ex8: {
                port: 8081,
                base: 'grid_with_http_get/'
            },
            ex9: {
                port: 8081,
                base: 'grid_with_sorting/'
            },
            ex10: {
                port: 8081,
                base: 'grid_with_filtering/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:ex1');

};
