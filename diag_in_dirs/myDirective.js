'use strict';

(function (angular){
angular
.module('ui.bootstrap.demo')
.directive("myScopedDirective", function(dialogService) {
      return {
            restrict: 'EA',
            template : '<div><button ng-click="dirHandler()">Change!</button></div>',
            scope : {
                add : '&ctrlFunc',
            },
            

            controller : function($scope) {
                $scope.myOKCB = function(newMsg) {
                    $scope.msg = newMsg;
                    alert("OK button was pressed");
                    $scope.add()(newMsg);
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
                    $scope.add()(newMsg);*/
                }
            }     
      }
    });
})(angular);