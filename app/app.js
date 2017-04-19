'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngResource',
  'ngRoute',
  'data.temperture',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('GreetingController', ['$scope', 'temperture',
  function($scope, $temperture) {
    $scope.name = {
      first: 'asdf',
      last: 'jkl;'
    };

    $scope.numTimesClicked = 0;

    $scope.click = function() {
      $scope.numTimesClicked += 1;
    };

  }
]);
