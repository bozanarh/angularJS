module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            template: {
                port: 8081,
                base: 'template/'
            },
            promises: {
                port: 8081,
                base: 'promises/'
            },
            promises2: {
                port: 8081,
                base: 'promises2/'
            },
            controller_defs: {
                port: 8081,
                base: 'controller_defs/'
            },
            modal_dialog: {
                port: 8081,
                base: 'modal_dialog/'
            },
            diag_in_dirs: {
                port: 8081,
                base: 'diag_in_dirs/'
            },
            dialog: {
                port: 8081,
                base: 'dialog/'
            },
            dialog2: {
                port: 8081,
                base: 'dialog2/'
            },
            dialog3: {
                port: 8081,
                base: 'dialog3/'
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
            grid_with_editing2: {
                port: 8081,
                base: 'grid_with_editing2'
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
            simple_directive8: {
                port: 8081,
                base: 'simple_directive8/'
            },
            simple_directive9: {
                port: 8081,
                base: 'simple_directive9/'
            },
            checkboxes_in_grid: {
                port: 8081,
                base: 'checkboxes_in_grid/'
            },
            broadcast1: {
                port: 8081,
                base: 'broadcast1/'
            },
            directive_book1: {
                port: 8081,
                base: 'directive_book1/'
            },
            directive_book2: {
                port: 8081,
                base: 'directive_book2/'
            },
            directive_book3: {
                port: 8081,
                base: 'directive_book3/'
            },
            directive_book4: {
                port: 8081,
                base: 'directive_book4/'
            },
            directive_book5: {
                port: 8081,
                base: 'directive_book5/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:template');

};
