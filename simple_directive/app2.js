'use strict';

(function(angular){
  angular.module('myapp')
    .controller('myCtrl2', MyCtrl2)
    .directive('myDirective',function(){
      return {
        template: '<div>Cao Papane!</div>',
        controller: 'myCtrl2'
      };

    });
    
    MyCtrl2.$injects = ['$scope'];

    function MyCtrl2($scope){
      $scope.updateFilter = updateFilter;

      function updateFilter(){
          $scope.name="Angular";
      }
    }      
}(angular));

