"use strict";

angular.module("myApp", [])
    .controller("myCtrl", function($scope) {
	    $scope.count = 0;
	    $scope.msg="Hi Bozana";
	    $scope.incCount = function() {
	    	$scope.count = $scope.count + 1;
	    };
	    // !!!! IMPORTANT
	    /* pay attention, scope is invoked without dollar prefix  */
	    $scope.$watch( function(scope) { //watch func
	    	return scope.count;
	    }, function(newVal, oldVal) { //listener func
	    	if (newVal > 0) {
	    		$scope.msg = "old value: " + oldVal + ", new value: " + newVal;
	    	}
	    });
    });
