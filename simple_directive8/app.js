
/*
	This is an example of directive where the same directive is
	used multiple times inside the same controller and we
	use here multiple controllers. 
	You cannot do this without inline scoping.
*/
(function(angular){
	'use strict';

	angular.module('myapp', [])
    	.controller('myCtrl1', ['$scope', function($scope) {
        	$scope.john = { name: "John Smith", address: "1 Golden St, Goldvile, NJ" };
        	$scope.bill = { name: "Bill Smith", address: "100 World Rd, Black Spot, NJ" };
		}])
		.directive('welcome', function() {
			return {
				restrict: "E",
				/*
					Here we isolate scopes so that if I write welcome 2x with diff attrs
					I get for each directive own set
				*/
				scope: {},
				controller: function($scope) {
					$scope.words = [];
					this.sayHi = function(){
						$scope.words.push("Hi");
					},
					this.sayHello = function(){
						$scope.words.push("Hello");
					},
					this.sayHowday = function(){
						$scope.words.push("Howday");
					}
				},
				/*
					link phase will occure every time you cover "Say something"
					with the mouse, so it will print in the log
				*/
				link: function(scope, element) {
					element.bind("mouseenter", function(){
						console.log(scope.words);
					})
				}
			};
		})
		.directive('hi', function() {
			return {
				require: "welcome",
				link: function(scope, element, attrs, welcomeCtrl) {
					welcomeCtrl.sayHi();
				}
			};
		})
		.directive('hello', function() {
			return {
				require: "welcome",
				link: function(scope, element, attrs, welcomeCtrl) {
					welcomeCtrl.sayHello();
				}
			};
		})
		.directive('howday',function(){
			return {
				require: "welcome",
				link: function(scope, element, attrs, welcomeCtrl) {
					welcomeCtrl.sayHowday();
				}
			};
		});
})(window.angular);
