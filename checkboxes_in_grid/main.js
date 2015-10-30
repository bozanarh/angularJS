"use strict";

var app = angular.module('myApp', ['ui.grid']);
app.controller('MyCtrl', function($scope) {
  $scope.txt = "Hi";
  $scope.myData = [{
    name: "Moroni",
    age: 50,
    dude: true
  }, {
    name: "Tiancum",
    age: 43,
    dude: true
  }, {
    name: "Jacob",
    age: 27,
    dude: false
  }, {
    name: "Nephi",
    age: 29,
    dude: true
  }, {
    name: "Enos",
    age: 34,
    dude: false
  }];

  $scope.gridOptions = {
    data: 'myData',
    columnDefs: [{
      field: 'name',
      displayName: 'Name'
    }, {
      field: 'age',
      displayName: 'Age'
    }, {
      field: 'dude',
      displayName: 'Dude',
      cellTemplate: '<input type="checkbox" ng-model="row.entity.dude" ng-click="grid.appScope.toggle(row.entity.name,row.entity.dude)">',
      headerCellTemplate: '<span><input type="checkbox" ng-click="grid.appScope.selectAll($event)">Select All</span>'
    }]
  };

  $scope.toggle = function(name, value) {
    //do something usefull here, you have the name and the new value of dude 
    alert(name + ':' + value);
  };
  $scope.selectAll = function(event) {
    
    for (var i = 0; i < $scope.myData.length; i++) {
      $scope.myData[i].dude = event.currentTarget.checked;
    }
  }
});