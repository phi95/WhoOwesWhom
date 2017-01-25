var myApp = angular.module('myApp');

myApp.controller('DebtorsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

  $scope.getDebtors = function(){
    $http.get('/api/debtors').then(function(response){
      $scope.debtors = response.data;
    });
  }

  $scope.getDebtor = function(){
    $http.get('/api/debtors/:id').then(function(response){
      $scope.debtor = response.data;
    });
  }

}]);
