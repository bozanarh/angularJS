/*
    This is simple way of writing directive
    You can embed the template inside the directive
    or you can put it in another file
*/
(function(angular) {

	"use strict";
	angular.module("myApp", [])
    	.controller("myCtrl", function($scope) {
	    	$scope.txt="Hello Bozana";
    	})
    	.directive( "myDirective", function(){
    		return {
    			template: "New message: <b>{{txt}}</b>"
    			//templateUrl: 'myDirectiveTemplate.html'
    		};
    	});
 }) (window.angular);
