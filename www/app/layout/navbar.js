angular.module('myApp').controller('NavbarCtrl', function($scope, Phonegap, $state){
	$scope.displayNav = false;
	$scope.toggleNav = function(){
		$scope.displayNav = !$scope.displayNav;
		console.log('toggled navigation');
	};

	$scope.back = function(){
		if($state.$current.name != 'main'){
			$state.go('main');
		}else{
			$scope.exit();
		}
	}

	$scope.$on('menubutton', function(){
		$scope.toggleNav();
		$scope.$apply();
	});

	$scope.$on('backbutton', function(){
		$scope.back();
	});

	$scope.exit = function(){
		Phonegap.exit();
	}
});