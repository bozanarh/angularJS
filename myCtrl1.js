angular.module('myApp', [])
	.controller('myCtrl1', function($scope, $http) {
		$http.get("http://www.w3schools.com/angular/customers.php")
			.success(function(response) { $scope.names=response.records; }
		);
		$scope.people=[
			{ firstName: 'John', lastName: 'Smith' },
			{ firstName: 'Joe', lastName: 'Schmoe' },
			{ firstName: 'Foo', lastName: 'Bar' },
			{ firstName: 'Alice', lastName: 'Dark' },
			{ firstName: 'Jenn', lastName: 'Penn' }
			];

		$scope.getHello = function() {
			return "Hello world!";
		}
		$scope.buttonClicked = function(){
			return "I am clicked !";
		}
		$scope.count = 0;
		$scope.hideSection = false;
		$scope.toggle = function() {
			$scope.hideSection = ! $scope.hideSection;
		};
		$scope.showHide = function() {
			if ($scope.hideSection) return 'Hide';
			else return 'Show'
		};		
	});