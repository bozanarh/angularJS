
/*
	This is an example of directive that uses  template URL 
	instead of defining template inside the directive
*/
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl', ['$scope', function($scope) {
        	$scope.name = "World";
		}])
		.directive('helloWorld',function(){
			return {
				//Pay attention: It is tempalteUrl (not URL)!!
      			templateUrl: 'my_template_url.html'
  			};
		});
})(window.angular);
