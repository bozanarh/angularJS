var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.edit']);
//app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
app.controller('MainCtrl', ['$scope', 'uiGridConstants', function ($scope, uiGridConstants) {
  $scope.gridOptions1 = {
    enableSorting: true,
    enableFiltering: true,
    /* Here, you have to create this function if you want call to 
    $scope.grid1Api.core.notifyDataChange to work. It allows you to
    invoke grid APIs !!! */
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
    },

    //look at this: http://plnkr.co/edit/2hXm3ApM39e7YyyI79qb?p=preview
    columnDefs: [
      { field: 'name', displayName: 'Name', headerCellClass: 'header', cellClass: 'header' },
      { field: 'gender', displayName: 'Gender', headerCellClass: 'header' },
      { field: 'hasKids', type: 'boolean', displayName: 'Has Kids', headerCellClass: 'header', cellClass: 'header' },
      { field: 'isCitizen', type: 'boolean', headerCellClass: 'header', cellClass: 'header'   },
      { field: 'company', enableSorting: false, headerCellClass: 'header', cellClass: 'header'  }
    ],
    
  };
  
  $scope.showFiltered = function() {
    alert("soon... soon...");
  }
 


  $scope.gridOptions1.data =  [
    {
        "name": "Ethel Price",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Enersol"
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "hasKids": false,
        "isCitizen": true,
        "company": "Sealoud"
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "hasKids": false,
        "isCitizen": false,
        "company": "Velity"
    },
    {
        "name": "Wilder Gonzales",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Geekko"
    },
    {
        "name": "Georgina Schultz",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Suretech"
    },
    {
        "name": "Carroll Buchanan",
        "gender": "male",
        "hasKids": true,
        "isCitizen": true,
        "company": "Ecosys"
    },
    {
        "name": "Valarie Atkinson",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Hopeli"
    },
    {
        "name": "Schroeder Mathews",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Polarium"
    },
    {
        "name": "Lynda Mendoza",
        "gender": "female",
        "hasKids": true,
        "isCitizen": true,
        "company": "Dogspa"
    },
    {
        "name": "Sarah Massey",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Bisba"
    },
    {
        "name": "Robles Boyle",
        "gender": "male",
        "hasKids": false,
        "isCitizen": false,
        "company": "Comtract"
    },
    {
        "name": "Evans Hickman",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Parleynet"
    },
    {
        "name": "Dawson Barber",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Dymi"
    },
    {
        "name": "Bruce Strong",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Xyqag"
    },
    {
        "name": "Nellie Whitfield",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Exospace"
    },
    {
        "name": "Jackson Macias",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Aquamate"
    },
    {
        "name": "Pena Pena",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Quarx"
    },
    {
        "name": "Lelia Gates",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Proxsoft"
    },
    {
        "name": "Letitia Vasquez",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Slumberia"
    },
    {
        "name": "Trevino Moreno",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Conjurica"
    },
    {
        "name": "Barr Page",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Apex"
    },
    {
        "name": "Kirkland Merrill",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Utara"
    },
    {
        "name": "Blanche Conley",
        "gender": "female",
        "hasKids": true,
        "isCitizen": false,
        "company": "Imkan"
    },
    {
        "name": "Atkins Dunlap",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Comveyor"
    },
    {
        "name": "Everett Foreman",
        "gender": "male",
        "hasKids": true,
        "isCitizen": false,
        "company": "Maineland"
    }
  ]

}]);
