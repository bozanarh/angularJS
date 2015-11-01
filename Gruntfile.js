module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            template: {
                port: 8081,
                base: 'template/'
            },
            bindings: {
                port: 8081,
                base: 'bindings/'
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
            },
            simple_directive: {
                port: 8081,
                base: 'simple_directive/'
            },
            simple_directive2: {
                port: 8081,
                base: 'simple_directive2/'
            },
            simple_directive3: {
                port: 8081,
                base: 'simple_directive3/'
            },
            simple_directive4: {
                port: 8081,
                base: 'simple_directive4/'
            },
            simple_directive5: {
                port: 8081,
                base: 'simple_directive5/'
            },
            simple_directive6: {
                port: 8081,
                base: 'simple_directive6/'
            },
            simple_directive7: {
                port: 8081,
                base: 'simple_directive7/'
            },
            checkboxes_in_grid: {
                port: 8081,
                base: 'checkboxes_in_grid/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:ex1');

};
