"use strict";

angular.module("myApp", [])
    .controller("greetCtrl", function($scope, $rootScope) {
	    $scope.name="World";
	    $rootScope.department = "Angular";
    })
    .controller("listCtrl", function($scope) {
	    $scope.names=["Misko", "Vojta", "Igor"];
    })
