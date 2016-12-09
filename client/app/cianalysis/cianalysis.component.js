'use strict';

angular.module('meanTutorialApp')
  .controller('CiAnalysisCtrl', function ($scope, $http) {

    $http.get('/api/cianalysis')
    .success(function(data) {
      $scope.cianalysisData = data;
      console.log($scope.cianalysisData);
    })
    .error(function(err) {
      alert('出问题了！');
    });


    $scope.addNewCiAnalysis = function(){
      $http.post('/api/cianalysis', $scope.newCiAnalysis)
      .success(function(){
        $scope.cianalysisData.push($scope.newCiAnalysis);
        $scope.newCiAnalysis = {};
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };

});

