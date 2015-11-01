
/*
	This is an example of directive where the same directive is
	used multiple times inside the same controller and we
	use here multiple controllers. 
	You cannot do this without inline scoping.
*/
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl1', ['$scope', function($scope) {
        	$scope.john = { name: "John Smith", address: "1 Golden St, Goldvile, NJ" };
        	$scope.bill = { name: "Bill Smith", address: "100 World Rd, Black Spot, NJ" };
		}])
		.controller('myCtrl2', ['$scope', function($scope) {
        	$scope.max = { name: "Max Plank", address: "1 Imagine St, Neverland, NJ" };
        	$scope.zoi = { name: "Zoi Zoo", address: "20 Rail Rd, Pondspot, NJ" };
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
