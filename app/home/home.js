'use strict';

angular.module('blubeta.home', ['ngRoute'])

.config(['$routeProvider','$stateProvider', function($routeProvider,$stateProvider) {

  var home = {
    name: 'home',
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  };

  var about = {
    name: 'home.about',
    parent: home,
    templateUrl: 'home/about.html',
    controller: 'homeCtrl'
  };

  $stateProvider
    .state(home)
    .state(about);

}])

.controller('scrollCtrl', ['$scope', '$location', '$anchorScroll', function($scope,$location,$anchorScroll) {
  $scope.scrollTo = function(id){
    console.log("Clicked on " + id)
    $location.hash(id);
    $anchorScroll();
  }
}])

.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', function($scope,$location,$anchorScroll) {


}]);
