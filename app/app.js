'use strict';

// Declare app level module which depends on views, and components
angular.module('blubeta', [
  'ngRoute',
  'ui.router',
  'blubeta.home',
  'blubeta.version'
]).

config(['$stateProvider','$urlRouterProvider', function($routeProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
}]);
