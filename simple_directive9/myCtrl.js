/*
    This is simple way of writing directive
    You can embed the template inside the directive
    or you can put it in another file
*/
(function(angular) {

	"use strict";
	angular.module("myApp", [])
    	.controller("myCtrl", function($scope) {
	    	$scope.backCB=function() {
                console.log("Ctrl back func");
                console.dir($scope);
                alert("You are back, got: " + $scope.abc);
            }
    	})
    	.directive( "mybutton", function(){
    		return {
    			template: "<p>{{abc}}</p>",
    			replace: true,
                link: function(scope, element, attrs) {
                    scope.abc = attrs.mybutton;
                    console.log("in link");
                    console.dir(scope);
                }
    		};
    	});
 }) (window.angular);
