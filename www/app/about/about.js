'use strict';

angular.module('myApp').controller('AboutCtrl', function($scope, Data){
	setTimeout(function() {
		var details = Data['details'];
		console.log(details);
		$scope.title = details['title'];
		$scope.description = details['description'];
		$scope.author = details['author'];
		$scope.date = details['date'];
		$scope.$apply();
	}, 100);

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "app/about/about.html",
      controller: 'AboutCtrl'
    });
}]);