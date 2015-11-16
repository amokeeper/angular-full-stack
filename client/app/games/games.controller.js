'use strict';

angular.module('meanTutorialApp')
  .controller('GamesCtrl', function ($scope, $http) {

    $http.get('/api/games')
    .success(function(data) {
      $scope.games = data;
      console.log($scope.games);
    })
    .error(function(err) {
      alert('Error! Something went wrong');
    });

    $scope.addNewGame = function(){
      $http.post('/api/games', $scope.newGame)
      .success(function(){
        $scope.games.push($scope.newGame);
        $scope.newGame = {};
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };

  });
