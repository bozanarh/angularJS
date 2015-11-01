
/*
	This is an example where 2 controllers use the same
	directive
*/
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl1', ['$scope', function($scope) {
        	$scope.name = "World";
        	$scope.clickMe = function() {
        		alert("Click in ctrl1 detected");
        	}
		}])
		.controller('myCtrl2', ['$scope', function($scope) {
			$scope.name = "Land";
			$scope.clickMe = function() {
				alert("Click in ctrl2 detected");
			}
		}])
		.directive('helloWorld',function(){
			return {
				//Pay attention: It is tempalteUrl (not URL)!!
      			templateUrl: 'my_template_url.html'
  			};
		});
})(window.angular);
