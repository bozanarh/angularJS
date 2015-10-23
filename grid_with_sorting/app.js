var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid']);
app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions1 = {
    enableSorting: true,
    columnDefs: [
      { field: 'name' },
      { field: 'gender' },
      { field: 'company', enableSorting: false }
    ],
    /* Here, you have to create this function if you want call to 
    $scope.grid1Api.core.notifyDataChange to work. It allows you to
    invoke grid APIs !!! */
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
    }
  };
  
  $scope.toggleGender = function() {
    //alert("you have pressed the toggle button");
    var id=64;
    
    if ($scope.gridOptions1.data[id].gender === 'male') {
      $scope.gridOptions1.data[id].gender = 'female';
    } else {
      $scope.gridOptions1.data[id].gender = 'male';
    }
    var msg = $scope.gridOptions1.data[id].name + " will change to " + $scope.gridOptions1.data[id].gender;
    alert(msg);

    //now notify grid that gender changed
    $scope.grid1Api.core.notifyDataChange( uiGridConstants.dataChange.EDIT );
  }
 
 $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    });

}]);
