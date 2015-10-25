"use strict";

var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
//app.controller('MainCtrl', ['$scope', 'uiGridConstants', function ($scope, uiGridConstants) {
  $scope.gridOptions1 = {
    enableSorting: true,
    columnDefs: [
      { field: 'name' },
      { field: 'gender' },
      { field: 'company', enableSorting: false }
    ]
  };
  
  //to use hard-coded data, uncommen this and delete http portion in the ctrl def
 /* $scope.gridOptions1.data = [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Enersol"
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud"
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity"
    }
  ];*/

 $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    });
}]);
