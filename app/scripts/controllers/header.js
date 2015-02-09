define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name chartsApp.controller:HeaderCtrl
   * @description
   * # HeaderCtrl
   * Controller of the chartsApp
   */
  angular.module('chartsApp.controllers.HeaderCtrl', [])
    .controller('HeaderCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    });
});
