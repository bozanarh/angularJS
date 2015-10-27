module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            template: {
                port: 8081,
                base: 'template/'
            },
            angularScopes: {
                port: 8081,
                base: 'angularScopes/'
            },
            sticky: {
                port: 8081,
                base: 'sticky/'
            },
            watch: {
                port: 8081,
                base: 'watch/'
            },
            grid: {
                port: 8081,
                base: 'grid/'
            },
            eventHandling: {
                port: 8081,
                base: 'eventHandling/'
            },
            simplest_grid: {
                port: 8081,
                base: 'simplest_grid/'
            },
            grid_with_http: {
                port: 8081,
                base: 'grid_with_http/'
            },
            grid_with_sorting: {
                port: 8081,
                base: 'grid_with_sorting/'
            },
            grid_with_filtering: {
                port: 8081,
                base: 'grid_with_filtering/'
            },
            grid_with_editing: {
                port: 8081,
                base: 'grid_with_editing/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:ex1');

};
