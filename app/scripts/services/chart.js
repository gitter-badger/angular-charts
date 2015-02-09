define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name chartsApp.Chart
   * @description
   * # Chart
   * Service in the chartsApp.
   */
  angular.module('chartsApp.services.Chart', [])
  .service('Chart', function ($http) {
    return {
      get: function(slug) {
        return $http.get('data/' + slug + '.json');
      }
    };
  });
});
