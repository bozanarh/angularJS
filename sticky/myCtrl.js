"use strict";

angular.module("myApp", [])
    .controller("myCtrl", function($scope) {
	    $scope.txt="";
	    $scope.count=0;
	    $scope.left = function() {
	    	return 100-$scope.txt.length;
	    }
	    $scope.save = function() {
	    	alert("You have pressed save");
	    }
	    $scope.clear = function() {
	    	alert("You have pressed clear");
	    }
    });
