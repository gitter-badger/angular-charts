define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc factory
   * @name chartsApp.Chart
   * @description
   * # Chart
   * Service in the chartsApp.
   */
  angular.module('chartsApp.services.Chart', [])
  .factory('Chart', function ($http) {
    return {
      get: function(slug) {
        return $http.get('data/' + slug + '.json');
      },
      save: function(slug, data) {
        return $http.put('chart/' + slug, data);
      }
    };
  });
});
