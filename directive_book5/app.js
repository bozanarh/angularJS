"use strict";

angular.module("myApp", [])
    .controller("myCtrl", ['$scope', function($scope) {
        $scope.msg = "Hello world";
    
        $scope.ctrlHandler = function(newMsg){
            alert("Ctrl handler invoked and got: " + newMsg);
            $scope.msg = newMsg;
        };
    }])
    .directive("myScopedDirective", function() {
    	return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template : '<div><button ng-click="dirHandler()">Change!</button><br/><ng-transclude></ng-transclude></div>',
    		scope : {
                add : '&ctrlFunc',
            },
           /* link  : function($scope, $elem, $attrs ) {
                $scope.action = function(){
                    alert("Dir's chaneData() invoked");
                }
            }*/            
            controller : function($scope) {
                $scope.dirHandler = function() {
                    alert("Directive Handler invoked!");
                    var newMsg = "Hello Bozana";
                    $scope.add()(newMsg);
                }
            } 		
    	}
    });
