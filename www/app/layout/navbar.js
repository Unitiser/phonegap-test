angular.module('myApp').controller('NavbarCtrl', function($scope, Phonegap){
	$scope.displayNav = false;
	$scope.toggleNav = function(){
		$scope.displayNav = !$scope.displayNav;
		console.log('toggled navigation');
	};
});