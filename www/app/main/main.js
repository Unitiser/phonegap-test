'use strict';

angular.module('myApp').controller('MainCtrl', function($scope){
	$scope.hello = "Hello world!";
	// console.log("is this loading??");
}).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'
    });
}]);