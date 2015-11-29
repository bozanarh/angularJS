"use strict";

angular.module("myApp", [])
.controller("myCtrl", function($scope, $q) {
	$scope.txt="Du bist lustig!";
	$scope.myVar = false;
	var defered = $q.defer();
	var promise = defered.promise;
	promise.then(function(arg) {
		alert("Succ, got: " + arg);
	}, function(arg) {
		alert("Fail, got: " + arg);
	});

	//This promise will run only once because you create it only once 
	//in the code above.
	$scope.clickMe = function() {
		if ($scope.myVar === false) {
			defered.resolve($scope.txt);
		} else {
			defered.resolve("Keine Ahnung :-(");
			$scope.myVar = true;
		}
	};
});
