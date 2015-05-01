'use strict';

angular.module('myApp').controller('MainCtrl', function($scope, $rootScope,Phonegap){
	$scope.hello = "Hello world!";
	$scope.isReady = $rootScope.deviceready;
	// console.log("is this loading??");
	$scope.vibrate = function(){
		navigator.vibrate([1000, 500, 2000, 500, 1000]);
	}

	$scope.$on('deviceready', function(event, data){
	    $scope.isReady = true;
	    $scope.$apply();
	});

}).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'
    });
}]);