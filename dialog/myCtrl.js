"use strict";
var app = angular.module('myApp', []);
app.directive("selectAllCheckboxB", function() {
    return {
        scope : false,
        replace:true,
        restrict: 'AE',
        templateUrl: 'headerCellTemplate.html'
    }
})
.controller("myCtrl", function($scope) {
    $scope.txt="Hello Bozana";
    $scope.allSelected=false;
    $scope.selectMe = function(v) {
    	console.log(v);
    	var answer = confirm("Are you sure?");
    	if (! answer) {
    		console.log("Before: " + $scope.allSelected);
    	
    		$scope.allSelected = !$scope.allSelected;
    		
    		console.log("After: " + $scope.allSelected);
    	}
    };

});
