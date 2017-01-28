var myApp = angular.module('myApp');

myApp.controller('PersonsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $scope.getPersons = function(){
    $http.get('/api/persons').then(function(response){
      $scope.persons = response.data;
    })
  }

  $scope.getPersonStatus = function(person){
    if(person.amount > 0){
      return 'Creditor';
    }else if(person.amount < 0){
      return 'Debtor';
    }else{
      return 'Even';
    }
  }

  $scope.getPerson = function(){
    var id = $routeParams.id;
    $http.get('/api/persons/'+id).then(function(response){
      $scope.person = response.data;
    });
  }

  $scope.addPerson = function(){
    $http.post('/api/persons', $scope.person).then(function(response){
      window.location.href='#!/persons';
    });
  }

  $scope.editPerson = function(){
    var id = $routeParams.id;
    $http.put('/api/persons/'+id, $scope.person).then(function(response){
      window.location.href='#!/persons';
    });
  }

}])
