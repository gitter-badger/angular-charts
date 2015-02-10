define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name chartsApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the chartsApp
   */
  angular.module('chartsApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, Chart, config) {
      var charts = [{
        slug: 'monthly-average-temperature',
        config: null
      }, {
        slug: 'us-and-ussr-nuclear-stockpiles',
        config: null
      }, {
        slug: 'historic-world-population-by-region',
        config: null
      }, {
        slug: 'population-pyramid-for-germany-midyear2010',
        config: null
      }];

      function renderChart(chart, data) {
        var chartConfig = angular.copy(
          config.charts[$scope.UTIL.toUpperCase(chart.slug)]
        );

        if (!chartConfig) {
          return;
        }

        chartConfig = chartConfig.small || chartConfig;

        chartConfig.title.useHTML = true;
        chartConfig.title.text =
          '<a href="#/chart/' + chart.slug + '">' + chartConfig.title.text + '</a>';
        chartConfig.series = data;

        chart.config = chartConfig;
      }

      function getAndRenderChart(chart) {
        Chart.get(chart.slug)
          .success(renderChart.bind(null, chart));
      }

      $scope.charts = charts;

      for (var key in charts) {
        getAndRenderChart(charts[key]);
      }

  });

});
