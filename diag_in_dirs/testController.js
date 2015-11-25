'use strict';

(function (angular){
  angular.module('ui.bootstrap.demo')
  .controller("myCtrl", function($scope, dialogService) {
    $scope.msg = "<none>";
    
    $scope.ctrlHandler = function(newMsg){
      alert("Ctrl handler invoked and got: " + newMsg);
      $scope.msg = newMsg;
    };

    $scope.myOKCB = function(newMsg) {
      $scope.msg = newMsg;
      alert("OK button was pressed");
    };
    $scope.myNOKCB = function() {
      alert("NOK button was pressed");
    };
    $scope.change = function(){
      var diag = {};
      diag.title = "My Dialog Title";
      diag.body = "My Dialog Body";
      diag.ok = "Yes";
      diag.nok = "No";
      $scope.msg = "";
      dialogService.confirm(diag, $scope.myOKCB, $scope.myNOKCB);
    };
  })
 /* .directive("myScopedDirective", function() {
      return {
            restrict: 'EA',
            template : '<div><button ng-click="dirHandler()">Change!</button></div>',
            scope : {
                add : '&ctrlFunc',
            },
            

            controller : function($scope, dialogService) {
                $scope.myOKCB = function(newMsg) {
                    $scope.msg = newMsg;
                    alert("OK button was pressed");
                };
                $scope.myNOKCB = function() {
                    alert("NOK button was pressed");
                };
                $scope.dirHandler = function() {
                    //alert("Directive Handler invoked!");
                    var diag = {};
                    diag.title = "My Dialog Title";
                    diag.body = "My Dialog Body";
                    diag.ok = "Yes";
                    diag.nok = "No";
                    $scope.msg = "";
                    dialogService.confirm(diag, $scope.myOKCB, $scope.myNOKCB);

                    /*var newMsg = "Hello Bozana";
                    $scope.add()(newMsg);
                }
            }     
      }
    })*/;
}(angular));
