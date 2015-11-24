angular.module('ui.bootstrap.demo', ['ui.bootstrap'])
  .factory("myDiagService", function($rootScope, $uibModal) {
    var sharedService = {};
    sharedService.diag = {};
    sharedService.diag.title = "My title";
    sharedService.diag.body = "Dialog Body";
    sharedService.diag.ok = "Ok";
    sharedService.diag.nok = "Cancel";
    
    sharedService.popUp = function( d, succ, fail) {
      this.diag = d;
      this.succCallback = succ;
      this.failCallback = fail;
      
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
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
  })
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, diag) {
    $scope.diag = diag;
    $scope.ok = function () {
      console.log("OK invoked");
      $uibModalInstance.close("Cao Bozana!");
    };

    $scope.cancel = function () {
      console.log("Cancel invoked");
      $uibModalInstance.dismiss('cancel');
    };
  });