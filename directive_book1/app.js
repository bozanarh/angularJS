"use strict";

angular.module("myApp", [])
    .controller("myCtrl", function($scope) {
        $scope.title="Hello Bozana";
        $scope.setAppTitle = function(title) {
            $scope.title = title;
        }
    })
    .directive("myScopedDirective", function() {
    	return {
    		scope : false, //this is default, directive shares scope with ctrl
    		link : function($scope, $element, $attrs) {
    			$scope.setDirectiveTitle = function(title) {
					$scope.title = title;    				
    			}
    		}
    	}
    });
