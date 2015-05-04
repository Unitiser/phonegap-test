angular.module('myApp').controller('NavbarCtrl', function($scope, Phonegap){
	$scope.displayNav = false;
	$scope.toggleNav = function(){
		$scope.displayNav = !$scope.displayNav;
		console.log('toggled navigation');
	};

	$scope.$on('menubutton', function(){
		$scope.toggleNav();
		$scope.$apply();
	});

	$scope.exit = function(){
		Phonegap.exit();
	}
});