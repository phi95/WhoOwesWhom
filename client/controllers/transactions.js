var myApp = angular.module('myApp');

myApp.controller('TransactionsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $scope.getTransactions = function(){
    $http.get('/api/transactions').then(function(response){
      $scope.transactions = response.data;
    });
  }
  $scope.getTransactionsByPersonId = function(){
    var personId = $routeParams.personId;
    $http.get('/api/transactions/name/'+personId).then(function(response){
      $http.get('/api/persons/'+personId).then(function(response2){
        $scope.name = response2.data.name;
      });
      $scope.transactions = response.data;
    });
  }
  $scope.getTransaction = function(){
    var id = $routeParams.id;
    $http.get('/api/transactions/id/'+id).then(function(response){
      $scope.transaction = response.data;
    });
  }
  $scope.getPersons = function(){
    $http.get('/api/persons').then(function(response){
      $scope.persons = response.data;
    })
  }
  $scope.addTransaction = function(){
    $http.post('/api/transactions', $scope.transaction).then(function(response){
      window.location.href='#!/transactions/name/'+$scope.transaction.id;
    });
  }
  $scope.editTransaction = function(){
    var id = $routeParams.id;
    $http.put('/api/transactions/id/'+id, $scope.transaction).then(function(response){
      window.location.href='#!/transactions/name/'+$scope.transaction.id;
    });
  }
  $scope.deleteTransaction = function(id){
    var personId;
    $http.get('/api/transactions/id/'+id).then(function(response2){
      personId = response2.data.id;
    });
    $http.delete('/api/transactions/id/'+id).then(function(response){
      window.location.href='#!/transactions/name/'+personId;
    });
  }
}]);
