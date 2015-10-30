(function(angular) {

	"use strict";
	angular.module("myApp", [])
    	.controller("myCtrl", function($scope) {
	    	$scope.txt="Hello Bozana";
    	})
    	.directive( "myDirective", function(){
    		return {
    			//template: "New message: <b>{{txt}}</b>"
    			templateUrl: 'myDirectiveTemplate.html'
    		};
    	});
 }) (window.angular);
