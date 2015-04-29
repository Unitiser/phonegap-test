'use strict';

angular.module('myApp').controller('AboutCtrl', function($scope){
	$scope.hello = "Hello world!";
}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "app/about/about.html",
      controller: 'AboutCtrl'
    });
}]);