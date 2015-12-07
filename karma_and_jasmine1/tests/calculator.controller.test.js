describe('calculator', function () {

  beforeEach(module('calculatorApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    console.log("==== before each is called");
  }));

  describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        }); 
        it('z should have dflt val of zero', function(){
          var $scope = {};
          var controller = $controller('CalculatorController', { $scope: $scope });
          expect($scope.z).toBe(0);
        });
    });

});
