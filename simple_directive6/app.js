
/*
	This is an example of directive where the same directive is
	used multiple times. You cannot do that without inline scoping
*/
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl', ['$scope', function($scope) {
        	$scope.john = { name: "John Smith", address: "1 Golden St, Goldvile, NJ" };
        	$scope.bill = { name: "Bill Smith", address: "100 World Rd, Black Spot, NJ" };
		}])
	.directive('helloWorld',function(){
		return {
			restrict : 'E',
			scope: {
				person: '=info',
			},
			//Pay attention: It is tempalteUrl (not URL)!!
      		templateUrl: 'my_template_url.html'
  		};
	});
})(window.angular);
