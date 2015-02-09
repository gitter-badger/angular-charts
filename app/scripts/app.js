/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/header']/*deps*/, function (angular, MainCtrl, AboutCtrl, HeaderCtrl)/*invoke*/ {
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
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
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
