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

.controller('scrollCtrl', ['$scope', '$location', '$anchorScroll', '$document', function($scope,$location,$anchorScroll,$document) {

  $scope.goTo = function(id){
    console.log("Clicked on " + id)
    var element = angular.element(document.getElementById(id));
    $document.scrollToElementAnimated(element,0,500).then(function(){
      console.log('Finished animation');
    });
  }
}])

.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', function($scope,$location,$anchorScroll) {


}]);
