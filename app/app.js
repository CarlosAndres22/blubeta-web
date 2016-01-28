'use strict';

// Declare app level module which depends on views, and components
angular.module('blubeta', [
  'ngRoute',
  'blubeta.view1',
  'blubeta.view2',
  'blubeta.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
