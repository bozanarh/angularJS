# angularJS
My angularJS examples that I created while learning angular

## Testing client
  - Use *grunt* 
    - run existing example like this (e.g).:  __grunt connect:ex1__
  - To add new examples edit: _Gruntfile.js_ and add new section in connect
  - TODO: add:
    - jshint
    - unit testing

## You need data from server
  - see [server_sim](https://github.com/bozanarh/angularJS/tree/master/server_sim)

## Code examples:

### [template](https://github.com/bozanarh/angularJS/tree/master/template)
- begining of the world -> Hello world example

### [angularScopes](https://github.com/bozanarh/angularJS/tree/master/angularScopes)
- shows how to use $scope and $rootScope
- shows how to use multiple controllers
- if a variable is not defined in $scope it is taken from $rootScope if defined there
- note department has been defined only in rootScope of greetCtrl, but it is also used in listCtrl

### [sticky](https://github.com/bozanarh/angularJS/tree/master/sticky)
- shows how to use text area
- shows how to update count (num of available chars in text area)

### [watch](https://github.com/bozanarh/angularJS/tree/master/watch)
- shows how to use $watch
- shows hot to call my very specific listener when certian variable changes
- note you use "scope" without dollar in the $watch()

### [grid](https://github.com/bozanarh/angularJS/tree/master/grid)
- simple grid example - ilustrates very basic usage of ui-grid
- uses static data

### [eventHandling](https://github.com/bozanarh/angularJS/tree/master/eventHandling)
- show how event handling with buttons in a table works
- uses static data

### [simplest_grid](https://github.com/bozanarh/angularJS/tree/master/simplest_grid)
- the simplest grid example with static data

### [grid_with_http_get](https://github.com/bozanarh/angularJS/tree/master/grid_with_http_get)
- grid example - ilustrates how to obtain data from server through http get

### [grid_with_sorting](https://github.com/bozanarh/angularJS/tree/master/grid_with_sorting)
- grid example - ilustrates how to do sorting on columns

