'use strict';

(function (angular){
  angular
    .module('app')

    .controller('MyNewCtrl', ['$scope', function($scope) {
      $scope.abc = 'Hi';
    }])
    .directive("selectAllCheckbox", function() {
        return {
            replace:true,
            restrict: 'AE',
            templateUrl: 'headerCellTemplate.html',
            controller: 'MyNewCtrl'
        }
    })
}(angular));
 