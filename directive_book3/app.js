"use strict";

angular.module("myApp", [])
    .controller("myCtrl", function($scope) {
        $scope.textVar = "Hello world";
        $scope.twoWayVar = {firstName: "John", lastName : "Smith"};
        $scope.setCtrlVariables = function(title) {
            $scope.textVar = $scope.textVar + 1;
            $scope.twoWayVar = {firstName: $scope.twoWayVar.firstName + 1, lastName : $scope.twoWayVar.lastName + 1};
        };
        $scope.changeData = function(){
            $scope.textVar = "Cao Bozana";
            $scope.twoWayVar = {firstName: "John", lastName : "Smith"};
        };
    })
    .directive("myScopedDirective", function() {
    	return {
            template : '<div>Directive RO var=<b>{{roVar}}</b></br>Directive RWVar=<b>{{rwVar}}</b></br><button ng-click="action()">ResetAllVars!</button> <button ng-click="changeDirVars()">ChangeDirVars!</button></div>',
    		scope : {
                'roVar' : '@myText',
                'action' : '&myAction',
                'rwVar' : '=myTwoWay',

            },
            
    		link : function($scope, $element, $attrs) {
    			//Nothing to do here
                $scope.changeDirVars = function(){
                    $scope.rwVar = "Dobar Dan";
                    $scope.roVar = "Guten Tag";
                };
            }
    	}
    });
