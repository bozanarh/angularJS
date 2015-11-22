"use strict";

angular.module("myApp", [])
	.factory("myService", function($rootScope) {
		var sharedService = {};
		sharedService.message = "Guten Tag";
		sharedService.bcast = function( msg ) {
			this.message = msg;
			$rootScope.$broadcast("MY_BCAST_EVENT");
		};
		return sharedService;
	})
    .controller("myCtrl1", function($scope, myService) {
	    $scope.txt="Hello Bozana";
	    $scope.change = function(){
	    	var msg = "Hello world!";
	    	myService.bcast(msg);
	    }
	    $scope.$on("MY_BCAST_EVENT", function(){
	    	$scope.txt = myService.message;
	    });
    })
    .controller("myCtrl2", function($scope, myService) {
	    $scope.txt="Zdravo Bozana";
	    $scope.$on("MY_BCAST_EVENT", function(){
	    	$scope.txt = myService.message;
	    });
    })
    .controller("myCtrl3", function($scope, myService) {
	    $scope.txt="Cao Bozana";
	    $scope.$on("MY_BCAST_EVENT", function(){
	    	$scope.txt = myService.message;
	    });
    });
