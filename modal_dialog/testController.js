angular.module('ui.bootstrap.demo')

  .controller("myCtrl", function($scope, myDiagService) {
    $scope.msg = ""
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
      myDiagService.popUp(diag, $scope.myOKCB, $scope.myNOKCB);
    };
  });
