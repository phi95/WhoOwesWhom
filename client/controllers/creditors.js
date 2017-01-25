var myApp = angular.module('myApp');

myApp.controller('CreditorsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $scope.getCreditors = function(){
    $http.get('/api/creditors').then(function(response){
      $scope.creditors = response.data;
    });
  }

  $scope.getCreditor = function(){
    $http.get('/api/creditors/:id').then(function(response){
      $scope.creditor = response.data;
    });
  }

}]);
