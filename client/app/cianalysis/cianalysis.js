'use strict';

angular.module('meanTutorialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cianalysis', {
        url: '/cianalysis',
        templateUrl: 'app/cianalysis/cianalysis.html',
        controller: 'CiAnalysisCtrl'
      });
  });
