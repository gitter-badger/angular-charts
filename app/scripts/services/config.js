define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name chartsApp.config
   * @description
   * # config
   * Constant in the chartsApp.
   */
  angular.module('chartsApp.services.Config', [])
	.constant('config', {
    charts: {
      monthlyAverageTemperature: {
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
        }
      },
      usAndUssrNuclearStockpiles: {
       options: {
         chart: {
            type: 'area'
          }
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
      },
      historicWorldPopulationByRegion: {
        options: {
          chart: {
            type: 'area'
          }
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
          backgroundColor: '#FFFFFF',
          shadow: true
        },
        credits: {
          enabled: false
        }
      },
      populationPyramidForGermanyMidyear2010: {
        options: {
          chart: {
            type: 'spline'
          }
        },
        title: {
          text: 'Population pyramid for Germany, midyear 2010'
        },
        subtitle: {
          text: 'Source: www.census.gov'
        },
        xAxis: [{
          categories: ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '],
          reversed: false,
          labels: {
            step: 1
          }
        }, { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '],
          linkedTo: 0,
          labels: {
            step: 1
          }
        }],
        yAxis: {
          title: {
            text: null
          },
          labels: {
            formatter: function () {
              return (Math.abs(this.value) / 1000000) + 'M';
            }
          },
          min: -4000000,
          max: 4000000
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
          }
        }
      }
    }
  });

});
