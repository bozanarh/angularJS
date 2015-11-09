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
    		scope : true, //directive inherits parent scope and its new scope is not visible in the parent
    		link : function($scope, $element, $attrs) {
    			$scope.setDirectiveTitle = function(title) {
					$scope.title = title;    				
    			}
    		}
    	}
    });
