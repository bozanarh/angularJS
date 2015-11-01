'use strict';

//This is one way of writing controller
angular.module("myapp", [])
    .controller("myCtrl", function($scope) {
        $scope.name = "World";
	})
.directive('helloWorld',function(){
	return {
    	replace:true,
     	restrict: 'AE',
      	template: '<h3>Hello {{name}}!!</h3>'
  	}
});



