'use strict';

angular.module('meanTutorialApp')
  .controller('CiAnalysisCtrl', function ($scope, $http) {
    $scope.filter = 'none';

    $http.get('/api/cianalysis')
    .success(function(data) {
      $scope.cianalysisData = data;
      $scope.originalCianalysis = data;
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

    $scope.deleteCiAnalysis = function(index){
      $http.delete('/api/cianalysis/' + $scope.cianalysisData[index]._id)
      .success(function(){
        $scope.cianalysisData.splice(index, 1);
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };

    $scope.toggleEdit = function(index){
      $scope.cianalysisData[index].edit = !$scope.cianalysisData[index].edit;
    };

    $scope.saveCiAnalysis = function(index){
      $http.put('/api/cianalysis/' + $scope.cianalysisData[index]._id, $scope.cianalysisData[index])
      .success(function(){
        $scope.cianalysisData[index].edit = false;
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };
    $scope.resetCiAnalysis = function(){
        $scope.cianalysisData = $scope.originalCianalysis;
        $scope.filter = 'none';
      }


    $scope.filterByExec = function(exec){
      $scope.resetCiAnalysis();
      $scope.cianalysisData = $scope.cianalysisData.filter(function(cianalysis){
        return cianalysis.execCount === exec;
      });
      $scope.filter = '执行次数: ' + exec;
    };
 
    $scope.filterByTime = function(time){
      $scope.resetCiAnalysis();
      $scope.cianalysisData = $scope.cianalysisData.filter(function(cianalysis){
        return cianalysis.timeCount === time;
      });
      $scope.filter = '节省时间: ' + time;
    };
 

});

