# angularJS
My angularJS examples that I created while learning angular

## Testing client
  - Use *grunt* 
    - run existing example like this (e.g).:  __grunt connect:ex1__
  - To add new examples edit: _Gruntfile.js_ and add new section in connect
  - TODO: add:
    - jshint
    - unit testing

## If you need data from server
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
- shows how to call my very specific listener when certian variable changes
- note: you use "scope" without dollar in the $watch()

### [grid](https://github.com/bozanarh/angularJS/tree/master/grid)
- simple grid example - illustrates very basic usage of ui-grid
- uses static data

### [eventHandling](https://github.com/bozanarh/angularJS/tree/master/eventHandling)
- show how works event handling with buttons in a table
- uses static data

### [simplest_grid](https://github.com/bozanarh/angularJS/tree/master/simplest_grid)
- the simplest grid example with static data

### [grid_with_http_get](https://github.com/bozanarh/angularJS/tree/master/grid_with_http_get)
- grid example - illustrates how to obtain data from server through http get
- note: you may want to run my simulator (see [server_sim](https://github.com/bozanarh/angularJS/tree/master/server_sim)

### [grid_with_sorting](https://github.com/bozanarh/angularJS/tree/master/grid_with_sorting)
- grid example - illustrates how to do sorting on columns

### [directive_book1](https://github.com/bozanarh/angularJS/tree/master/directive_book1)
- Shows how to create directive with default scope (false).
- scope is inherited from the controller that uses directive
- any change in the controller will also make change in the directive and vice versa

### [directive_book2](https://github.com/bozanarh/angularJS/tree/master/directive_book2)
- Shows how to create directive with own private scope (true).
- scope is inheriated from controller that uses directive
- protype inheritance - directive shares scope until it makes a change in it.
After that change in the directive's scope will not be reflected int ctrl,
and vice versa

### [directive_book3](https://github.com/bozanarh/angularJS/tree/master/directive_book3)
- Shows how to create isolate scope
- Shows how to use one way binding variables
- Shows how to use two way binding variables
- Shows how to pass callback from the controller to the directive
- Use compile when you want to make changes in the DOM
- Use link to link controller and directive variables

### [directive_book4](https://github.com/bozanarh/angularJS/tree/master/directive_book4)
- Shows how to call controller function from the directive and how to pass arguments to it

### [directive_book5](https://github.com/bozanarh/angularJS/tree/master/directive_book5)
- Shows how to use transclusion
- caller of the directive inserts template (whose content is unknown to the directive) inside directive.
- transcluded template deifned in index.html - surrounded by directive
- directive defines where transluded elements goes


### [broadcast1](https://github.com/bozanarh/angularJS/tree/master/broadcast1)
- This example illustrates how to pass msg from one controller to others
- We do it through b-casting
- Create shared service - factory function returns shared service obj
- Notifier, calls service method to broadcast msg (uses $rootScope.$broadcast)
- Substrcibers imlement $scope.$on where there wait for the event
- When event happens, subscribers access service's shared object and read msg


