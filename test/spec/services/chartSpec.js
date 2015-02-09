/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Chart', function () {

    // load the service's module
    beforeEach(module('chartsApp.services.Chart'));

    // instantiate service
    var Chart;
    beforeEach(inject(function (_Chart_) {
      Chart = _Chart_;
    }));

    it('should do something', function () {
      expect(!!Chart).toBe(true);
    });

  });
});
