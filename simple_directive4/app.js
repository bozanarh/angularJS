
//This is an example of directive that uses as tempalte function
//which defines template to be used !!
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl', ['$scope', function($scope) {
        	$scope.person = {
        		name: 'John Smith',
        		address: 'No Name Street 20, Magictown, NJ'
        	};
		}])
	.directive('helloWorld',function(){
		return {
      		templateUrl: function(elem, attr){
      			return 'my_' + attr.type +"_template.html";
      		}
  		};
	});
})(window.angular);
