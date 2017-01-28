var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'PersonsController',
    templateUrl: 'views/persons.html'
  })
  .when('/persons', {
    controller: 'PersonsController',
    templateUrl: 'views/persons.html'
  })
  .when('/persons/add', {
    controller: 'PersonsController',
    templateUrl: 'views/add_person.html'
  })
  .when('/persons/edit/:id', {
    controller: 'PersonsController',
    templateUrl: 'views/edit_person.html'
  })
  .when('/transactions/add', {
    controller: 'TransactionsController',
    templateUrl: 'views/add_transaction.html'
  })
  .when('/transactions/edit/:id', {
    controller: 'TransactionsController',
    templateUrl: 'views/edit_transaction.html'
  })
  .when('/transactions/name/:personId', {
    controller: 'TransactionsController',
    templateUrl: 'views/transactions.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
