"use strict";

angular.module("myApp", [])
.controller("myCtrl", function($scope, $q) {
	$scope.total = 0;
	$scope.notNum = false;
	$scope.addOne = function(t){
		var defered = $q.defer();
		var promise = defered.promise;
		if (angular.isNumber(t)){
			defered.resolve(t + 1);
		} else {
			defered.reject(t);
		}
		return promise;
	};

	$scope.inc = function() {
		var base = $scope.total;
		if ($scope.notNum) {
			base=NaN;
		} else if (! base && base !== 0 ) {
			base = 0;
		}
		var p = $scope.addOne(base);
		p.then(
			function(v) {return v},
			function(rej) {return rej}	
			)
		.then(
			function(v) {return v},
			function(rej) {return rej}	
			)
		.then(
			function(v) {$scope.total = v},
			function(rej) {$scope.total =rej}	
			);
	};
});
