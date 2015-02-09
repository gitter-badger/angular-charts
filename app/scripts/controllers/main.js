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
    .controller('MainCtrl', function ($scope, Chart) {

    function renderMonthlyAverageTemperatureChart(data) {
      $scope.monthlyAverageTemperatureChartConfig = {
        title: {
          text: 'Monthly Average Temperature',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: data
      };
    }

    function renderUSAndUSSRNuclearStockpilesChart(data) {
      $scope.USAndUSSRNuclearStockpilesChartConfig = {
        chart: {
          type: 'area'
        },
        title: {
          text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
          text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
              'thebulletin.metapress.com</a>'
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            }
          }
        },
        yAxis: {
          title: {
            text: 'Nuclear weapon states'
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + 'k';
            }
          }
        },
        tooltip: {
          pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
          area: {
            pointStart: 1940,
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: data
      };
    }

    function renderHistoricWorldPopulationByRegionChart(data) {
      $scope.historicWorldPopulationByRegionChartConfig = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Historic World Population by Region'
        },
        subtitle: {
          text: 'Source: Wikipedia.org'
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 100,
          floating: true,
          borderWidth: 1,
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: data
      };
    }

    function renderBrowserMarketSharesAtASpecificWebsite2014Chart(data) {
      $scope.browserMarketSharesAtASpecificWebsite2014ChartConfig = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              },
              connectorColor: 'silver'
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          data: data
        }]
      };
    }

    Chart.get('monthly-average-temperature')
      .success(renderMonthlyAverageTemperatureChart);

    Chart.get('us-and-ussr-nuclear-stockpiles')
      .success(renderUSAndUSSRNuclearStockpilesChart);

    Chart.get('historic-world-population-by-region')
      .success(renderHistoricWorldPopulationByRegionChart);

    Chart.get('browser-market-shares-at-a-specific-website-2014')
      .success(renderBrowserMarketSharesAtASpecificWebsite2014Chart);

  });

});
