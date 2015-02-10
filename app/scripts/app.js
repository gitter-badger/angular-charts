/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/header', 'services/chart', 'controllers/chart', 'services/config']/*deps*/, function (angular, MainCtrl, AboutCtrl, HeaderCtrl, ChartService, ChartCtrl, AppConstant, ConfigConstant)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name chartsApp
   * @description
   * # chartsApp
   *
   * Main module of the application.
   */
  return angular
    .module('chartsApp', [
    'chartsApp.controllers.MainCtrl',
    'chartsApp.controllers.AboutCtrl',
    'chartsApp.controllers.HeaderCtrl',
'chartsApp.services.Chart',
'chartsApp.controllers.ChartCtrl',
'chartsApp.services.Config',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'highcharts-ng'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/chart/:slug', {
          templateUrl: 'views/chart.html',
          controller: 'ChartCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    })
    .run(function ($rootScope) {
      $rootScope.UTIL = {
        toUpperCase: function (string) {
          return string.replace( /-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
          });
        }
      };
    });
});
