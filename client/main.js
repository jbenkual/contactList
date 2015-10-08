'use strict';

window.app = angular.module('contacts', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state("home", {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

}]); 