'use strict';

var app = angular.module('myModule', [])
  //this is first service - engine
  .factory('engine', function(){
    return {
      speed : function() {
        return 'fast';
      }
    }
  })
  //this is second service - car, which depends on the
  //first service - engine
  .factory('car', ['engine', function(engine) {
     return {
       drive : function() {
         return 'Driving: ' + engine.speed();
       }
     }
  }]);
