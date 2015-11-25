/*
 * To create yes/no dialog in your controller, you need to:
 * 1. create dialog object
 * 2. Define callback methods for yes & no button
 * 3. call dialogService.confirm(dialog, yesCallback, noCallback)
 *
 * example:
 *  .controller("myCtrl", function($scope, dialogService) {
 *    var diag = {};
 *    diag.title = "My Dialog Title";
 *    diag.body = "My Dialog Body";
 *    diag.ok = "Yes";
 *    diag.nok = "Cancel";
 *  
 *    dialogService.confirm(diag, $scope.myOKCB, $scope.myNOKCB);
 *  
 *    $scope.myOKCB = function() {
 *      alert("Yes button was pressed");
 *    };
 *    $scope.myNOKCB = function() {
 *      alert("Cancel button was pressed");
 *    };
 *  }//end of ctrl
 */

'use strict';

(function (angular){

  angular
    .module('ui.bootstrap.demo', ['ui.bootstrap'])
    .factory('dialogService', dialogService)

  dialogService.$injects = ['$rootScope', '$uibModal'];
 
  function dialogService($rootScope, $uibModal) {
    var sharedService = {};
    sharedService.diag = {};

    //these are default settings
    sharedService.diag.title = "dcTrack";
    sharedService.diag.body = "Are you sure?";
    sharedService.diag.ok = "Yes";
    sharedService.diag.nok = "No";
    
    sharedService.confirm = function( d, succ, fail) {
      this.diag = d;
      this.succCallback = succ;
      this.failCallback = fail;
      
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'confirm-dialog.html',
        
        controller: function($scope, $uibModalInstance, diag) {
          $scope.diag = diag;
          $scope.ok = function () {
            console.log("OK invoked");
            $uibModalInstance.close("Cao Bozana!");
          };

          $scope.cancel = function () {
            console.log("Cancel invoked");
            $uibModalInstance.dismiss('cancel');
          };
        },
        size: "md",
        resolve: {
          diag: function () {
            return sharedService.diag;
          }
        }
      });
      modalInstance.result.then(function (newMsg) {
        sharedService.succCallback(newMsg);
      }, function () {
        sharedService.failCallback();
      });
    };
    return sharedService;
  };
}(angular));
  