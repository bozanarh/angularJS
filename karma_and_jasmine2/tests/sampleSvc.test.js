'use strict';

describe('Testing a car', function() {
  var testEngine;

  beforeEach(module('myModule'));

  beforeEach(inject(function(engine){
    testEngine = engine;
  }));
  
  //this is first way of testing - using spys
  it('test drive using spys', inject(function(car) {
    //mock engine.speed() function to return slow
    spyOn(testEngine, 'speed').and.returnValue('slow');

    //validate that car.drive() is returning "Drivind slow" despite that fact
    //that engine by default return 'fast'
    expect(car.drive()).toEqual('Driving: slow');
  }));

   //this is another way of testing - using ability of JS to override
   //original function
   it('test drive by overriding speed()', inject(function(car) {
    testEngine.speed = function() {
      return 'langsam';
    };
    expect(car.drive()).toEqual('Driving: langsam');
  }));

});