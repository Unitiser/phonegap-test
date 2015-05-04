'use strict';

angular.module('myApp').controller('AboutCtrl', function($scope, Data){

	Data.getDetails(function(details){
		$scope.title = details['title'];
		$scope.description = details['description'];
		$scope.author = details['author'];
		$scope.date = details['date'];
		$scope.$apply();
	});

	Data.getZones(function(zones){
		$scope.zones = zones;
		$scope.$apply();
	});

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "app/about/about.html",
      controller: 'AboutCtrl'
    });
}]);