angular.module("myApp", [])
    .controller("myCtrl", function($scope) {

    	$scope.names = ["click me", "click me", "click me", "click me", "click me", "click me", "click me", "click me", "click me"];
	    $scope.realNames = ["Mike", "Bill", "Jeff", "Satish", "Rajesh", "Somesh", "Derek", "Chris", "Bozana"];
	    $scope.hints = ["our manager", "volvo guy", "Sweden", "still in touch", "VP in NYC", "performance testing", "worked in army", ":-)"];
	    $scope.getHint = function(index, event) {
	    	alert($scope.hints[index]);
	    }

	    $scope.clickMe = function(index, event) {
	    	//alert( "You have selected " + $scope.realNames[index] );
	    	$scope.names[index] = $scope.realNames[ index ];
	    }
    });
