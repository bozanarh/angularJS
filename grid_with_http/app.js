"use strict";

var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid.edit', 'ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.changedRow = {};
  $scope.gridOptions1 = {
    enableSorting: true,
    columnDefs: [
      { field: 'name' },
      { field: 'gender' },
      { field: 'company', enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
      gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
        saveNewData(rowEntity);
      });
    }
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

// $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
  $http.get('http://localhost:7001/api/v1/models')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    });

  function saveNewData(data) {
    $http.post('http://localhost:7001/api/v1/models', data)
      .then(function(resp) {
        $scope.changedRow = resp.data;
      }, function(resp){
        alert("Failed to save new data");
      });
  }

}]);
