define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name chartsApp.controller:ChartCtrl
   * @description
   * # ChartCtrl
   * Controller of the chartsApp
   */
  angular.module('chartsApp.controllers.ChartCtrl', [])
    .controller('ChartCtrl', function ($routeParams, $scope, Chart, config) {
      var slug = $routeParams.slug;

      $scope.submit = function() {
        var data = {
          title: $scope.chartConfig.title.text
        };

        Chart.save(slug, data);
      };

      function activate () {
        Chart.get(slug)
          .success(function(data) {
            render(data);
          });
      }

      function render (data) {
        var chartConfig = angular.copy(
          config.charts[$scope.UTIL.toUpperCase(slug)]
        );

        chartConfig = chartConfig.big || chartConfig;

        chartConfig.series = data;

        $scope.chartConfig = chartConfig;
      }

      activate();

    });
});
