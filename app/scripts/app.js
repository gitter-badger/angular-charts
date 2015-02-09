/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/header', 'services/chart']/*deps*/, function (angular, MainCtrl, AboutCtrl, HeaderCtrl, ChartService)/*invoke*/ {
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
        .otherwise({
          redirectTo: '/'
        });
    });
});
