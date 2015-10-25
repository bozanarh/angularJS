"use strict";

angular.module("app", ['ui.grid'])
    .controller("MainCtrl", function($scope) {
	    $scope.txt = "Hello Bozana";
	    $scope.myData = [
			  {
			    "name": "Claire",
			    "amount": 21.9015,
			    "currency": "euro"
			  },
			  {
			    "name": "Fitzpatrick",
			    "amount": 41.6352,
			    "currency": "pound"
			  },
			  {
			    "name": "Ericka",
			    "amount": 31.4228,
			    "currency": "pound"
			  },
			  {
			    "name": "Navarro",
			    "amount": 2.1944,
			    "currency": "dollar"
			  },
			  {
			    "name": "Cherie",
			    "amount": 31.9234,
			    "currency": "dollar"
			  },
			  {
			    "name": "Cobb",
			    "amount": 45.5756,
			    "currency": "pound"
			  }
		];
    });
